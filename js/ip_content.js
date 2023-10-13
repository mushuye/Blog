var ip_content = document.querySelector(".ip_content");

fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        ip_content.innerHTML = '欢迎来自 <span class="p red">' + data.city + '</span> 的小伙伴<br>' +
            '访问IP为：<span class="p cyan">' + data.ip + '</span><br>' +
            '当下即最好：<span class="p blue">' + getBrowserInfo() + '</span>';
    })
    .catch(error => {
        console.error('无法获取IP地址:', error);
    });