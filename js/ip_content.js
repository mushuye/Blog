//获取当前IP地址和浏览器标识
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
var apiURL = 'https://ipapi.co/json';

fetch('https://whois.pconline.com.cn/ip.jsp') // 请替换成实际的URL
  .then(response => response.json())
  .then(iaddressData => {
    // 获取 adc.com 中的IP量
    
fetch(apiURL)
  .then(response => response.json())
  .then(returnCitySN => {
    if (ip_content != null) {
      ip_content.innerHTML = '欢迎来自 <span class="p red">' + iaddressData + returnCitySN.city + "</span> 的小伙伴<br>访问IP为： <span class='p cyan'>" + returnCitySN.ip + "</span><br>浏览器版本：<span class='p blue'>" + getBrowserInfo() + '</span>';
    }
  })
  .catch(error => console.error('获取数据时出错: ' + error));

