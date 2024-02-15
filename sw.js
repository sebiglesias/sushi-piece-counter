self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("sushi-counter").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/css/styles.css",
                "/js/app.js",
                "/manifest.json",
                "/images/favicon-192x192.png",
                "/images/favicon-512x512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
