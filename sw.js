const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"ab549990f1d3231a0b62cbb3cb2434fa","url":"./404.html"},{"revision":"4c4c4a0b687c70608b440f0f53ad4da4","url":"./about/index.html"},{"revision":"40076084b31c46c4fbda14aa0f7983f7","url":"./archives/2022/06/index.html"},{"revision":"99c3fbd025a2035a8b75fd662748657b","url":"./archives/2022/index.html"},{"revision":"3ecab5cca5e361d081a990ff39d0c306","url":"./archives/index.html"},{"revision":"593092164d053cbf9f0c82d2f568f430","url":"./atomic-habits/index.html"},{"revision":"a5f6261cb0fba98b6a3c85ff543a063c","url":"./categories/index.html"},{"revision":"5ab928765d2d843676c0a8a8b802b81e","url":"./css/bg.css"},{"revision":"f48070dcdaa143ce9cc2ec5a8f914a8f","url":"./css/index.css"},{"revision":"37de451f5afad9e72261e36da570849a","url":"./css/refresh.css"},{"revision":"41f2f72cf463c64d7e97dbd59b333e8b","url":"./css/var.css"},{"revision":"e3ef0e0d8469ca599af90ca3d7af47e7","url":"./google9bb5135959754c1f.html"},{"revision":"d1628ff9fc8e61ce7f8a0a1cf310dbdd","url":"./index.html"},{"revision":"9259750a73041a82a659531072adf309","url":"./inject/bg.css"},{"revision":"fc87edb35f49df47a4b1aedbdac074d3","url":"./inject/refresh.css"},{"revision":"c2d6628801fd2dc0ea1739901cf5d99b","url":"./js/main.js"},{"revision":"af567f93a5504310fe16fe368a4ee89e","url":"./js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./js/utils.js"},{"revision":"15a32d40507e9ca5f47a941d5504a1f0","url":"./manifest.json"},{"revision":"4da52335218ee92860a989b873c85c20","url":"./tags/index.html"},{"revision":"ae49ba42365e41fdccc0b5a4fc2322de","url":"./the-willpower-instinct/index.html"}], {
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