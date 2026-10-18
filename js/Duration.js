!(function() {
  /** 计时起始时间，自行修改 **/
  var start = new Date("2023-06-28 12:43:14");

  function update() {
    var now = new Date();
    now.setTime(now.getTime()+250);
    days = (now - start) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - start) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    if(String(hnum).length === 1 ){
      hnum = "0" + hnum;
    }
    minutes = (now - start) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if(String(mnum).length === 1 ){
      mnum = "0" + mnum;
    }
    seconds = (now - start) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if(String(snum).length === 1 ){
      snum = "0" + snum;
    }
    document.getElementById("duration-container").innerHTML = `
        &nbsp;容华似雪&nbsp;已逾
        <span id="time-day">${dnum}</span>
        日又
        <span id="time-hour">${hnum}</span>
        时
        <span id="time-minute">${mnum}</span>
        分
        <span id="time-second">${snum}</span>
        秒
    `;
  }

  update();
  setInterval(update, 1000); 
})();