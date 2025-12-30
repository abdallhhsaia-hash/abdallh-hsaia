const surahs = [
    { "id": 1, "name": "الفاتحة" }, { "id": 2, "name": "البقرة" }, { "id": 3, "name": "آل عمران" },
    { "id": 4, "name": "النساء" }, { "id": 5, "name": "المائدة" }, { "id": 6, "name": "الأنعام" },
    { "id": 7, "name": "الأعراف" }, { "id": 8, "name": "الأنفال" }, { "id": 9, "name": "التوبة" },
    { "id": 10, "name": "يونس" }, { "id": 11, "name": "هود" }, { "id": 12, "name": "يوسف" },
    { "id": 13, "name": "الرعد" }, { "id": 14, "name": "إبراهيم" }, { "id": 15, "name": "الحجر" },
    { "id": 16, "name": "النحل" }, { "id": 17, "name": "الإسراء" }, { "id": 18, "name": "الكهف" },
    { "id": 19, "name": "مريم" }, { "id": 20, "name": "طه" }, { "id": 21, "name": "الأنبياء" },
    { "id": 22, "name": "الحج" }, { "id": 23, "name": "المؤمنون" }, { "id": 24, "name": "النور" },
    { "id": 25, "name": "الفرقان" }, { "id": 26, "name": "الشعراء" }, { "id": 27, "name": "النمل" },
    { "id": 28, "name": "القصص" }, { "id": 29, "name": "العنكبوت" }, { "id": 30, "name": "الروم" },
    { "id": 31, "name": "لقمان" }, { "id": 32, "name": "السجدة" }, { "id": 33, "name": "الأحزاب" },
    { "id": 34, "name": "سبأ" }, { "id": 35, "name": "فاطر" }, { "id": 36, "name": "يس" },
    { "id": 37, "name": "الصافات" }, { "id": 38, "name": "ص" }, { "id": 39, "name": "الزمر" },
    { "id": 40, "name": "غافر" }, { "id": 41, "name": "فصلت" }, { "id": 42, "name": "الشورى" },
    { "id": 43, "name": "الزخرف" }, { "id": 44, "name": "الدخان" }, { "id": 45, "name": "الجاثية" },
    { "id": 46, "name": "الأحقاف" }, { "id": 47, "name": "محمد" }, { "id": 48, "name": "الفتح" },
    { "id": 49, "name": "الحجرات" }, { "id": 50, "name": "ق" }, { "id": 51, "name": "الذاريات" },
    { "id": 52, "name": "الطور" }, { "id": 53, "name": "النجم" }, { "id": 54, "name": "القمر" },
    { "id": 55, "name": "الرحمن" }, { "id": 56, "name": "الواقعة" }, { "id": 57, "name": "الحديد" },
    { "id": 58, "name": "المجادلة" }, { "id": 59, "name": "الحشر" }, { "id": 60, "name": "الممتحنة" },
    { "id": 61, "name": "الصف" }, { "id": 62, "name": "الجمعة" }, { "id": 63, "name": "المنافقون" },
    { "id": 64, "name": "التغابن" }, { "id": 65, "name": "الطلاق" }, { "id": 66, "name": "التحريم" },
    { "id": 67, "name": "الملك" }, { "id": 68, "name": "القلم" }, { "id": 69, "name": "الحاقة" },
    { "id": 70, "name": "المعارج" }, { "id": 71, "name": "نوح" }, { "id": 72, "name": "الجن" },
    { "id": 73, "name": "المزمل" }, { "id": 74, "name": "المدثر" }, { "id": 75, "name": "القيامة" },
    { "id": 76, "name": "الإنسان" }, { "id": 77, "name": "المرسلات" }, { "id": 78, "name": "النبأ" },
    { "id": 79, "name": "النازعات" }, { "id": 80, "name": "عبس" }, { "id": 81, "name": "التكوير" },
    { "id": 82, "name": "الانفطار" }, { "id": 83, "name": "المطففين" }, { "id": 84, "name": "الانشقاق" },
    { "id": 85, "name": "البروج" }, { "id": 86, "name": "الطارق" }, { "id": 87, "name": "الأعلى" },
    { "id": 88, "name": "الغاشية" }, { "id": 89, "name": "الفجر" }, { "id": 90, "name": "البلد" },
    { "id": 91, "name": "الشمس" }, { "id": 92, "name": "الليل" }, { "id": 93, "name": "الضحى" },
    { "id": 94, "name": "الشرح" }, { "id": 95, "name": "التين" }, { "id": 96, "name": "العلق" },
    { "id": 97, "name": "القدر" }, { "id": 98, "name": "البينة" }, { "id": 99, "name": "الزلزلة" },
    { "id": 100, "name": "العاديات" }, { "id": 101, "name": "القارعة" }, { "id": 102, "name": "التكاثر" },
    { "id": 103, "name": "العصر" }, { "id": 104, "name": "الهمزة" }, { "id": 105, "name": "الفيل" },
    { "id": 106, "name": "قريش" }, { "id": 107, "name": "الماعون" }, { "id": 108, "name": "الكوثر" },
    { "id": 109, "name": "الكافرون" }, { "id": 110, "name": "النصر" }, { "id": 111, "name": "المسد" },
    { "id": 112, "name": "الإخلاص" }, { "id": 113, "name": "الفلق" }, { "id": 114, "name": "الناس" }
];

const reciters = {
    zain: {
        name: "الشيخ الزين محمد أحمد",
        baseUrl: "https://server9.mp3quran.net/alzain/"
    }
};

let currentReciterKey = 'zain';
let currentSurahIndex = -1;
const audio = new Audio();

// DOM Elements
const surahListContainer = document.getElementById('surahList');
const searchInput = document.getElementById('surahSearch');
const reciterBtns = document.querySelectorAll('.reciter-btn');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('totalDuration');
const volumeSlider = document.getElementById('volume');
const currentSurahNameEl = document.getElementById('currentSurah');
const currentReciterNameEl = document.getElementById('currentReciter');

// Initialize
function init() {
    renderSurahs(surahs);
    setupEventListeners();
    setupAudioEvents();
}

function renderSurahs(list) {
    surahListContainer.innerHTML = '';
    list.forEach((surah) => {
        const card = document.createElement('div');
        card.className = 'surah-card';
        card.innerHTML = `
            <div class="surah-num">${surah.id}</div>
            <div class="surah-info">
                <span class="surah-name">${surah.name}</span>
                <span class="surah-details">سورة رقم ${surah.id}</span>
            </div>
            <div class="surah-play-icon">
                <i class="fas fa-play"></i>
            </div>
        `;
        card.onclick = () => playSurah(surah.id);
        surahListContainer.appendChild(card);
    });
}

function playSurah(id) {
    const surah = surahs.find(s => s.id === id);
    if (!surah) return;

    currentSurahIndex = surahs.indexOf(surah);
    const reciter = reciters[currentReciterKey];

    // Format ID with leading zeros (e.g., 001.mp3)
    const formattedId = id.toString().padStart(3, '0');
    let url = `${reciter.baseUrl}${formattedId}.mp3`;

    audio.src = url;

    // Reset play button state immediately while loading
    playBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    audio.play().catch(e => {
        console.error("Playback failed:", e);
        showToast("عذراً، التلاوة غير متاحة لهذه السورة حالياً لهذا القارئ.");
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    updatePlayerUI(surah.name, reciter.name);
    highlightCurrentSurah(id);
}

function updatePlayerUI(surahName, reciterName) {
    currentSurahNameEl.textContent = surahName;
    currentReciterNameEl.textContent = reciterName;
}

function highlightCurrentSurah(id) {
    document.querySelectorAll('.surah-card').forEach(card => {
        card.classList.remove('playing');
        card.querySelector('.surah-play-icon i').className = 'fas fa-play';

        if (card.querySelector('.surah-num').textContent == id) {
            card.classList.add('playing');
            card.querySelector('.surah-play-icon i').className = 'fas fa-pause';
        }
    });
}

function setupAudioEvents() {
    audio.addEventListener('playing', () => {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        const activeCard = document.querySelector('.surah-card.playing');
        if (activeCard) {
            activeCard.querySelector('.surah-play-icon i').className = 'fas fa-pause';
        }
    });

    audio.addEventListener('pause', () => {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        const activeCard = document.querySelector('.surah-card.playing');
        if (activeCard) {
            activeCard.querySelector('.surah-play-icon i').className = 'fas fa-play';
        }
    });

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const perc = (audio.currentTime / audio.duration) * 100;
            progress.value = perc;
            progress.style.backgroundSize = `${perc}% 100%`; // For custom slider fill if needed
            currentTimeEl.textContent = formatTime(audio.currentTime);
            durationEl.textContent = formatTime(audio.duration);
        }
    });

    audio.addEventListener('ended', () => {
        nextBtn.click();
    });

    audio.addEventListener('error', (e) => {
        console.log("Audio Error:", e);
        showToast("عذراً، حدث خطأ أثناء تحميل الملف الصوتي.");
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
}

function setupEventListeners() {
    // Play/Pause
    playBtn.onclick = () => {
        if (audio.paused) {
            if (audio.src) {
                audio.play();
            } else if (surahs.length > 0) {
                playSurah(surahs[0].id);
            }
        } else {
            audio.pause();
        }
    };

    // Next/Prev
    nextBtn.onclick = () => {
        let nextIndex = currentSurahIndex + 1;
        if (nextIndex >= surahs.length) nextIndex = 0;
        playSurah(surahs[nextIndex].id);
    };

    prevBtn.onclick = () => {
        let prevIndex = currentSurahIndex - 1;
        if (prevIndex < 0) prevIndex = surahs.length - 1;
        playSurah(surahs[prevIndex].id);
    };

    // Progress Bar
    progress.oninput = () => {
        const time = (progress.value / 100) * audio.duration;
        audio.currentTime = time;
    };

    // Volume
    volumeSlider.oninput = () => {
        audio.volume = volumeSlider.value;
    };

    // Search
    searchInput.oninput = (e) => {
        const val = e.target.value.toLowerCase();
        const filtered = surahs.filter(s => s.name.includes(val) || s.id.toString().includes(val));
        renderSurahs(filtered);
    };

    // Reciter Selection
    reciterBtns.forEach(btn => {
        btn.onclick = () => {
            reciterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const newReciter = btn.dataset.reciter;
            if (currentReciterKey !== newReciter) {
                currentReciterKey = newReciter;
                currentReciterNameEl.textContent = reciters[currentReciterKey].name;

                // If playing, switch audio source
                if (currentSurahIndex !== -1) {
                    playSurah(surahs[currentSurahIndex].id);
                }
            }
        };
    });
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Simple Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%);
        background: #ef4444;
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        font-family: 'Amiri', serif;
        z-index: 2000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: fadeIn 0.3s ease;
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

init();
