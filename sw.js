/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/28/hello-world/index.html","a0e2976a4b593cafccf938ff7c63007e"],["/2023/09/30/My-New-Way/index.html","4f7b6307dcca800f82d60fea7fc23b37"],["/2023/10/19/大一期末作业/index.html","c5a17ab7dfdd2edf33d1e9eade1b581d"],["/2023/10/19/大学中Pyrhon数据基础与挖掘/index.html","59b1610a568228a86dd6ba2a1cb3161f"],["/2026/10/18/修改标题和元标题颜色/index.html","fea34a9c0ea0555ca9db2cafac90dd31"],["/2026/10/18/链接卡片样式/index.html","5a19c17db8ea2d26b1cac68a2a5311ad"],["/404.html","92cad4bcf43e34851c36bb9ba9a9c425"],["/about/index.html","ffefc22ccfabd37feb078c3aac67072d"],["/archives/2023/06/index.html","a77335f2cbcc5f8a314287d12904c485"],["/archives/2023/09/index.html","e6c3a0069ffb63e8c10b3bb271385a73"],["/archives/2023/10/index.html","70b11f21d37da37f95ed37ea1afc6c77"],["/archives/2023/index.html","75d7a21970220ba3eac8eab702005017"],["/archives/2026/10/index.html","4a048da98f9a90b1f2e40fa04b40f4e6"],["/archives/2026/index.html","c8cb55c016eb850c3ae98e31e3893457"],["/archives/index.html","f129364450cc7b1ff39b5463d24e497c"],["/categories/index.html","92320e8f0716e61b11ecb96c34182463"],["/categories/作业/index.html","c157093690d19ad4bfb6ee11f1a43187"],["/categories/学习/index.html","7e60055949b4bb441266b30aed0f3742"],["/categories/自定义Css/index.html","ea285a724e1d8affde3bfa1fe57a3799"],["/categories/自定义Js/index.html","f8575d283d3745973f2eb36d492a4938"],["/css/CodeBlock.css","fa2b82b927ffced59050ea87727f05ea"],["/css/CodeInLine.css","99bd32848ccc75f1dfa7aa083d494973"],["/css/Footer.css","9c3f6a53e03fd48b8ff51f976f9e2d09"],["/css/FrostedGlassBg.css","93e7ff23c39328d9e2bd89957b93dc36"],["/css/IndexImgHover.css","8f5d75c57f4242f0038dbf345eadfcf5"],["/css/IndexImgHoverAboutHead.css","c0104ca95e9312b4d4bc24beb3f4530f"],["/css/LinkCard.css","e8eaa08ac2935818ff6499eb1a849f31"],["/css/RainbowLoading.css","39ab951c32268da5f7bdc86a9117d8eb"],["/css/RightMenu.css","727fea27aa309763375e90b6aa4df8c6"],["/css/ScrollAnimation.css","794b1084020dd40b6717edc68700ba44"],["/css/ScrollBar.css","f7c7e1f80ea33bd3352a0a527e4ebfd2"],["/css/StrongInDark.css","8f5b8a6d50e8ce9920bf3bbaed65d771"],["/css/SubtitleColorEdit.css","32a6acbdd9083d0b5d410f701fc8af42"],["/css/TitleNeon.css","239b7264248651d379be525f4a4b069b"],["/css/UnifyImgWidth.css","4fd340e445cbf2576476f5b0f045b823"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/highlight.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/main.css","b51e3032b6aa8c8851b9298822b1bf05"],["/html/Footer.html","4933c64c6941ed9114c312a9b1c008c8"],["/html/RainbowLoading.html","0dbcd3c623b30bdda3794cbe26859ec7"],["/html/RightMenu.html","37cf66d7cf0e350af18f454947556282"],["/html/sakana.html","cb48730d6aaa908925e3c0475cca6ab7"],["/img/5dd9318d-96d9-4ee8-b9a1-99e9bb8583f2.png","29534736bdbb0f1594f00767b469713c"],["/img/989C8CFA097195CB7E176E6F27A2C52C.jpg","989c8cfa097195cb7e176e6f27a2c52c"],["/img/A6279A3E52D958C7A088AFAB4A10639B.jpg","a6279a3e52d958c7a088afab4a10639b"],["/img/avatar.png","c99e953744223566669e6930df884b27"],["/img/ca870b4b-a8a1-421d-8b99-2252f01abc90.png","736e43cf234d59428517aaaa62b9164f"],["/img/d4d68511-e455-4897-882f-288914f4cda5.png","3fadbc96ae05355f1e491a3835d28dc2"],["/img/default.png","77d897993100f5b20a18e2d2756d2ec4"],["/img/earth-space-hd-wallpaper-Hello-World-1.jpg","9cd7800b5c7196cfab9109fbbcb23113"],["/img/favicon.png","dde8453966ccb2e7b79821348f499bd4"],["/img/fluid.png","567906af91c4f8ff14b8175069f2672f"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/loading/loading6.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sisu.png","1b8df3d54eec340eed456d6069216575"],["/index.html","37390b3e8e0c1b2053037686db7fba26"],["/js/Duration.js","1341891c5914fdee7987cf5ac7288937"],["/js/Hitokoto.js","ac99209cef6f9db73adc809b18ac2ddf"],["/js/LinkCard.js","92e1f8873edd264abb61e20aee7f271f"],["/js/RainbowLoading.js","03c13c45d60af5fc1ab7821184e723f8"],["/js/RandomBanner.js","6222ce7b65f3d328089bcea0900b99fe"],["/js/RightMenu.js","fa7bb58f7746665dfb48e85f25f7a738"],["/js/ScrollAnimation.js","cc113e87ca476a44e69cdaec410b6404"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","391b4628bdf40dbad01dbfdb097c5cda"],["/resources/index.html","851097c50719d4ba3676b34d89525935"],["/schedule/index.html","5bd0e9075e79243cc6258de86e74876f"],["/sitemap/index.html","c204d9e87082976d411ca138f315d1ee"],["/sw-register.js","05ef562bb3144d70f42b1fb34a6149d4"],["/tags/Css/index.html","ea1c480cbeb86358919685b2ec6a1b40"],["/tags/Markdown/index.html","4fe7a5f6bb65fb85a9fd482f58791fd8"],["/tags/Python/index.html","b7584c7d416b205f08ad7d36a5db0381"],["/tags/index.html","6ad6e7792076ad6cd19503796d294658"],["/tags/js/index.html","046dfcc3f0c42b6112b1524ca7e4584f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
