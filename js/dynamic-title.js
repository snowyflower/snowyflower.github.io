// 动态标签页标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 离开当前页面时标签显示的内容
        document.title = '不要走嘛~(இдஇ)';
        clearTimeout(titleTime);
    } else {
        // 返回当前页面时标签显示的内容
        document.title = '你回来啦(๑˃̵ᴗ˂̵)و' + OriginTitile;
        // 2秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 3000);
    }
});