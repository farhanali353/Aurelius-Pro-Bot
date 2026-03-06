const CACHE_NAME = 'farhan-8d-cache-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  'https://i.ibb.co/GfGypBGD/intelligent-robot-500x500.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
