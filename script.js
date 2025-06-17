// Quiz Daten
const quizData = [
    {
        image: "files/1.jpg",
        title: "Hinweis 1: Das weite Blau",
        text: "Stell dir vor, du stehst am Rande eines endlosen Blaus. Die salzige Luft kitzelt deine Nase und das Rauschen der Wellen ist dein einziger Begleiter. Manchmal tanzen bunte Boote auf dem Wasser, manchmal ragen alte Mauern aus dem Meer empor, die Geschichten von fernen Zeiten flüstern."
    },
    {
        image: "files/2.jpeg",
        title: "Hinweis 2: Aromatische Geheimnisse",
        text: "Hier entfaltet sich ein Kaleidoskop an Düften und Farben. Es duftet nach fernen Ländern, nach Sonne und warmen Nächten. Feine Puder und grobe Körner, leuchtendes Rot und sattes Gelb – jedes Gewürz erzählt seine eigene Geschichte und verleiht Speisen und Orten eine unverwechselbare Note."
    },
    {
        image: "files/3.jpg",
        title: "Hinweis 3: Goldener Teppich",
        text: "Nun wechseln wir die Szenerie zu einer unendlichen Weite. Feiner, warmer Sand unter den Füßen, der sich zu mächtigen Dünen erhebt. Der Wind formt immer neue Muster auf diesem goldenen Teppich, und die Stille ist so tief, dass man fast die Zeit vergessen könnte."
    },
    {
        image: "files/4.jpg",
        title: "Hinweis 4: Oase der Geschichten",
        text: "Zuletzt kommen wir zu einem Ort, wo sich das Grün gegen das Braun behauptet. Eingebettet in eine trockene Landschaft findest du eine lebendige Insel, wo Palmen Schatten spenden und Wasser fließt. Alte, ehrwürdige Lehmgebäude erheben sich hier, wie Wächter einer längst vergangenen Zeit, und erzählen von Karawanen und Reisenden."
    },
    {
        image: "files/5.webp",
        title: "Hinweis 5: Verborgener Innenhof",
        text: "Stell dir einen Ort der Ruhe vor, versteckt hinter hohen Mauern. Ein sprudelnder Brunnen in der Mitte, umgeben von üppigem Grün und kunstvollen Fliesen. Hier kannst du dich entspannen und die Seele baumeln lassen, in einem Ambiente, das von Gastfreundschaft und Tradition erzählt. Es ist ein Ort, der Wärme und Geborgenheit ausstrahlt."
    },
    {
        image: "files/6.jpg",
        title: "Hinweis 6: Stadt in Blau",
        text: "Tauche ein in eine Stadt, die wie ein Himmel auf Erden anmutet. Überall begegnen dir Schattierungen von Blau – von tiefem Indigo bis zu hellem Azur. Die Gassen schlängeln sich bergauf und bergab, und jeder Winkel birgt neue blaue Geheimnisse. Hier fühlen sich selbst die Katzen wohl und streifen durch die blauen Pfade."
    },
    {
        image: "files/7.jpg",
        title: "Hinweis 7: Eine Reise wie im Märchen",
        text: "Manchmal nimmt uns der Weg zu unserem Ziel auf ungewöhnliche Pfade mit. Stell dir vor, du schwebst sanft über belebten Märkten und historischen Dächern, während unter dir das bunte Treiben einer fremden Welt liegt. Es ist eine Reise, die Träume wahr werden lässt und uns in eine Welt voller Abenteuer entführt, so wie man es nur aus Geschichten kennt."
    },
    {
        image: "files/8.jpg",
        title: "Hinweis 8: Das pulsierende Herz",
        text: "Hier schlägt das Herz der Stadt, erfüllt von Leben und Energie. Der Duft von Minztee und Gewürzen liegt in der Luft, während Geschichtenerzähler, Musiker und Händler ein faszinierendes Schauspiel bieten. Wenn die Sonne untergeht, erstrahlen unzählige Lichter und verwandeln den Platz in ein magisches Labyrinth aus Klängen und Farben."
    }
];

// Globale Variablen
let currentHintIndex = 0;
let currentScreen = 'welcome';

// DOM Elemente
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const revealScreen = document.getElementById('reveal-screen');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const quizImage = document.getElementById('quiz-image');
const hintTitle = document.getElementById('hint-title');
const hintText = document.getElementById('hint-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const revealBtn = document.getElementById('reveal-btn');

// Utility Funktionen
function showScreen(screenName) {
    // Alle Screens verstecken
    welcomeScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    revealScreen.classList.remove('active');
    
    // Gewünschten Screen anzeigen
    switch(screenName) {
        case 'welcome':
            welcomeScreen.classList.add('active');
            break;
        case 'quiz':
            quizScreen.classList.add('active');
            break;
        case 'reveal':
            revealScreen.classList.add('active');
            break;
    }
    
    currentScreen = screenName;
}

function updateProgress() {
    const progress = ((currentHintIndex + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentHintIndex + 1} / ${quizData.length}`;
}

function updateNavigationButtons() {
    // Zurück Button
    prevBtn.disabled = currentHintIndex === 0;
    
    // Weiter/Auflösung Buttons
    if (currentHintIndex === quizData.length - 1) {
        nextBtn.style.display = 'none';
        revealBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        revealBtn.style.display = 'none';
    }
}

function displayCurrentHint() {
    const currentHint = quizData[currentHintIndex];
    
    // Bild laden
    quizImage.src = currentHint.image;
    quizImage.alt = currentHint.title;
    
    // Text aktualisieren
    hintTitle.textContent = currentHint.title;
    hintText.textContent = currentHint.text;
    
    // Progress und Navigation aktualisieren
    updateProgress();
    updateNavigationButtons();
}

// Event Handler
function startQuiz() {
    currentHintIndex = 0;
    showScreen('quiz');
    displayCurrentHint();
}

function nextHint() {
    if (currentHintIndex < quizData.length - 1) {
        currentHintIndex++;
        displayCurrentHint();
        
        // Smooth scroll to top für bessere UX
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function previousHint() {
    if (currentHintIndex > 0) {
        currentHintIndex--;
        displayCurrentHint();
        
        // Smooth scroll to top für bessere UX
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showReveal() {
    showScreen('reveal');
    
    // Smooth scroll to top für bessere UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartQuiz() {
    currentHintIndex = 0;
    showScreen('welcome');
    
    // Smooth scroll to top für bessere UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    if (currentScreen === 'quiz') {
        switch(event.key) {
            case 'ArrowRight':
            case 'Enter':
                event.preventDefault();
                if (currentHintIndex === quizData.length - 1) {
                    showReveal();
                } else {
                    nextHint();
                }
                break;
            case 'ArrowLeft':
                event.preventDefault();
                previousHint();
                break;
            case 'Escape':
                event.preventDefault();
                restartQuiz();
                break;
        }
    } else if (currentScreen === 'welcome') {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            startQuiz();
        }
    } else if (currentScreen === 'reveal') {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            restartQuiz();
        }
    }
});

// Touch/Swipe Support für Mobile
let startX = 0;
let startY = 0;

document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
    if (currentScreen !== 'quiz') return;
    
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;
    
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    
    // Nur horizontale Swipes beachten (mehr als 50px, weniger vertikal als horizontal)
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            // Swipe nach rechts - Zurück
            previousHint();
        } else {
            // Swipe nach links - Weiter
            if (currentHintIndex === quizData.length - 1) {
                showReveal();
            } else {
                nextHint();
            }
        }
    }
});

// Image Loading Error Handler
quizImage.addEventListener('error', function() {
    console.error(`Fehler beim Laden des Bildes: ${this.src}`);
    this.alt = 'Bild konnte nicht geladen werden';
    this.style.backgroundColor = '#f3f4f6';
    this.style.border = '2px dashed #d1d5db';
    this.style.minHeight = '200px';
    this.style.display = 'flex';
    this.style.alignItems = 'center';
    this.style.justifyContent = 'center';
});

// Preload Images für bessere Performance
function preloadImages() {
    quizData.forEach(hint => {
        const img = new Image();
        img.src = hint.image;
    });
}

// Initialisierung
document.addEventListener('DOMContentLoaded', function() {
    // Passwortschutz
    const loginOverlay = document.getElementById('login-overlay');
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password-input');
    const loginError = document.getElementById('login-error');
    const CORRECT_PASSWORD = '01082023';

    function unlockQuiz() {
        loginOverlay.classList.remove('active');
        passwordInput.value = '';
        loginError.style.display = 'none';
        // Preload alle Bilder
        preloadImages();
        // Welcome Screen als Standard anzeigen
        showScreen('welcome');
        // Service Worker registrieren für bessere Offline-Unterstützung
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').catch(function(error) {
                console.log('Service Worker Registrierung fehlgeschlagen:', error);
            });
        }
    }

    function checkPassword() {
        if (passwordInput.value === CORRECT_PASSWORD) {
            unlockQuiz();
        } else {
            loginError.style.display = 'block';
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    loginBtn.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    // Autofocus beim Laden
    passwordInput.focus();
});
