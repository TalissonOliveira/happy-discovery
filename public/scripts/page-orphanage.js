const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create map
const map = L.map('mapid', options).setView([-9.6708197,-35.7146132], 15)

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)


// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create and add marker
L
.marker([-9.6708197,-35.7146132], { icon })
.addTo(map)



/* Image Gallery */

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    // selecionar a image clicada
    const image = button.children[0] /* Pegar o primeiro filho do button */
    const imageContainer = document.querySelector(".orphanage-details > img")
    // atualizar o container de image
    imageContainer.src = image.src
    // adicionar a classe .active para este botão
    button.classList.add('active')
}