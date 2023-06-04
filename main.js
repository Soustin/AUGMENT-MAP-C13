mapboxgl.accessToken = "pk.eyJ1IjoidXptYTF3aGpyYmZzIiwiYSI6ImNsaTk3aTV3NzF6cHgzcW1sNzA2Nmx4dDEifQ.K9ZqSktp1Lh7-m6ccrFu5g"

longitude = 77.22281367120031
latitude = 28.562250169889907

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [longitude, latitude],
    zoom: 16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy: true},
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    "bottom-left"
);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }),
    "bottom-right"
);

var img1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
    element: img1,
    scale: 0.001
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

var img2 = document.querySelector("#gateway")

var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([72.8346221082695, 18.922187063344996])
.addTo(map);

var img3 = document.querySelector("#gate")

var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([77.22951439639363, 28.613043318726206])
.addTo(map);

var img4 = document.querySelector("#lotus")

var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([77.25878345667965, 28.553670976014843])
.addTo(map);

var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([88.34257675122109, 22.544781016745933])
.addTo(map);

// new mapboxgl.Popup()
// .setLngLat([0, 0])
// .setHTML("<h1>Null Island</h1>")
// .addTo(map);

// map.on('load', () => {
//     map.addLayer({
//         id: 'rpd_parks',
//         type: 'fill',
//         source: {
//             type: 'vector',
//             url: 'mapbox://mapbox.3o7ubwm8'
//         },
//         'source-layer': 'RPD_Parks'
//     });
// });