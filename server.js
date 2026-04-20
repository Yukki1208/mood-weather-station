const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const rooms = new Map();

function generateRoomId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function generateMessageId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('create-room', (callback) => {
    let roomId = generateRoomId();
    while (rooms.has(roomId)) {
      roomId = generateRoomId();
    }

    const room = {
      id: roomId,
      createdAt: Date.now(),
      messages: [],
      isActive: true,
      hostId: socket.id
    };

    rooms.set(roomId, room);
    socket.join(roomId);
    socket.roomId = roomId;
    socket.isHost = true;

    callback({
      success: true,
      roomId,
      room
    });
  });

  socket.on('join-room', (data, callback) => {
    const { roomId } = data;
    const room = rooms.get(roomId);

    if (!room) {
      callback({ success: false, error: '房间不存在' });
      return;
    }

    if (!room.isActive) {
      callback({ success: false, error: '房间已关闭' });
      return;
    }

    socket.join(roomId);
    socket.roomId = roomId;
    socket.isHost = false;

    callback({
      success: true,
      room,
      message: '加入成功'
    });

    socket.to(roomId).emit('participant-update', {
      count: getRoomParticipantCount(roomId)
    });
  });

  socket.on('send-message', (data, callback) => {
    const { roomId, content } = data;
    const room = rooms.get(roomId);

    if (!room || !room.isActive) {
      callback({ success: false, error: '房间不存在或已关闭' });
      return;
    }

    const message = {
      id: generateMessageId(),
      content: content.trim(),
      timestamp: Date.now(),
      isPinned: false
    };

    room.messages.push(message);

    io.to(roomId).emit('new-message', message);

    callback({ success: true, message });
  });

  socket.on('pin-message', (data, callback) => {
    const { roomId, messageId } = data;
    const room = rooms.get(roomId);

    if (!room) {
      callback({ success: false, error: '房间不存在' });
      return;
    }

    const message = room.messages.find(m => m.id === messageId);
    if (message) {
      message.isPinned = !message.isPinned;
      io.to(roomId).emit('message-pinned', message);
      callback({ success: true, message });
    } else {
      callback({ success: false, error: '消息不存在' });
    }
  });

  socket.on('delete-message', (data, callback) => {
    const { roomId, messageId } = data;
    const room = rooms.get(roomId);

    if (!room) {
      callback({ success: false, error: '房间不存在' });
      return;
    }

    const messageIndex = room.messages.findIndex(m => m.id === messageId);
    if (messageIndex !== -1) {
      room.messages.splice(messageIndex, 1);
      io.to(roomId).emit('message-deleted', { messageId });
      callback({ success: true });
    } else {
      callback({ success: false, error: '消息不存在' });
    }
  });

  socket.on('close-room', (data, callback) => {
    const { roomId } = data;
    const room = rooms.get(roomId);

    if (!room) {
      callback({ success: false, error: '房间不存在' });
      return;
    }

    room.isActive = false;
    io.to(roomId).emit('room-closed');
    rooms.delete(roomId);

    callback({ success: true });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);

    if (socket.roomId) {
      const room = rooms.get(socket.roomId);
      if (room && room.isActive) {
        io.to(socket.roomId).emit('participant-update', {
          count: getRoomParticipantCount(socket.roomId)
        });
      }

      if (socket.isHost && room) {
        room.isActive = false;
        io.to(socket.roomId).emit('room-closed');
        rooms.delete(socket.roomId);
      }
    }
  });
});

function getRoomParticipantCount(roomId) {
  const room = io.sockets.adapter.rooms.get(roomId);
  return room ? room.size : 0;
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
