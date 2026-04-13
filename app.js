const messages = {
    sunny: {
        common: [
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
        morning: [
            "清晨的第一缕阳光，照亮你的一天。",
            "早安，今天的阳光在等你。",
            "晨光熹微，愿你心怀暖阳。",
            "日出东方，美好正在发生。"
        ],
        afternoon: [
            "午后阳光正好，适合发呆。",
            "下午的暖阳，是大自然的馈赠。",
            "阳光下的你，真好看。"
        ],
        evening: [
            "夕阳西下，明天又是新的一天。",
            "晚霞满天，你比晚霞更美。",
            "日落尤其温柔，人间皆是浪漫。"
        ]
    },
    cloudy: {
        common: [
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
        morning: [
            "清晨的微风，带走昨日的疲惫。",
            "新的一天，从平静开始。",
            "早安，云朵在向你问好。"
        ],
        afternoon: [
            "午后的云朵，悠悠地飘着。",
            "下午好，给自己一杯茶的时间。"
        ],
        evening: [
            "傍晚的云彩，是天空的诗。",
            "暮色四合，云层染上金边。"
        ]
    },
    overcast: {
        common: [
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
        morning: [
            "早安，即使今天没有阳光。",
            "阴天的早晨，也值得期待。",
            "新的一天，阴晴都是好天气。"
        ],
        afternoon: [
            "下午好，休息一下吧。",
            "阴天适合放空，适合慢下来。"
        ],
        evening: [
            "黄昏虽暗，明日会亮。",
            "夜色渐浓，你很勇敢。"
        ]
    },
    rainy: {
        common: [
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
        morning: [
            "早安，雨天的被窝最温暖。",
            "雨天，宜静坐，宜听雨。",
            "今天的雨，是天空在哭泣，也是在洗涤。"
        ],
        afternoon: [
            "午后的雨声，是自然的催眠曲。",
            "雨天适合阅读，适合发呆。"
        ],
        evening: [
            "雨夜的灯火，格外温暖。",
            "雨声淅沥，夜色温柔。",
            "今夜的雨，会带来明早的清新。"
        ]
    },
    thunder: {
        common: [
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
        ],
        morning: [
            "早安，即使雷声轰鸣，你依然坚强。",
            "风暴来临，也是洗礼之时。",
            "今天可能会难，但你会挺过去的。"
        ],
        afternoon: [
            "午后的雷声，是天空在释放。",
            "深呼吸，暴风雨也会过去的。"
        ],
        evening: [
            "雷电之夜，记得关好窗户。",
            "雷雨过后，万物更新。",
            "今晚的电闪雷鸣，明早会是晴天。"
        ]
    }
};

const moodConfig = {
    sunny: { emoji: "☀️", label: "晴", emotion: "愉悦", color: "#FFD93D" },
    cloudy: { emoji: "⛅", label: "多云", emotion: "平静", color: "#94A3B8" },
    overcast: { emoji: "☁️", label: "阴", emotion: "低落", color: "#64748B" },
    rainy: { emoji: "🌧️", label: "雨", emotion: "难过", color: "#38BDF8" },
    thunder: { emoji: "⛈️", label: "雷雨", emotion: "焦虑", color: "#6366F1" }
};

const greetingMessages = {
    morning: ["早安", "新的一天开始了", "今天天气不错", "早晨的空气真好"],
    afternoon: ["下午好", "午后时光", "现在感觉如何", "下午也要加油哦"],
    evening: ["晚上好", "一天辛苦了", "夜幕降临了", "该休息了"],
    night: ["夜深了", "早点休息", "晚安"]
};

let currentMood = null;
let viewedMonth = new Date();
let onboardingStep = 1;

function init() {
    loadMoodData();
    setupEventListeners();
    updateTime();
    setInterval(updateTime, 60000);
    renderCurrentMood();
    renderCalendar();
    renderStats();
    checkOnboarding();
    createParticles();
}

function getTimePeriod() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 9) return "morning";
    if (hour >= 9 && hour < 14) return "afternoon";
    if (hour >= 14 && hour < 18) return "afternoon";
    if (hour >= 18 && hour < 22) return "evening";
    return "night";
}

function getGreeting() {
    const period = getTimePeriod();
    const messages = greetingMessages[period];
    return messages[Math.floor(Math.random() * messages.length)];
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}`;

    const greetingText = document.getElementById('greeting-text');
    if (greetingText && !currentMood) {
        greetingText.textContent = getGreeting();
    }
}

function loadMoodData() {
    const stored = localStorage.getItem('moodData_v2');
    if (!stored) {
        const defaultData = {};
        localStorage.setItem('moodData_v2', JSON.stringify(defaultData));
    }
}

function getMoodData() {
    const stored = localStorage.getItem('moodData_v2');
    return stored ? JSON.parse(stored) : {};
}

function saveMoodData(data) {
    localStorage.setItem('moodData_v2', JSON.stringify(data));
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

    document.querySelectorAll('.detail-close, .onboarding-close').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.day-detail, .onboarding').classList.add('hidden');
        });
    });

    document.getElementById('onboarding-next')?.addEventListener('click', handleOnboardingNext);
}

function selectMood(mood) {
    currentMood = mood;
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const period = getTimePeriod();
    const data = getMoodData();

    const moodMessages = messages[mood];
    let selectedMessages = moodMessages.common;
    if (moodMessages[period]) {
        selectedMessages = [...moodMessages[period], ...moodMessages.common];
    }
    const randomMessage = selectedMessages[Math.floor(Math.random() * selectedMessages.length)];

    data[todayStr] = {
        mood,
        message: randomMessage,
        timestamp: Date.now(),
        hour: today.getHours()
    };
    saveMoodData(data);

    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.mood === mood) {
            btn.classList.add('selected');
        }
    });

    updateAtmosphere(mood);
    showMessage(randomMessage);
    showTodaySummary(mood, today);

    const greetingText = document.getElementById('greeting-text');
    greetingText.textContent = `今天心情${moodConfig[mood].emoji}`;

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
    for (let i = 0; i < 60; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 0.5 + 0.6) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(drop);
    }

    for (let i = 0; i < 10; i++) {
        const ripple = document.createElement('div');
        ripple.className = 'rain-ripple';
        ripple.style.left = Math.random() * 100 + '%';
        ripple.style.top = (Math.random() * 30 + 70) + '%';
        ripple.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(ripple);
    }
}

let lightningInterval = null;

function startLightning() {
    lightningInterval = setInterval(() => {
        if (Math.random() > 0.6) {
            const overlay = document.getElementById('lightning-overlay');
            overlay.classList.add('flash');
            setTimeout(() => overlay.classList.remove('flash'), 250);
        }
    }, 4000);
}

function stopLightning() {
    if (lightningInterval) {
        clearInterval(lightningInterval);
        lightningInterval = null;
    }
}

function showMessage(text) {
    const messageSection = document.getElementById('message-section');
    const messageText = document.getElementById('message-text');
    const messageAuthor = document.getElementById('message-author');

    messageSection.classList.remove('hidden');
    messageText.innerHTML = '';

    typewriterEffect(messageText, text);
    messageAuthor.textContent = "— 心情气象站";
}

function typewriterEffect(element, text, index = 0) {
    if (index < text.length) {
        element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"></span>';
        setTimeout(() => typewriterEffect(element, text, index + 1), 40);
    } else {
        element.innerHTML = text;
    }
}

function showTodaySummary(mood, date) {
    const summary = document.getElementById('today-summary');
    const emoji = document.getElementById('summary-emoji');
    const moodText = document.getElementById('summary-mood-text');
    const hourSpan = document.getElementById('summary-hour');

    summary.classList.remove('hidden');
    emoji.textContent = moodConfig[mood].emoji;
    moodText.textContent = moodConfig[mood].emotion;

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    hourSpan.textContent = `${hours}:${minutes}`;
}

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const mainContent = document.querySelector('.main-content');
    const bottomNav = document.querySelector('.bottom-nav');

    if (page === 'home') {
        mainContent.style.display = 'block';
        bottomNav.style.display = 'flex';
        renderCurrentMood();
    } else {
        mainContent.style.display = 'none';
        bottomNav.style.display = 'none';
    }

    if (page === 'calendar') {
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
        showMessage(data[today].message);
        showTodaySummary(currentMood, new Date(data[today].timestamp));

        const greetingText = document.getElementById('greeting-text');
        greetingText.textContent = `今天心情${moodConfig[currentMood].emoji}`;
    } else {
        currentMood = null;
        document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('selected'));
        document.getElementById('atmosphere-bg').className = 'atmosphere-bg';
        document.getElementById('message-section').classList.add('hidden');
        document.getElementById('today-summary').classList.add('hidden');
        stopLightning();
        document.getElementById('rain-container').innerHTML = '';

        const greetingText = document.getElementById('greeting-text');
        greetingText.textContent = getGreeting();
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

        if (dateStr === todayStr) {
            dayEl.classList.add('today');
        }

        if (data[dateStr]) {
            dayEl.classList.add('has-mood');
            const dot = document.createElement('div');
            dot.className = `mood-dot ${data[dateStr].mood}`;
            dayEl.appendChild(dot);
            dayEl.addEventListener('click', () => showDayDetail(dateStr, data[dateStr].mood, data[dateStr].message));
        }

        grid.appendChild(dayEl);
    }
}

function showDayDetail(dateStr, mood, message) {
    const detail = document.getElementById('day-detail');
    const moodEl = document.getElementById('detail-mood');
    const moodTextEl = document.getElementById('detail-mood-text');
    const messageEl = document.getElementById('detail-message');
    const dateEl = document.getElementById('detail-date');

    dateEl.textContent = dateStr;
    moodEl.textContent = moodConfig[mood].emoji;
    moodTextEl.textContent = moodConfig[mood].emotion;
    messageEl.textContent = message || messages[mood].common[0];

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

    const moodIndex = calculateMoodIndex(moodCounts, monthDays);
    document.getElementById('mood-index').textContent = moodIndex;

    renderMoodChart(moodCounts, monthDays);
    renderWeeklyTrend(data);
    checkAISummary();
}

function calculateMoodIndex(counts, total) {
    if (total === 0) return '--';
    const weights = { sunny: 100, cloudy: 75, overcast: 50, rainy: 25, thunder: 10 };
    let score = 0;
    for (const mood in counts) {
        score += weights[mood] * counts[mood];
    }
    return Math.round(score / total);
}

function renderMoodChart(counts, total) {
    const chart = document.getElementById('mood-chart');
    const bars = document.getElementById('mood-bars');
    chart.innerHTML = '';
    bars.innerHTML = '';

    const labels = {
        sunny: '晴',
        cloudy: '多云',
        overcast: '阴',
        rainy: '雨',
        thunder: '雷雨'
    };

    let hasData = false;
    let maxCount = Math.max(...Object.values(counts), 1);

    for (const mood in counts) {
        if (counts[mood] > 0) {
            hasData = true;
            const item = document.createElement('div');
            item.className = 'mood-chart-item';
            item.innerHTML = `
                <div class="mood-chart-dot ${mood}"></div>
                <span class="mood-chart-label">${labels[mood]}</span>
                <span class="mood-chart-count">${counts[mood]}</span>
            `;
            chart.appendChild(item);

            const barItem = document.createElement('div');
            barItem.className = 'mood-bar-item';
            const height = (counts[mood] / maxCount) * 60;
            barItem.innerHTML = `
                <div class="mood-bar ${mood}" style="height: ${height}px"></div>
                <span class="mood-bar-label">${labels[mood]}</span>
            `;
            bars.appendChild(barItem);
        }
    }

    if (!hasData) {
        chart.innerHTML = '<p style="opacity: 0.5; font-size: 0.9rem;">暂无本月数据</p>';
    }
}

function renderWeeklyTrend(data) {
    const chart = document.getElementById('weekly-chart');
    chart.innerHTML = '';

    const today = new Date();
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekData = [];

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const dayOfWeek = date.getDay();
        const mood = data[dateStr]?.mood || null;
        weekData.push({ date: dateStr, day: weekDays[dayOfWeek], mood });
    }

    weekData.forEach(day => {
        const item = document.createElement('div');
        item.className = 'weekly-item';
        const emoji = day.mood ? moodConfig[day.mood].emoji : '·';
        item.innerHTML = `
            <span class="weekly-emoji">${emoji}</span>
            <span class="weekly-label">${day.day}</span>
        `;
        chart.appendChild(item);
    });
}

function checkAISummary() {
    const data = getMoodData();
    const sortedDates = Object.keys(data).sort();
    const recentDates = sortedDates.slice(-7);

    if (recentDates.length >= 3) {
        const aiSummary = document.getElementById('ai-summary');
        const summaryText = document.getElementById('summary-text');

        const moodLabels = {
            sunny: '晴朗愉悦',
            cloudy: '平静舒缓',
            overcast: '有些低落',
            rainy: '难受伤心',
            thunder: '焦虑不安'
        };

        const recentMoods = recentDates.map(d => moodLabels[data[d].mood]).join('、');

        let insight = '';
        const sunnyCount = recentDates.filter(d => data[d].mood === 'sunny').length;
        const rainyCount = recentDates.filter(d => data[d].mood === 'rainy' || data[d].mood === 'thunder').length;

        if (sunnyCount >= 5) {
            insight = '这周阳光满满，你的心情真棒！';
        } else if (rainyCount >= 4) {
            insight = '这周有些艰难，但请相信，风雨后会见彩虹。';
        } else {
            insight = '生活就像天气，有晴有雨，都是独特的风景。';
        }

        summaryText.textContent = `近7天，你的情绪如天气般变化：${recentMoods}。${insight}`;

        aiSummary.classList.remove('hidden');
    }
}

function checkOnboarding() {
    const hasOnboarded = localStorage.getItem('hasOnboarded_v2');
    if (!hasOnboarded) {
        document.getElementById('onboarding').classList.remove('hidden');
    }
}

function handleOnboardingNext() {
    const dots = document.querySelectorAll('.onboarding-dots .dot');
    const steps = document.querySelectorAll('.onboarding-step');
    const btn = document.getElementById('onboarding-next');

    if (onboardingStep < 3) {
        steps[onboardingStep - 1].classList.remove('active');
        steps[onboardingStep].classList.add('active');
        dots[onboardingStep - 1].classList.remove('active');
        dots[onboardingStep].classList.add('active');
        onboardingStep++;
    } else {
        localStorage.setItem('hasOnboarded_v2', 'true');
        document.getElementById('onboarding').classList.add('hidden');
    }
}

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(particle);
    }
}

document.addEventListener('DOMContentLoaded', init);