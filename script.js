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
let isTimerActive = false;
let timerInterval = null;
let pagesWithCompletedTimer = new Set(); // Track pages where timer has been completed
let isLoggedIn = false; // Track login status

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
const startQuizBtn = document.getElementById('start-quiz-btn');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// Utility Funktionen
function showScreen(screenName) {
    console.log('Switching to screen:', screenName); // Debug output
    
    // Alle Screens verstecken
    if (welcomeScreen) welcomeScreen.classList.remove('active');
    if (quizScreen) quizScreen.classList.remove('active');
    if (revealScreen) revealScreen.classList.remove('active');
    
    // Gewünschten Screen anzeigen
    switch(screenName) {
        case 'welcome':
            if (welcomeScreen) {
                welcomeScreen.classList.add('active');
                console.log('Welcome screen activated');
            }
            break;
        case 'quiz':
            if (quizScreen) {
                quizScreen.classList.add('active');
                console.log('Quiz screen activated');
            }
            break;
        case 'reveal':
            if (revealScreen) {
                revealScreen.classList.add('active');
                console.log('Reveal screen activated');
            }
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
        // Reset next button text when showing it
        if (!isTimerActive) {
            nextBtn.textContent = 'Weiter →';
        }
    }
}

function startTimer() {
    let timeLeft = 10;
    isTimerActive = true;
    nextBtn.disabled = true;
    
    // Update button text immediately
    nextBtn.textContent = `Weiter → (${timeLeft}s)`;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        nextBtn.textContent = `Weiter → (${timeLeft}s)`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isTimerActive = false;
            nextBtn.disabled = false;
            nextBtn.textContent = 'Weiter →';
            // Mark this page as having completed timer
            pagesWithCompletedTimer.add(currentHintIndex);
        }
    }, 1000);
}

function clearTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    isTimerActive = false;
    nextBtn.disabled = false;
    nextBtn.textContent = 'Weiter →';
}

function displayCurrentHint() {
    const currentHint = quizData[currentHintIndex];
    
    // Clear any existing timer
    clearTimer();
    
    // Bild laden
    quizImage.src = currentHint.image;
    quizImage.alt = currentHint.title;
    
    // Text aktualisieren
    hintTitle.textContent = currentHint.title;
    hintText.textContent = currentHint.text;
    
    // Progress und Navigation aktualisieren
    updateProgress();
    updateNavigationButtons();
    
    // Check if this page has already completed its timer
    // If so, don't start a new timer when navigating back to it
    if (pagesWithCompletedTimer.has(currentHintIndex)) {
        nextBtn.disabled = false;
        nextBtn.textContent = 'Weiter →';
    }
}

// Event Handler
function startQuiz() {
    if (!isLoggedIn) return; // Prevent starting quiz if not logged in
    
    currentHintIndex = 0;
    showScreen('quiz');
    displayCurrentHint();
    
    // Start timer on the first page as well
    if (!pagesWithCompletedTimer.has(currentHintIndex)) {
        startTimer();
    }
}

function nextHint() {
    if (!isLoggedIn) return; // Prevent navigation if not logged in
    
    if (currentHintIndex < quizData.length - 1) {
        currentHintIndex++;
        displayCurrentHint();
        
        // Only start timer if this page hasn't completed its timer yet
        if (!pagesWithCompletedTimer.has(currentHintIndex)) {
            startTimer();
        }
        
        // Smooth scroll to top für bessere UX
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function previousHint() {
    if (!isLoggedIn) return; // Prevent navigation if not logged in
    
    if (currentHintIndex > 0) {
        // Clear timer when going back
        clearTimer();
        
        currentHintIndex--;
        displayCurrentHint();
        
        // Smooth scroll to top für bessere UX
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showReveal() {
    if (!isLoggedIn) return; // Prevent access if not logged in
    
    showScreen('reveal');
    
    // Smooth scroll to top für bessere UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartQuiz() {
    if (!isLoggedIn) return; // Prevent restart if not logged in
    
    currentHintIndex = 0;
    clearTimer(); // Clear any active timer
    pagesWithCompletedTimer.clear(); // Reset timer completion tracking
    showScreen('welcome');
    
    // Smooth scroll to top für bessere UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    // Block all keyboard navigation if not logged in
    if (!isLoggedIn) return;
    
    if (currentScreen === 'quiz') {
        switch(event.key) {
            case 'ArrowRight':
            case 'Enter':
                event.preventDefault();
                if (currentHintIndex === quizData.length - 1) {
                    showReveal();
                } else {
                    // Only allow next hint if timer is not active or button is not disabled
                    if (!isTimerActive && !nextBtn.disabled) {
                        nextHint();
                    }
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
    // Block touch navigation if not logged in
    if (!isLoggedIn) return;
    
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
                // Only allow next hint if timer is not active or button is not disabled
                if (!isTimerActive && !nextBtn.disabled) {
                    nextHint();
                }
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
        isLoggedIn = true; // Set login status
        loginOverlay.classList.remove('active');
        passwordInput.value = '';
        loginError.style.display = 'none';
        // Preload alle Bilder
        preloadImages();
        // Welcome Screen als Standard anzeigen - mit Verzögerung um sicherzustellen dass DOM bereit ist
        setTimeout(() => {
            showScreen('welcome');
        }, 100);
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
    
    // Add event listeners for quiz buttons
    if (startQuizBtn) startQuizBtn.addEventListener('click', function() {
        if (isLoggedIn) startQuiz();
    });
    if (prevBtn) prevBtn.addEventListener('click', function() {
        if (isLoggedIn) previousHint();
    });
    if (nextBtn) nextBtn.addEventListener('click', function() {
        if (isLoggedIn) nextHint();
    });
    if (revealBtn) revealBtn.addEventListener('click', function() {
        if (isLoggedIn) showReveal();
    });
    if (restartQuizBtn) restartQuizBtn.addEventListener('click', function() {
        if (isLoggedIn) restartQuiz();
    });
});
