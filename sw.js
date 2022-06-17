const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a6ae5470741c493bee507e4d3e23ac6f","url":"./404.html"},{"revision":"433d78c2f577fe3baa18c22a8c45bb72","url":"./about/index.html"},{"revision":"de66353408ec96c103fdff81f065e68e","url":"./archives/2022/06/index.html"},{"revision":"875e26dd2d8f15b835bed70b6921f574","url":"./archives/2022/index.html"},{"revision":"5d1ca61b63cc5b7c32aad59d6af3b030","url":"./archives/index.html"},{"revision":"1276ebc130c892741c4d0b8a22ea59a7","url":"./atomic-habits/index.html"},{"revision":"00465508626794d1b93820399658880e","url":"./categories/index.html"},{"revision":"72189e3f14cb3abf9ee4981981605994","url":"./css/bg.css"},{"revision":"413b5ee3bacc5b6b17863b8f9f08b719","url":"./css/index.css"},{"revision":"71c697de039d31ec7cd70981e5770828","url":"./css/refresh.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"71f5002575110322217f44e430bf993a","url":"./index.html"},{"revision":"07b03d38dfd3e4c06df78447056180f8","url":"./js/main.js"},{"revision":"4df3c613af12e129feee9b014f9d8695","url":"./js/search/algolia.js"},{"revision":"9a3fa909a665a2ea5c2717e91d4961bb","url":"./js/search/local-search.js"},{"revision":"4b84207e490168db8faf5b25d98027e9","url":"./js/tw_cn.js"},{"revision":"154cd33ff9d3d9bdcc4042423d7eac0a","url":"./js/utils.js"},{"revision":"15a32d40507e9ca5f47a941d5504a1f0","url":"./manifest.json"},{"revision":"4a99f87155737a0b8ba1af861a4b27f0","url":"./tags/index.html"},{"revision":"f76f435a7a0a0d452345ffdf3f9681d8","url":"./the-willpower-instinct/index.html"}], {
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