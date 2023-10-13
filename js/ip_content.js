//获取当前IP地址和浏览器标识


var ip_content = document.querySelector(".ip_content");
var apiURL = 'https://ip.useragentinfo.com/json?';

fetch(apiURL)
  .then(response => response.json())
  .then(returnCitySN => {
    if (ip_content != null) {
      ip_content.innerHTML = '欢迎来自 <span class="p red">' + returnCitySN.province + returnCitySN.city + "</span> 的小伙伴<br>访问IP为： <span class='p cyan'>" + returnCitySN.ip + "</span><br>网络版本：<span class='p blue'>" + returnCitySN.city + returnCitySN.isp + returnCitySN.net + '</span>';
    }
  })
  .catch(error => console.error('获取数据时出错: ' + error));
