// Service Worker für bessere Performance und Offline-Unterstützung
const CACHE_NAME = 'larry-quiz-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/files/1.jpg',
    '/files/2.jpeg',
    '/files/3.jpg',
    '/files/4.jpg',
    '/files/5.webp',
    '/files/6.jpg',
    '/files/7.jpg',
    '/files/8.jpg'
];

// Installation
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch Events
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});
