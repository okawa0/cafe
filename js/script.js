function initMap() {
    var MyLatLng = new google.maps.LatLng(35.57932968464123, 139.66212162368495);
    var Options = {
        zoom: 15,
        center: MyLatLng,
        mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(document.getElementById('map'), Options);
}

document.addEventListener('DOMContentLoaded', function() {
const images = document.querySelectorAll('#mv img');
let currentIndex = 0;
function changeImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}
  // 最初の画像を表示
  images[0].classList.add('active');
setInterval(changeImage, 5000); // 5秒ごとに切り替え
});

$(function() {
  var topBtn = $('#page-top');    
  topBtn.hide();
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});