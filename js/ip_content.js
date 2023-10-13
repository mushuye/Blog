function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}

var ip_content = document.querySelector(".ip_content");

if (ip_content != null && typeof (returnCitySN) != undefined) {
    ip_content.innerHTML = '欢迎来自 <span class="p red">' + returnCitySN["regionName"] + returnCitySN["city"] + "</span> 的小伙伴<br>" + "访问IP为： <span class='p cyan'>" + returnCitySN["query"] + "</span><br>当下即是最好：<span class='p blue'>" + getBrowserInfo() + '</span>';
}

