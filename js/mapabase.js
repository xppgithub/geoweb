var map, osm, controlCapas;

function init() {
    map = L.map('map', {
        center: [42.6863, 2.8382],
        zoom: 7
    });
    osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 1,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright"/>OpenStreetMap</a>'
    });

    var Esri_WorldImagery =
        L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });


    var hibrid = L.layerGroup();

    var Esri_WorldImagery2 =
        L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }).addTo(hibrid);

    var Stamen_TonerHybrid = L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }).addTo(hibrid);

    hibrid.addTo(map);

    var mapaBase = {
        'Mapa': osm,
        'Foto': Esri_WorldImagery,
        'Hibrid': hibrid
    };
    controlCapas = L.control.layers(mapaBase, null, { collapsed: true });
    controlCapas.addTo(map);
    controlEscala = L.control.scale();
    controlEscala.addTo(map);
}