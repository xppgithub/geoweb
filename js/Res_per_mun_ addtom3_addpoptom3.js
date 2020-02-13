function addto_map3(mapnumber) {
   
    mapnumber.addSource("Res_per_mun_2018_QUA", {
        type: "geojson",
        data: "datos/Res_per_mun_2018_QUA.geojson"
    });

    mapnumber.addLayer({
        'id': "Kg/hab&any_QUA",
        'type': "circle",
        'source': "Res_per_mun_2018_QUA",
        'paint': {
            'circle-radius':5,
            'circle-color': [ 
                'step',
                ['get', 'Qual_Kg \/ hab \/ any2'],
                '#FFFFFF',
                -50, '#00FF00',
                -25,'#FFA500',
                 0,'#FF0000'],
            'circle-opacity':0.9
        }
    })
}
    
function addpopuptomap3(mapnumber) {

    mapnumber.on('click','Kg/hab&any_QUA',function(e){

        var text1= "";
        var text2= "";

        for (key in e.features[0].properties){

            if (key == 'Municipi') {

            text1 += "<span class='popup_key'="+key+">ENTITY NAME: "+"</span>"+"<span class='popup_value'="+"content"+">"+e.features[0].properties[key]+"</br>"+"</span>"
            }

            if (key == 'Qual_Kg \/ hab \/ any2') {

            text2 += "<span class='popup_key'="+key+">VARIATION: "+"</span>"+"<span class='popup_value'="+"content"+">"+e.features[0].properties[key]+" %"+"</br>"+"</span>"
            }
        
        };

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(text1+text2)
            .addTo(mapnumber);
        })  

        mapnumber.on('mouseenter', 'Kg/hab&any_QUA', function () {
        mapnumber.getCanvas().style.cursor = 'pointer';
        });

        mapnumber.on('mouseleave', 'Kg/hab&any_QUA', function () {
        mapnumber.getCanvas().style.cursor = '';
        });
    }