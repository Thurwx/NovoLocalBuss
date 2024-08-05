function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 40.731, lng: -73.997 },
  });
  const geocoder = new google.maps.Geocoder();
  const infowindow = new google.maps.InfoWindow();

  document.getElementById("submit").addEventListener("click", () => {
    geocodeLatLng(geocoder, map, infowindow);
  });
}

function geocodeLatLng(geocoder, map, infowindow) {
  const input = document.getElementById("latlng").value;
  const latlngStr = input.split(",", 2);
  const latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1]),
  };

  geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {
        map.setZoom(11);

        const marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });

        infowindow.setContent(response.results[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert("No results found");
      }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
}

window.initMap = initMap;


document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelector(".toggle-checkbox");
  var toggleSlot = document.querySelector(".toggle-slot");
  var sidebarLogoLight = document.getElementById("sidebar-logo");
  var sidebarLogoDark = document.getElementById("sidebar-logo-escuro");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      // Tema escuro
      document.body.classList.add("dark-theme");
      sidebarLogoLight.style.display = "none"; // Oculta a logo do tema claro
      sidebarLogoDark.style.display = "block"; // Exibe a logo do tema escuro
    } else {
      // Tema claro
      document.body.classList.remove("dark-theme");
      sidebarLogoLight.style.display = "block"; // Exibe a logo do tema claro
      sidebarLogoDark.style.display = "none"; // Oculta a logo do tema escuro
    }
    
  });
});