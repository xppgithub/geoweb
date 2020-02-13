function addto_map2(mapnumber) {
   
    mapnumber.addSource("Res_per_mun_2018_QUA", {
        type: "geojson",
        data: "datos/Res_per_mun_2018_QUA.geojson"
    });

    mapnumber.addLayer({
        'id': "Rec_sel/Rec_total_QUA",
        'type': "circle",
        'source': "Res_per_mun_2018_QUA",
        'paint': {
            'circle-radius':5,
            'circle-color': [ 
                'step',
                ['get', 'Qual_R.S. \/ R.M. % total2'],
                '#FF0000',
                0, '#FFA500',
                1000,'#00FF00',
                100000,'#FFFFFF'],
            'circle-opacity':0.9
        }
    })

}
    
function addpopuptomap2(mapnumber) {

    mapnumber.on('click','Rec_sel/Rec_total_QUA',function(e){

        var text1= "";
        var text2= "";

        for (key in e.features[0].properties){

            if (key == 'Municipi') {

            text1 += "<span class='popup_key'="+key+">ENTITY NAME: "+"</span>"+"<span class='popup_value'="+"content"+">"+e.features[0].properties[key]+"</br>"+"</span>"
            }   

            if (key == 'Qual_R.S. \/ R.M. % total2') {

            text2 += "<span class='popup_key'="+key+">VARIATION: "+"</span>"+"<span class='popup_value'="+"content"+">"+e.features[0].properties[key]+" %"+"</br>"+"</span>"
            }
        
        };

        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(text1+text2)
            .addTo(mapnumber);
        })  

        mapnumber.on('mouseenter', 'Rec_sel/Rec_total_QUA', function () {
        mapnumber.getCanvas().style.cursor = 'pointer';
        });

        mapnumber.on('mouseleave', 'Rec_sel/Rec_total_QUA', function () {
        mapnumber.getCanvas().style.cursor = '';
        });   
    }      