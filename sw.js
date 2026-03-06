const CACHE_NAME = 'farhan-bot-v6';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://i.ibb.co/GfGypBGD/intelligent-robot-500x500.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
