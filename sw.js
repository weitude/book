const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"addcb4f1527b5d2735c57d22c2dada9a","url":"./404.html"},{"revision":"c2402c9d3cb0b80701041f01d922513d","url":"./about/index.html"},{"revision":"786701f4b9cb786eb7bd6ee35784d5f3","url":"./archives/2022/06/index.html"},{"revision":"67e23f0ef8b0d6cffbc1b009288c41fd","url":"./archives/2022/index.html"},{"revision":"fa1d57b6c58741026b97c17688e44c18","url":"./archives/index.html"},{"revision":"877d39560a9dca79aff4cbe6c367ac16","url":"./atomic-habits/index.html"},{"revision":"678b0e8b794b0b7517ed222f6d6ec872","url":"./categories/index.html"},{"revision":"b00c9119d16401edefb6d1d818924572","url":"./css/bg.css"},{"revision":"53a692e018addddc03bbe1b7a4604569","url":"./css/index.css"},{"revision":"a5766b6704b2fee955b6673c812472f5","url":"./css/refresh.css"},{"revision":"7fd60739d5a75f14962d114856174c95","url":"./css/var.css"},{"revision":"fc1d0ba2d1c7f7ae523afd643abe6fa3","url":"./index.html"},{"revision":"4d4237925a4e16b28459d2c9d9c05b39","url":"./inject/bg.css"},{"revision":"28928a28d6b7bcb23dd7b33406d44dca","url":"./inject/refresh.css"},{"revision":"07b03d38dfd3e4c06df78447056180f8","url":"./js/main.js"},{"revision":"4df3c613af12e129feee9b014f9d8695","url":"./js/search/algolia.js"},{"revision":"9a3fa909a665a2ea5c2717e91d4961bb","url":"./js/search/local-search.js"},{"revision":"4b84207e490168db8faf5b25d98027e9","url":"./js/tw_cn.js"},{"revision":"154cd33ff9d3d9bdcc4042423d7eac0a","url":"./js/utils.js"},{"revision":"15a32d40507e9ca5f47a941d5504a1f0","url":"./manifest.json"},{"revision":"a4be74d2bfa3d1151a30733dfe31a5a1","url":"./tags/index.html"},{"revision":"66acb393ec60125d22889a62e9bb18e7","url":"./the-willpower-instinct/index.html"}], {
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