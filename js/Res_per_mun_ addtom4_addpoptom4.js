function addto_map4(mapnumber) {
   
    mapnumber.loadImage(src='img/recycling.png', function(error, image) {
        if (error) throw error;
        if (!mapnumber.hasImage('rec')) mapnumber.addImage('rec', image);
        });

        mapnumber.addSource("Deix_Cat", {
            type: "geojson",
            data: "datos/Deix_Cat.geojson"
        });

        mapnumber.addLayer({
            'id': "Deix_Cat_Layer",
            'type': "circle",
            'source': "Deix_Cat",
            'paint': {
                'circle-radius':5,
                'circle-color': 'skyblue',
                'circle-opacity':1,
                'circle-stroke-color':'black',
                'circle-stroke-width':0.1
            }
        })

        mapnumber.addLayer({
            'id': 'Deix_Cat_icon',
            'type': 'symbol',
            'source': 'Deix_Cat',
            'minzoom':11,
            'layout':{
                'icon-image':'rec',
                'icon-size':0.08},
        })
      
    }
    
function addpopuptomap4(mapnumber) {

    mapnumber.on('click','Deix_Cat_Layer',function(e){

        var text1= "";
        var text2= "";

        for (key in e.features[0].properties){

            if (key == 'NOM') {

            text1 += "<span class='popup_key1'="+key+">NAME: "+"</span>"+"<span class='popup_value1'="+"content"+">"+e.features[0].properties[key]+"</br>"+"</span>"
            }

            if (key == 'VIA') {

            text2 += "<span class='popup_key1'="+key+">ADDRESS: "+"</span>"+"<span class='popup_value1'="+"content"+">"+e.features[0].properties[key]+"</br>"+"</span>"
        }
        
        };

        new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(text1+text2)
        .addTo(mapnumber);
        })  

        mapnumber.on('mouseenter', 'Deix_Cat_Layer', function () {
        mapnumber.getCanvas().style.cursor = 'pointer';
        });

        mapnumber.on('mouseleave', 'Deix_Cat_Layer', function () {
        mapnumber.getCanvas().style.cursor = '';
        });
    }