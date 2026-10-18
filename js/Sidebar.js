function lastUpdate() {
    fetch('/sitemap.xml')
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
        const lastmodDates = Array.from(data.querySelectorAll('url > lastmod')).map(node => new Date(node.textContent));
        const mostRecentDate = new Date(Math.max(...lastmodDates));
        const now = new Date();
        const diffTime = Math.abs(now - mostRecentDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 0) {
            document.getElementById('sidebar-site-update').innerText = `今天`;
        } else {
            document.getElementById('sidebar-site-update').innerText = `${diffDays}天前`;
        }
    })
}

function updateSidebar() {
    document.getElementById('sidebar-word-count').innerHTML = document.getElementById('g-total-word-id').innerText;
    document.getElementById('sidebar-post-count').innerHTML = document.getElementById('g-total-posts-id').innerText;
    document.getElementById('sidebar-site-age').innerHTML = document.getElementById('time-day').innerText + '天';
    document.getElementById('sidebar-site-pv').innerHTML = document.getElementById('vercount_value_site_pv').innerText;
    document.getElementById('sidebar-site-uv').innerHTML = document.getElementById('vercount_value_site_uv').innerText;
    lastUpdate(); 
}

function createSidebar() {
    const main = document.querySelector('main');

    const sideCol = document.createElement('div');
    sideCol.className = "side-col d-none d-lg-block col-lg-2";
    sideCol.style.paddingTop = "60px";
    sideCol.style.float = "right";
    sideCol.style.position = "sticky";
    sideCol.style.top = "2rem";

    const sideBar= `
        <aside class="sidebar" id="site-stats">
            <div class="sidebar-element">
                <span><i class="fas fa-file-alt"></i> &nbsp;文章总数</span>
                <span id="sidebar-post-count"></span>
            </div>
            <div class="sidebar-element">
                <span><i class="fas fa-chart-bar" style="font-size: 0.72rem;"></i> &nbsp;全站字数</span>
                <span id="sidebar-word-count"></span>
            </div>
            <div class="sidebar-element">
                <span><i class="fas fa-eye" style="font-size: 0.72rem;"></i> &nbsp;总访问量</span>
                <span id="sidebar-site-pv"></span>
            </div>
            <div class="sidebar-element">
                <span><i class="fas fa-user"></i> &nbsp;总访客数</span>
                <span id="sidebar-site-uv"></span>
            </div>
            <div class="sidebar-element">
                <span><i class="fas fa-calendar-alt"></i> &nbsp;建站时长</span>
                <span id="sidebar-site-age"></span>
            </div>
            <div class="sidebar-element">
                <span><i class="fa-solid fa-pen-nib"></i> &nbsp;上次更新</span>
                <span id="sidebar-site-update"></span>
            </div>
        </aside>
    `;
    sideCol.innerHTML = sideBar;
    main.insertBefore(sideCol, main.firstChild);
    updateSidebar();
    judgeSidebarHidden();

    const sidebar_pv = document.getElementById('sidebar-site-pv').innerHTML;
    if (sidebar_pv === '1314') {
        var vercount_pv = document.getElementById('vercount_value_site_pv').innerHTML;
        var intervalId = setInterval(() => {
            vercount_pv = document.getElementById('vercount_value_site_pv').innerHTML;
            if (vercount_pv !== '1314') {
                updateSidebar();
                clearInterval(intervalId);
            }
        }, 100);
    }
}

function judgeSidebarHidden() {
    const boardRect = document.getElementById('board').getBoundingClientRect();
    const sideColRect = document.querySelector('.side-col.d-none.d-lg-block.col-lg-2').getBoundingClientRect();
    const sideBar = document.getElementById('site-stats');
    // console.log(boardRect.right, sideColRect.left);
    if (boardRect.right - 10 > sideColRect.left) {
        sideBar.style.display = 'none';
    } else {
        sideBar.style.display = 'block';
    }
}

if (document.querySelector('meta[property="og:url"][content="https://ronghuasixue.com/index.html"]') ||
    document.querySelector('meta[property="og:url"][content^="https://ronghuasixue.com/page/"]')) {
    document.addEventListener('DOMContentLoaded', createSidebar);
    window.addEventListener('resize', () => {
        judgeSidebarHidden();
    });
}