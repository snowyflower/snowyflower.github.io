function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = function() {
        callback();
    };

    document.head.appendChild(script);
}

// 加载 jQuery
loadScript('https://code.jquery.com/jquery-3.6.0.min.js', function() {
    $(function(){
        $("#loader-container").fadeOut(560);
    });
});