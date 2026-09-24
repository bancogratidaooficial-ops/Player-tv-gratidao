const CACHE = 'v86-v5';
const FILES = ['./','./index.html','./privacidade.html','./termos.html','./contato.html','./manifest.json'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => {
  if(e.request.url.includes('googlesyndication') || e.request.url.includes('doubleclick')) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
