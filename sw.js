const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"80e78e3203dcd6677f30af9730e16d54","url":"./404.html"},{"revision":"36fffb604ee7b1517c32ef2b4ded05b6","url":"./about/index.html"},{"revision":"6b5bd161bf36ff9cb976e2c8e76a25e4","url":"./archives/2022/06/index.html"},{"revision":"b0e5abd01519707d9f6f31e2397fbe1e","url":"./archives/2022/index.html"},{"revision":"42694bc4c8eb9c664649cd1859c4784b","url":"./archives/index.html"},{"revision":"cc190c6358e2a87f2f00bd5ef4f035f3","url":"./atomic-habits/index.html"},{"revision":"745c2e18064cfe38e306a32dca62b6f8","url":"./categories/index.html"},{"revision":"72189e3f14cb3abf9ee4981981605994","url":"./css/bg.css"},{"revision":"413b5ee3bacc5b6b17863b8f9f08b719","url":"./css/index.css"},{"revision":"71c697de039d31ec7cd70981e5770828","url":"./css/refresh.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f98d4adfcdc012eaeaa2c759def41a15","url":"./index.html"},{"revision":"07b03d38dfd3e4c06df78447056180f8","url":"./js/main.js"},{"revision":"4df3c613af12e129feee9b014f9d8695","url":"./js/search/algolia.js"},{"revision":"9a3fa909a665a2ea5c2717e91d4961bb","url":"./js/search/local-search.js"},{"revision":"4b84207e490168db8faf5b25d98027e9","url":"./js/tw_cn.js"},{"revision":"154cd33ff9d3d9bdcc4042423d7eac0a","url":"./js/utils.js"},{"revision":"15a32d40507e9ca5f47a941d5504a1f0","url":"./manifest.json"},{"revision":"620b3c434b08306387e18d16777a3ec6","url":"./tags/index.html"},{"revision":"915f2eb0425b3ddf2cbc3da49317d5a4","url":"./the-willpower-instinct/index.html"}], {
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