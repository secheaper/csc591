var state = "map";
document.getElementById ("toggle").addEventListener ("click", () => {
    if (state == "map") {
        document.getElementById("map").style.display = "none";
        document.getElementById("vr").style.display = "none";
        document.getElementById("pix").style.display = "";
        document.getElementById("toggle").innerHTML = "View Map";
        state = "time"
    } else {
        document.getElementById("map").style.display = "";
        document.getElementById("vr").style.display = "none";
        document.getElementById("pix").style.display = "none";
        document.getElementById("toggle").innerHTML = "View Timeline";
        state = "map"
    }
}, false);

document.getElementById("vrbutton").addEventListener("click", () => {
    state = "vr"
    document.getElementById("map").style.display = "none";
    document.getElementById("pix").style.display = "none";
    document.getElementById("vr").style.display = "";
}, false);

document.getElementById("year").addEventListener ("input", (event) => {
   document.getElementById("yeartext").innerHTML = event.target.value;
   if (event.target.value < 1930) {
    document.getElementById("photo").src = "./1.jpg";
   } else if (event.target.value < 1960) {
        document.getElementById("photo").src = "./2.jpg";
   } else if (event.target.value < 1990) {
        document.getElementById("photo").src = "./3.jpg";
   } else {
        document.getElementById("photo").src = "./4.jpg";
   }
});

var map = L.map('map', { zoomControl: false }).setView([35.78629182935513, -78.66648673212255], 20);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidXg1OTEiLCJhIjoiY2wyY2d6ZzE3MGFpbjNjcm1nczR6dHFjZSJ9.GCrcD26S0CzclPH5ToivhA'
}).addTo(map);

var circle = L.circle([35.78629182935513, -78.66648673212255], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 30
}).addTo(map);

document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';