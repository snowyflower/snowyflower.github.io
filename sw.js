/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/28/hello-world/index.html","69409caa749bed52d3bec818a4457b84"],["/2023/09/30/My-New-Way/index.html","96ca1771e766aea31e372072aae65372"],["/2023/10/19/大一期末作业/index.html","c6e51047588a209600cc231ca99a545f"],["/2023/10/19/大学中Pyrhon数据基础与挖掘/index.html","98f7154b146bdcda3b83afb24fccff56"],["/2026/10/18/修改标题和元标题颜色/index.html","5efa64397984ef7e9bee15e2950c00b7"],["/2026/10/18/链接卡片样式/index.html","4b3b6d5496e74c0f3330b88c91f5df1c"],["/404.html","d2241cfb2a3806ecd5ee35048b148cdb"],["/about/index.html","a054c096ab201c88e7b796aaf3185a9f"],["/archives/2023/06/index.html","f77c8082a082eaf395fd8c0e7bd925f8"],["/archives/2023/09/index.html","3fdc7349bee14d03904e1d0f3d063dd0"],["/archives/2023/10/index.html","a24fa4c483768dd9ad08779d4dfc4e1f"],["/archives/2023/index.html","ccee6fc4909e64fc7769cbcab5605741"],["/archives/2026/10/index.html","e940fdf27cbd86b2bf0f451813c8fc12"],["/archives/2026/index.html","844ea861cc64524b9fd1970811e15062"],["/archives/index.html","213ba6318cfaaeade5da79bcd4e86f83"],["/categories/index.html","67c9ed4bf0bd77913d4f2e89fe57b3ec"],["/categories/作业/index.html","fe34b865e45effa608f19c4ab027b59f"],["/categories/学习/index.html","5d613648bfe43e615e579afa88f3ff11"],["/categories/自定义Css/index.html","df09049efa5218ca4246130f0ea4736e"],["/categories/自定义Js/index.html","cb5116cd4750a510ac60775447291913"],["/css/CodeBlock.css","fa2b82b927ffced59050ea87727f05ea"],["/css/CodeInLine.css","99bd32848ccc75f1dfa7aa083d494973"],["/css/FrostedGlassBg.css","93e7ff23c39328d9e2bd89957b93dc36"],["/css/IndexImgHover.css","8f5d75c57f4242f0038dbf345eadfcf5"],["/css/IndexImgHoverAboutHead.css","c0104ca95e9312b4d4bc24beb3f4530f"],["/css/LinkCard.css","e8eaa08ac2935818ff6499eb1a849f31"],["/css/ScrollAnimation.css","794b1084020dd40b6717edc68700ba44"],["/css/ScrollBar.css","f7c7e1f80ea33bd3352a0a527e4ebfd2"],["/css/StrongInDark.css","8f5b8a6d50e8ce9920bf3bbaed65d771"],["/css/SubtitleColorEdit.css","32a6acbdd9083d0b5d410f701fc8af42"],["/css/TitleNeon.css","239b7264248651d379be525f4a4b069b"],["/css/UnifyImgWidth.css","4fd340e445cbf2576476f5b0f045b823"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/highlight.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/main.css","b51e3032b6aa8c8851b9298822b1bf05"],["/img/5dd9318d-96d9-4ee8-b9a1-99e9bb8583f2.png","29534736bdbb0f1594f00767b469713c"],["/img/989C8CFA097195CB7E176E6F27A2C52C.jpg","989c8cfa097195cb7e176e6f27a2c52c"],["/img/A6279A3E52D958C7A088AFAB4A10639B.jpg","a6279a3e52d958c7a088afab4a10639b"],["/img/avatar.png","c99e953744223566669e6930df884b27"],["/img/ca870b4b-a8a1-421d-8b99-2252f01abc90.png","736e43cf234d59428517aaaa62b9164f"],["/img/d4d68511-e455-4897-882f-288914f4cda5.png","3fadbc96ae05355f1e491a3835d28dc2"],["/img/default.png","77d897993100f5b20a18e2d2756d2ec4"],["/img/earth-space-hd-wallpaper-Hello-World-1.jpg","9cd7800b5c7196cfab9109fbbcb23113"],["/img/favicon.png","dde8453966ccb2e7b79821348f499bd4"],["/img/fluid.png","567906af91c4f8ff14b8175069f2672f"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/loading/loading6.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sisu.png","1b8df3d54eec340eed456d6069216575"],["/index.html","7bebbd2113a255672cfe50731e57bada"],["/js/LinkCard.js","92e1f8873edd264abb61e20aee7f271f"],["/js/ScrollAnimation.js","cc113e87ca476a44e69cdaec410b6404"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","9a2305fbf8f865a151825b154b4ff188"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/resources/index.html","b7eaf052a6ad114629ed9dc23810a6f5"],["/schedule/index.html","7ac1e096bc19837bde261a56c42989f2"],["/sitemap/index.html","6a488d1c1b1d6d264738c191f28da6f0"],["/sw-register.js","c45d97bba6c655afa9dc5dbd60549c34"],["/tags/Css/index.html","bc431280e353d46a0bda3a4ead64aacf"],["/tags/Markdown/index.html","b47c581a2e34bdddd69583b7a6d2c117"],["/tags/Python/index.html","86f145e8c30d47a71d8304f46f7dbb21"],["/tags/index.html","458380d60466d71d4d081ca38f33a3a5"],["/tags/js/index.html","73e0d5e45e0f52533783e29f93d59ead"]];
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
