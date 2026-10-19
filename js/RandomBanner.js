const imgs = [
    // 设定随机图片的路径
    "/img/banner/banner.webp",
    "/img/banner/banner1.webp",
]

const random_banner = imgs[Math.floor(Math.random() * imgs.length)];
const banner = document.getElementById('banner');
if (banner) {
    const metaOgType = document.querySelector('meta[property="og:type"]');
    console.log(" metaOgType.content: ", metaOgType ? metaOgType.content : "not found");
    if (metaOgType && metaOgType.content === "article") { //判断是否为文章页
        const background = banner.style.background;
        if (background.includes("/img/banner/random.webp")) { // 特殊判断规则
            banner.style.background = `url(${random_banner}) center center / cover no-repeat`;
        }
    }
}