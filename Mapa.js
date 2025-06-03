

class Mapa{
    #map;
   


    
    //pintara el mapa
    constructor(){

        //inicializamos la variable que me dibujara el mapa
        this.#map = L.map('map', { center: [51.505, -0.09], zoom: 13 });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        

        L.marker([51.5, -0.09]).addTo(this.#map)
                .bindPopup('Estas aqui')
                .openPopup();


        var circle = L.circle([51.508, -0.11], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500

        }).addTo(this.#map);

        var polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(this.#map);


        //Api de geolocalizacion https://www.w3schools.com/JSREF/prop_geo_position.asp   informacion de donde la saque
    
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.mostrarPuntInicial.bind(this), 
            // el metodo .bind(this) lo que hace es que me asegura que se utilize la funcion
            //Esto pasa porque al pasar un metodo de una clase a otra funcion que es getcurrent el this ser pierde y con el bin(this) es como volverlo a poner
            // en resuemn si paso una funcion dentro de otra funcion debo de utilizar el bin, porque si no no la encuentra la funcion
                (erro)=> {
                    console.log("Error en la geolocalizacion", erro);
                })
        }
    };
    

    mostrarPuntInicial(pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        this.#map.setView([lat, lon], 15);

        L.marker([lat, lon]).addTo(this.#map)
            .bindPopup('Ubicación actual')
            .openPopup();

        console.log(`latitud ${lat}`);
        console.log(`longitud ${lon}`);
    }

    limpiarMapa() {
        this.#map.eachLayer(layer => {
            if (layer instanceof L.Marker || layer instanceof L.Circle || layer instanceof L.Polygon) {
                this.#map.removeLayer(layer);
            }
        });
    }

    actualizarPosInitMapa(lat, lon, nom , direccio ) {
        if (!this.#map) {
            console.error("Error: el mapa no está funcionando");
            return;
        }
        this.limpiarMapa(); // Limpiar marcadores previos
        this.#map.setView([lat, lon], 15);

        L.marker([lat, lon]).addTo(this.#map)
            .bindPopup(` ${nom}<br>${direccio}`)
            .openPopup();
    }

    //me cuenta el total de los puntos de interes
    mostrarPunt(lat, lon , nom, direccio ) {
        L.marker([lat, lon]).addTo(this.#map)
            .bindPopup(` ubicacion actual <b>${nom}</b><br>${direccio}`)
            .openPopup();
    }
}

