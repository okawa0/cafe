function initMap() {
    var MyLatLng = new google.maps.LatLng(35.57932968464123, 139.66212162368495);
    var Options = {
        zoom: 15,
        center: MyLatLng,
        mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(document.getElementById('map'), Options);
}