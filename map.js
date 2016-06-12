function init(){
        var el = document.getElementById('mapcanvas');
        var myLocation = new google.maps.LatLng(41.857857, -87.641191);
        var mapOptions = {
                        center: myLocation,
                        zoom: 17,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControlOptions: {
                                        position: google.maps.ControlPosition.BOTTOM_LEFT
                        }
        };

        var myMap = new google.maps.Map(el, mapOptions);

        var marker = new google.maps.Marker({
                        position: myLocation,
                        map: myMap

        });
 
}
 
google.maps.event.addDomListener(window, 'load', init);
 