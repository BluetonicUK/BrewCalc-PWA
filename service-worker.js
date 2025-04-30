self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('brewcalc-cache').then((cache) => {
      return cache.addAll([
        './index.html',
        './liquor-back.html',
        './can-fill.html',
        './logo.jpg',
        './cow.wav',
        './pig.wav'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});