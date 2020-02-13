function addto_map1(mapnumber) {

    mapnumber.addSource("Res_per_mun_2018", {
        type: "geojson",
        data: "datos/Res_per_mun_2018.geojson"
    });

    mapnumber.addLayer({
        'id': 'Kg/hab&any',
        'type': 'circle',
        'source': 'Res_per_mun_2018',
        'paint': {
            'circle-radius':4.5,
            'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'Tabla1.Kg \/ hab \/ any'],
                0, '#00FF80',
                500, '#00FF00',
                1000, '#80FF00',
                1500, '#FFFF00',
                2000,'#ff8000',
                2500, '#FF0000',
            ],
            'circle-opacity':0.9
        }
    })

}
    
function addpopuptomap1(mapnumber) {

    mapnumber.on('click','Kg/hab&any',function(e){

        var text1= "";
        var text2= "";

        for (key in e.features[0].properties){

            if (key == 'Municipi') {

            text1 += "<span class='popup_key'="+key+">ENTITY NAME: "+"</span>"+"<span class='popup_value'="+"content"+">"+e.features[0].properties[key]+"</br>"+"</span>"
            }   

            if (key == 'Tabla1.Kg \/ hab \/ any') {

            text2 += "<span class='popup_key'="+key+">AMOUNT: "+"</span>"+"<span class='popup_value'="+"content"+">"+e.features[0].properties[key]+" kgs/person&year"+"</br>"+"</span>"
            }   
    
        };

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(text1+text2)
            .addTo(mapnumber);
        })  

    mapnumber.on('mouseenter', 'Kg/hab&any', function () {
    mapnumber.getCanvas().style.cursor = 'pointer';
    });

    mapnumber.on('mouseleave', 'Kg/hab&any', function () {
    mapnumber.getCanvas().style.cursor = '';
    });       
  }