const messages = {
    sunny: [
        "今天的阳光很好，你也是。",
        "阳光正好，万物可爱。",
        "愿你的心情如晴天般明朗。",
        "好天气，好心情，世界因你而明亮。",
        "阳光穿过云层，也穿过你的心。",
        "今天又是被阳光眷顾的一天。",
        "保持热爱，奔赴山海。",
        "愿你眼中有星光，心中有暖阳。",
        "生活明朗，万物可爱，人间值得。",
        "每一天都值得被阳光照耀。"
    ],
    cloudy: [
        "多云的天空，也有独特的美。",
        "平静是最好的养生。",
        "云淡风轻，日子缓缓。",
        "不急不躁，一切刚刚好。",
        "柔和的日子，柔和的你。",
        "云层之上，总有阳光在等待。",
        "享受这份宁静吧。",
        "平静是力量，也是智慧。",
        "云会散，天会蓝。",
        "此刻的平静，是最好的礼物。"
    ],
    overcast: [
        "阴天也会过去，晴天会来的。",
        "低落的时候，就让自己休息一下。",
        "阴霾终将散去，光明就在前方。",
        "允许自己偶尔阴天。",
        "今天的天空有点灰，但你会好起来的。",
        "低落的情绪，也是真实的你。",
        "阴天是自然的恩赐，让人静下来。",
        "给自己一些时间和空间。",
        "乌云后面依然是蓝天。",
        "你的感受都是被允许的。"
    ],
    rainy: [
        "允许自己偶尔是一场雨，天会晴的。",
        "雨会停，云会散。",
        "淋过雨的人，更懂得撑伞的温暖。",
        "雨天适合发呆，也适合治愈。",
        "让雨水冲刷掉不开心吧。",
        "雨后总会有彩虹。",
        "难过是可以的，你不必逞强。",
        "今天的雨，是明天的彩虹。",
        "给自己一个拥抱。",
        "雨会停，天会亮，你会被爱。"
    ],
    thunder: [
        "暴风雨过后，会有最美的彩虹。",
        "焦虑是暂时的，你比你想象的强大。",
        "深呼吸，一切都会过去。",
        "雷雨终将平息，阳光终将到来。",
        "你正在经历风暴，但风暴会过去。",
        "给自己一些耐心。",
        "焦虑只是情绪，不是事实。",
        "你值得被温柔以待。",
        "风雨过后，会更加坚强。",
        "相信自己，你可以度过难关。"
    ]
};

const moodEmojis = {
    sunny: "☀️",
    cloudy: "⛅",
    overcast: "☁️",
    rainy: "🌧️",
    thunder: "⛈️"
};

let currentMood = null;
let currentDate = new Date();
let viewedMonth = new Date();

function init() {
    loadMoodData();
    setupEventListeners();
    renderCurrentMood();
    renderCalendar();
    renderStats();
}

function loadMoodData() {
    const stored = localStorage.getItem('moodData');
    if (!stored) {
        const defaultData = {};
        localStorage.setItem('moodData', JSON.stringify(defaultData));
    }
}

function getMoodData() {
    const stored = localStorage.getItem('moodData');
    return stored ? JSON.parse(stored) : {};
}

function saveMoodData(data) {
    localStorage.setItem('moodData', JSON.stringify(data));
}

function setupEventListeners() {
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => selectMood(btn.dataset.mood));
    });

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => showPage(btn.dataset.page));
    });

    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => showPage(btn.dataset.page));
    });

    document.getElementById('prev-month').addEventListener('click', () => {
        viewedMonth.setMonth(viewedMonth.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('next-month').addEventListener('click', () => {
        viewedMonth.setMonth(viewedMonth.getMonth() + 1);
        renderCalendar();
    });
}

function selectMood(mood) {
    currentMood = mood;
    const today = new Date().toISOString().split('T')[0];
    const data = getMoodData();
    data[today] = { mood, timestamp: Date.now() };
    saveMoodData(data);

    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.mood === mood) {
            btn.classList.add('selected');
        }
    });

    updateAtmosphere(mood);
    showMessage(mood);
    renderCalendar();
    renderStats();
}

function updateAtmosphere(mood) {
    const bg = document.getElementById('atmosphere-bg');
    bg.className = 'atmosphere-bg ' + mood;

    const rainContainer = document.getElementById('rain-container');
    rainContainer.innerHTML = '';

    if (mood === 'rainy' || mood === 'thunder') {
        createRain(rainContainer);
    }

    if (mood === 'thunder') {
        startLightning();
    } else {
        stopLightning();
    }
}

function createRain(container) {
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(drop);
    }

    for (let i = 0; i < 8; i++) {
        const ripple = document.createElement('div');
        ripple.className = 'rain-ripple';
        ripple.style.left = Math.random() * 100 + '%';
        ripple.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(ripple);
    }
}

let lightningInterval = null;

function startLightning() {
    lightningInterval = setInterval(() => {
        if (Math.random() > 0.7) {
            const overlay = document.getElementById('lightning-overlay');
            overlay.classList.add('flash');
            setTimeout(() => overlay.classList.remove('flash'), 200);
        }
    }, 3000);
}

function stopLightning() {
    if (lightningInterval) {
        clearInterval(lightningInterval);
        lightningInterval = null;
    }
}

function showMessage(mood) {
    const messageSection = document.getElementById('message-section');
    const messageText = document.getElementById('message-text');
    const moodMessages = messages[mood];
    const randomMessage = moodMessages[Math.floor(Math.random() * moodMessages.length)];

    messageSection.classList.remove('hidden');
    messageText.innerHTML = '';

    typewriterEffect(messageText, randomMessage);
}

function typewriterEffect(element, text, index = 0) {
    if (index < text.length) {
        element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"></span>';
        setTimeout(() => typewriterEffect(element, text, index + 1), 50);
    } else {
        element.innerHTML = text;
    }
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    if (page === 'home') {
        document.getElementById('home-page')?.classList.remove('hidden');
        renderCurrentMood();
    } else if (page === 'calendar') {
        document.getElementById('calendar-page').classList.remove('hidden');
        renderCalendar();
    } else if (page === 'stats') {
        document.getElementById('stats-page').classList.remove('hidden');
        renderStats();
    }

    document.querySelector(`.nav-btn[data-page="${page}"]`)?.classList.add('active');
}

function renderCurrentMood() {
    const today = new Date().toISOString().split('T')[0];
    const data = getMoodData();

    if (data[today]) {
        currentMood = data[today].mood;
        document.querySelectorAll('.mood-btn').forEach(btn => {
            btn.classList.remove('selected');
            if (btn.dataset.mood === currentMood) {
                btn.classList.add('selected');
            }
        });
        updateAtmosphere(currentMood);
        showMessage(currentMood);
    } else {
        currentMood = null;
        document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('selected'));
        document.getElementById('atmosphere-bg').className = 'atmosphere-bg';
        document.getElementById('message-section').classList.add('hidden');
        stopLightning();
        document.getElementById('rain-container').innerHTML = '';
    }
}

function renderCalendar() {
    const year = viewedMonth.getFullYear();
    const month = viewedMonth.getMonth();
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月',
                         '七月', '八月', '九月', '十月', '十一月', '十二月'];

    document.getElementById('current-month').textContent = `${year}年 ${monthNames[month]}`;

    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-day empty';
        grid.appendChild(empty);
    }

    const data = getMoodData();

    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = day;

        if (dateStr === todayStr) {
            dayEl.classList.add('today');
        }

        if (data[dateStr]) {
            const dot = document.createElement('div');
            dot.className = `mood-dot ${data[dateStr].mood}`;
            dayEl.appendChild(dot);

            dayEl.addEventListener('click', () => showDayDetail(dateStr, data[dateStr].mood));
        }

        grid.appendChild(dayEl);
    }
}

function showDayDetail(dateStr, mood) {
    const detail = document.getElementById('day-detail');
    const moodData = getMoodData()[dateStr];

    document.getElementById('detail-date').textContent = dateStr;
    document.getElementById('detail-mood').textContent = moodEmojis[mood];

    const data = getMoodData();
    const dayMessages = messages[mood];
    const randomMessage = dayMessages[Math.floor(Math.random() * dayMessages.length)];

    if (moodData && moodData.timestamp) {
        const date = new Date(moodData.timestamp);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        document.getElementById('detail-message').textContent = `${hours}:${minutes} - ${randomMessage}`;
    } else {
        document.getElementById('detail-message').textContent = randomMessage;
    }

    detail.classList.remove('hidden');
}

function renderStats() {
    const data = getMoodData();
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    let monthDays = 0;
    let sunnyStreak = 0;
    let longestStreak = 0;
    let currentStreak = 0;
    const moodCounts = { sunny: 0, cloudy: 0, overcast: 0, rainy: 0, thunder: 0 };

    const sortedDates = Object.keys(data).sort();

    for (const dateStr of sortedDates) {
        const date = new Date(dateStr);
        if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
            monthDays++;
            const mood = data[dateStr].mood;
            moodCounts[mood]++;

            if (mood === 'sunny') {
                currentStreak++;
                if (currentStreak > longestStreak) longestStreak = currentStreak;
            } else {
                currentStreak = 0;
            }
        }
    }

    let tempStreak = 0;
    for (const dateStr of sortedDates) {
        const mood = data[dateStr].mood;
        if (mood === 'sunny') {
            tempStreak++;
            sunnyStreak = Math.max(sunnyStreak, tempStreak);
        } else {
            tempStreak = 0;
        }
    }

    document.getElementById('total-days').textContent = monthDays;
    document.getElementById('streak-sunny').textContent = sunnyStreak;
    document.getElementById('longest-streak').textContent = longestStreak;

    const chart = document.getElementById('mood-chart');
    chart.innerHTML = '';

    const moodLabels = {
        sunny: '晴',
        cloudy: '多云',
        overcast: '阴',
        rainy: '雨',
        thunder: '雷雨'
    };

    const moodColors = {
        sunny: '#FDE8C4',
        cloudy: '#D1D5DB',
        overcast: '#94A3B8',
        rainy: '#7DD3FC',
        thunder: '#6366F1'
    };

    let hasData = false;
    for (const mood in moodCounts) {
        if (moodCounts[mood] > 0) {
            hasData = true;
            const item = document.createElement('div');
            item.className = 'mood-chart-item';
            item.innerHTML = `
                <div class="mood-chart-dot" style="background: ${moodColors[mood]}"></div>
                <span class="mood-chart-label">${moodLabels[mood]}: ${moodCounts[mood]}</span>
            `;
            chart.appendChild(item);
        }
    }

    if (!hasData) {
        chart.innerHTML = '<p style="opacity: 0.5; font-size: 0.9rem;">暂无本月数据</p>';
    }

    checkAISummary();
}

async function checkAISummary() {
    const data = getMoodData();
    const sortedDates = Object.keys(data).sort();
    const recentDates = sortedDates.slice(-7);

    if (recentDates.length >= 3) {
        const aiSummary = document.getElementById('ai-summary');
        const summaryText = document.getElementById('summary-text');

        const recentMoods = recentDates.map(d => {
            const mood = data[d].mood;
            const labels = { sunny: '晴朗愉悦', cloudy: '平静舒缓', overcast: '有些低落', rainy: '难受伤心', thunder: '焦虑不安' };
            return labels[mood];
        }).join('、');

        summaryText.textContent = `近7天，你的情绪如天气般变化：${recentMoods}。记得照顾好自己的心情，每一天都值得被记录。`;

        aiSummary.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', init);