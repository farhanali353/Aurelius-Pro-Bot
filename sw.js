const CACHE_NAME = 'farhan-v3';
const assets = [
  '/Farhan-Pro-Bot/',
  '/Farhan-Pro-Bot/index.html',
  '/Farhan-Pro-Bot/manifest.json'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((res) => {
      return res || fetch(evt.request);
    })
  );
});
