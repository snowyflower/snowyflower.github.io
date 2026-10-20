// 右键菜单
var right_click_num = 0;
var rect = document.getElementById("rightmenu-content").getBoundingClientRect();
window.oncontextmenu = function(e){
	// 检查是否按下了Ctrl键
	if (e.ctrlKey) {
		return true;
	}

	e.preventDefault(); //阻止浏览器自带的右键菜单显示
	var menu = document.getElementById("rightmenu-wrapper");
	menu.style.display = "block"; //将自定义的“右键菜单”显示出来
    if (e.clientX + rect.width > window.innerWidth) { // 如果超出屏幕右边
        if (e.clientX - rect.width < 0) {
            menu.style.left = "0px"; // 如果超出屏幕左边，则调整位置到左侧贴边
        } else {
            menu.style.left = e.clientX - rect.width + "px"; // 否则调整到鼠标位置的左侧
        }
    } else {
        menu.style.left = e.clientX + "px"; // 设置位置，跟随鼠标
    }
    if (e.clientY + rect.height > window.innerHeight) { // 如果超出屏幕底部
        if (e.clientY - rect.height < 0) {
            menu.style.top = "0px"; // 如果超出屏幕顶部，则调整位置到顶部
        } else {
            menu.style.top = e.clientY - rect.height + "px"; // 否则调整到鼠标位置的上方
        }
    } else {
        menu.style.top = e.clientY + "px"; // 设置位置，跟随鼠标
    }

	right_click_num = right_click_num + 1; //右键点击次数加1

	if(right_click_num == 1){
        const tooltip = document.getElementById('tooltip-rightmenu');
        tooltip.classList.add('show-tooltip');

        // 3秒后隐藏提示框
        setTimeout(() => {
		    tooltip.classList.remove('show-tooltip');
        }, 3000);
	}
}
window.onclick = function(e){ //点击窗口，右键菜单隐藏
	var menu = document.getElementById("rightmenu-wrapper");
	menu.style.display = "none";
}

// 监听鼠标右键按下事件
document.addEventListener('contextmenu', function(event) {
    // 检查是否有选中的文本
    const copySelectedTextItem = document.getElementById('copy-selected-text');
    const searchSelectedTextItem = document.getElementById('search-selected-text-BING');
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        copySelectedTextItem.hidden = false;
        searchSelectedTextItem.hidden = false;
    } else {
        copySelectedTextItem.hidden = true;
        searchSelectedTextItem.hidden = true;
    }

    // 检查是否有链接被点击
    const goToLinkItem = document.getElementById('go-to-link');
    const link = event.target.closest('a[href]');
    if (link) {
        goToLinkItem.hidden = false;
        goToLinkItem.querySelector('a').setAttribute('href', link.href);
    } else {
        goToLinkItem.hidden = true;
    }

    //检查是否有图片被点击
    const downloadImageItem = document.getElementById('download-image');
    const copyImageItem = document.getElementById('copy-image-link');
    const img = event.target.closest('img') || event.target.closest('svg');
    if (img) {
        downloadImageItem.hidden = false;
        if (img.tagName.toLowerCase() === 'img') {
        copyImageItem.hidden = false;
        downloadImageItem.querySelector('a').setAttribute('onclick', `downloadImage('${img.src}')`);
        copyImageItem.querySelector('a').setAttribute('onclick', `copyImageLink('${img.src}')`);
        } else if (img.tagName.toLowerCase() === 'svg' && img.classList.contains('custom-gallery-svg')) {
            const backgroundImage = img.style.backgroundImage;
            const urlMatch = backgroundImage.match(/url\(["']?(.*?)["']?\)/);
            if (urlMatch && urlMatch[1]) {
            const imageUrl = urlMatch[1];
            downloadImageItem.querySelector('a').setAttribute('onclick', `downloadImage('${imageUrl}')`);
            copyImageItem.querySelector('a').setAttribute('onclick', `copyImageLink('${imageUrl}')`);
            }
        }
    } else {
        downloadImageItem.hidden = true;
        copyImageItem.hidden = true;
    }

    // 根据前三者判断第一栏是否有元素，需要分割线
    const topLineItem = document.getElementById('top-line');
    if (copySelectedTextItem.hidden && !link && !img) {
        topLineItem.hidden = true;
    } else {
        topLineItem.hidden = false;
    }

    // 更新尺寸相关参数
    rect = document.getElementById("rightmenu-content").getBoundingClientRect();
});

// 平滑滚动到顶部
function scrollToTopSmooth() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 平滑滚动到底部
function scrollToBottomSmooth() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// 复制选中-复制选中文本功能
function copySelectedText() {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        navigator.clipboard.writeText(selectedText);
        const tooltip = document.getElementById('tooltip-rightmenu-return');
        tooltip.textContent = '选中文本已复制到剪贴板';
        tooltip.classList.add('show-tooltip');
        setTimeout(() => {
            tooltip.classList.remove('show-tooltip');
        }, 1500);
    }
}

// 必应搜索-在Bing上搜索选中文本功能
function searchSelectedTextBing() {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        const bingSearchUrl = `https://www.bing.com/search?q=${encodeURIComponent(selectedText)}`;
        window.open(bingSearchUrl, '_blank');
    }
}

// 下载图片-下载选中图片功能
function downloadImage(imgsrc) {
    if (!imgsrc) {
        console.error('Image source is required');
        return;
    }

    const name = imgsrc.split('/').pop(); // Extract the image name from the path
    fetch(imgsrc)
        .then(response => response.blob())
        .then(blob => {
            const a = document.createElement('a');
            const url = URL.createObjectURL(blob);
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
            const tooltip = document.getElementById('tooltip-rightmenu-return');
            tooltip.textContent = '图片已下载';
            tooltip.classList.add('show-tooltip');
            setTimeout(() => {
                tooltip.classList.remove('show-tooltip');
            }, 1500);
        })
        .catch(error => console.error('Error downloading image:', error));
}

// 复制图片链接-复制选中图片链接功能
function copyImageLink(imgsrc) {
    if (imgsrc) {
        navigator.clipboard.writeText(imgsrc);
        const tooltip = document.getElementById('tooltip-rightmenu-return');
        tooltip.textContent = '链接已复制到剪贴板';
        tooltip.classList.add('show-tooltip');
        setTimeout(() => {
            tooltip.classList.remove('show-tooltip');
        }, 1500);
    }
}

// 随便看看-随机跳转到文章
function RandomGo() {
  // 直接使用 Hexo 生成的文章列表
  if (window.randomPosts && window.randomPosts.length > 0) {
    const randomIndex = Math.floor(Math.random() * window.randomPosts.length);
    const randomLink = window.randomPosts[randomIndex];
    if (randomLink) {
      window.location.href = randomLink;
    }
  } else {
    console.error('未能获取到随机文章列表，请检查 random-posts.js 是否已正确生成并引入。');
  }
}
// 复制链接-复制当前地址功能
function copyLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    const tooltip = document.getElementById('tooltip-rightmenu-return');
    tooltip.textContent = '链接已复制到剪贴板';
    tooltip.classList.add('show-tooltip');

    // 3秒后隐藏提示框
    setTimeout(() => {
        tooltip.classList.remove('show-tooltip');
    }, 1500);
}

// 切换昼夜模式功能
function toggleColorMode() {
    document.getElementById('color-toggle-btn').click();
    if (document.documentElement.getAttribute('data-user-color-scheme') === 'dark' ||
        (document.documentElement.getAttribute('data-user-color-scheme') === 'auto' &&
         window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.getElementById('toggle-color-mode-icon').className = "iconfont icon-dark";
    }
    else {
        document.getElementById('toggle-color-mode-icon').className = "iconfont icon-light";
    }
}

// 初始化图标状态
if (localStorage.getItem('DarkNightMode') === 'true') {
    document.getElementById("toggle-color-mode-icon").className = "iconfont icon-light";
} else {
    document.getElementById("toggle-color-mode-icon").className = "iconfont icon-dark";
}

// 切换阅读模式功能
function readingMode(enable) {
    const boardCtn = document.getElementById('board-ctn');
    const mainCol = boardCtn?.parentElement;
    const comment = document.getElementById('comments');

    if (enable) {
        document.getElementById('toggle-reading-mode-icon').className = "fa-solid fa-toggle-on";
        document.querySelectorAll('.side-col').forEach(el => {
            el.style.setProperty('display', 'none', 'important');
        });
        if (boardCtn) {
            boardCtn.classList.remove('container');
            boardCtn.style.padding = '0';
        }
        if (mainCol) {
            mainCol.className = "col-lg-12 nopadding-x-md";
        }
        if (comment) {
            comment.style.display = 'none';
        }
    } else {
        document.getElementById('toggle-reading-mode-icon').className = "fa-solid fa-toggle-off";
        document.querySelectorAll('.side-col').forEach(el => {
            el.style.display = '';
        });
        if (boardCtn) {
            boardCtn.classList.add('container');
            boardCtn.style.padding = '';
        }
        if (mainCol) {
            mainCol.className = "col-lg-8 nopadding-x-md";
        }
        if (comment) {
            comment.style.display = '';
        }
    }
    localStorage.setItem('ReadingMode', enable ? 'true' : 'false');
}
function toggleReadingMode() {
    const ReadingMode = localStorage.getItem('ReadingMode');
    if (ReadingMode === 'false' || !ReadingMode) {
        readingMode(true);
    } else {
        readingMode(false);
    }
}