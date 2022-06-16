const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ba857f7fb62283b5743c7c7faebc8c14","url":"./404.html"},{"revision":"98f3bb0d4c067cc298b98ff72c2a0185","url":"./about/index.html"},{"revision":"97932c08add41fc1c081fa13e21a12e2","url":"./archives/2022/06/index.html"},{"revision":"417e1796d95277a74deb478a8d94e2c0","url":"./archives/2022/index.html"},{"revision":"29e2dbee03ec56461fa55409630db90a","url":"./archives/index.html"},{"revision":"f61aeee615f772c5a45727fd53e0cb60","url":"./atomic-habits/index.html"},{"revision":"e928af205318eff1e3405fa6e74bf0ec","url":"./categories/index.html"},{"revision":"237ef6a6276136019a13d4f4c5a1a1f9","url":"./css/bg.css"},{"revision":"15b2e294308ff18ac02d0912fc14b523","url":"./css/index.css"},{"revision":"69d9f6eee67e1d7161c74d96d98c8d49","url":"./css/refresh.css"},{"revision":"8a9dbb97ca5ef7d07891db2cf463e630","url":"./css/var.css"},{"revision":"e3ef0e0d8469ca599af90ca3d7af47e7","url":"./google9bb5135959754c1f.html"},{"revision":"0ec60ab25a0323c76c024f40a047a560","url":"./index.html"},{"revision":"42b22b530c46155e984c8669390328a1","url":"./inject/bg.css"},{"revision":"f24c20bbe03adc49cb008ac045d8677d","url":"./inject/refresh.css"},{"revision":"c2d6628801fd2dc0ea1739901cf5d99b","url":"./js/main.js"},{"revision":"af567f93a5504310fe16fe368a4ee89e","url":"./js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./js/utils.js"},{"revision":"15a32d40507e9ca5f47a941d5504a1f0","url":"./manifest.json"},{"revision":"c48f808dc0870bbf18ec3587041cbeac","url":"./tags/index.html"},{"revision":"d714de82ed57876e79873a22ba09e634","url":"./the-willpower-instinct/index.html"}], {
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();