async function fetchSlogan() {
    try {
        const res = await fetch('https://v1.hitokoto.cn/?c=i');
        const data = await res.json();
        const hitokotoElem = document.getElementById('hitokoto');
        if (hitokotoElem) {
            hitokotoElem.innerText = `${data.hitokoto}  —— ${data.from_who || ''}《${data.from}》`;
        }
    } catch (err) {
        console.error(err);
    }
}

fetchSlogan();