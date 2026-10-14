self.addEventListener('install', function(event) {
  console.log('Service Worker installed successfully!');
});

self.addEventListener('fetch', function(event) {
  // This just lets the app run normally without aggressive caching
});