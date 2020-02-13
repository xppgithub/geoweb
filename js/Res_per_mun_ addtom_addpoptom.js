function addto_map(mapnumber) {

    mapnumber.addSource("Res_per_mun_2018", {
        type: "geojson",
        data: "datos/Res_per_mun_2018.geojson"
    });

    mapnumber.addLayer({
        'id': 'Rec_sel/Rec_total',
        'type': 'circle',
        'source': 'Res_per_mun_2018',
        'paint': {
            'circle-radius':4.5,
            'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'Tabla1.R.S. \/ R.M. % total'],
                0, '#FF0000',
                25, '#FFA500',
                50, '#00FF00',
                100, '#FFFFFF'
            ],
            'circle-opacity':0.9
        }   
    });

}
    
function addpopuptomap(mapnumber) {

    mapnumber.on('click','Rec_sel/Rec_total',function(e){

        var text1= "";
        var text2= "";

        for (key in e.features[0].properties){

            if (key == 'Municipi') {

            text1 += "<span class='popup_key'"+key+">ENTITY NAME: "+"</span>"+"<span class='popup_value'="+"content"+">"+e.features[0].properties[key]+"</br>"+"</span>"
            }

            if (key == 'Tabla1.R.S. \/ R.M. % total') {

            text2 += "<span class='popup_key'="+key+">PERCENTAGE (%): "+"</span>"+"<span class='popup_value'="+"content"+">"+e.features[0].properties[key]+" %"+"</br>"+"</span>"
            }
        };

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(text1+text2)
            .addTo(mapnumber);
    });

    mapnumber.on('mouseenter', 'Rec_sel/Rec_total', function () {
    mapnumber.getCanvas().style.cursor = 'pointer';
    });

    mapnumber.on('mouseleave', 'Rec_sel/Rec_total', function () {
    mapnumber.getCanvas().style.cursor = '';
    });
 
  }