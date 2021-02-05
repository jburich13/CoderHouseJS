document.addEventListener('DOMContentLoaded', () => {
    $.ajax({
        url: 'https://api.rawg.io/api/games?page_size=21&page=' + page,
        beforeSend: function() {
            $(".verMas").toggle()
            $('#loader').show();
        },
        success: function(data, status, xhr) {
            agregarCards(data.results)

        },
        complete: function() {
            $(".verMas").toggle();
            $("#loader").hide();

        },
        error: function(xhr, status, errorThrown) {
            console.log(xhr)
            console.log(status)
            console.log(errorThrown)
        }

    });

})

let page = 1;
const form = document.querySelector("#form");
const inputBuscador = document.querySelector("#buscador");



form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(inputBuscador.value);

    $.ajax({
        url: 'https://api.rawg.io/api/games?search_exact=true&search=' + inputBuscador.value + "&page_size=21" + "&page=" + page,
        beforeSend: function() {
            $("#elementos").remove();
            $(".card").hide();
            $('#loader').show();
        },
        success: function(data, status, xhr) {
            agregarCards(data.results);
            page += 1;
            $("#misCursos").show();

        },
        complete: function() {
            $("#loader").hide();
        },
        error: function(xhr, status, errorThrown) {
            console.log(xhr)
            console.log(status)
            console.log(errorThrown)
        }
    });
})





let agregarCards = (data) => {
    console.log(data)
        //Traigo el container
    const container = document.getElementById("misCursos");
    data.forEach(game => {

        //Creo el div de la tarjeta
        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");
        divCard.setAttribute("id", "card");
        container.appendChild(divCard);

        //Agrego la imagen
        const imgCard = document.createElement("img");
        imgCard.setAttribute("class", "card-img-top img-card")
        imgCard.src = `${game.background_image}`;
        divCard.appendChild(imgCard);



        //Agrego el body
        const divBody = document.createElement("div");
        divBody.setAttribute("class", "card-body");
        divCard.appendChild(divBody);

        //Agrego el titulo
        const tituloCard = document.createElement("h5");
        tituloCard.setAttribute("class", "card-title");
        tituloCard.textContent = `${game.name}`;
        divBody.appendChild(tituloCard);


        //Agrego la descripcion
        const descripcionCard = document.createElement("p");
        descripcionCard.setAttribute("class", "card-title");
        descripcionCard.setAttribute("id", "text");
        descripcionCard.textContent = "Lanzamiento: " + `${game.released}`;
        divBody.appendChild(descripcionCard);


        const labelTiendas = document.createElement("h3")
        labelTiendas.textContent = "Tiendas:";

        divBody.appendChild(labelTiendas);




        //Agrego la linea de los botones
        const rowBotones = document.createElement("div");
        rowBotones.setAttribute("class", "row justify-content-center");
        divBody.appendChild(rowBotones);



        //Agrego los botones
        const botonCard = document.createElement("a");
        botonCard.className = `boton col-10 rounded-pill p-2`;
        botonCard.href = "#";
        botonCard.id = `${game.id}`;
        botonCard.textContent = "Mas información";
        botonCard.addEventListener("click", (e) => {
            e.preventDefault();
            $("#misCursos").fadeOut()
            $("#verMas").fadeOut()
            $.ajax({
                url: "https://api.rawg.io/api/games/" + botonCard.id,
                beforeSend: function() {
                    $('#loader').show();
                },
                success: function(data, status, xhr) {
                    $("#elementos").show();
                    infoAmpliada();
                    cargarImgPortada(data);
                    cargarDescripcion(data);
                    cargarPlataformas(data);
                    loadBtn();
                },
                complete: function() {
                    $("#loader").hide();
                },
                error: function(xhr, status, errorThrown) {
                    console.log(xhr)
                    console.log(status)
                    console.log(errorThrown)
                }

            });

        });


        rowBotones.appendChild(botonCard);
    });
}

function infoAmpliada() {
    const container = document.querySelector("#descripcion-juegos");
    const elementos = document.createElement("div");
    elementos.setAttribute("id", "elementos");
    container.appendChild(elementos);

}

function loadBtn() {
    const container = document.querySelector("#descripcion-juegos");
    const elementos = document.querySelector("#elementos")
    const contBtn = document.createElement("div");
    contBtn.setAttribute("id", "volver");
    const btnVolver = document.createElement("a");
    btnVolver.setAttribute("class", "boton rounded-pill p-4 mb-5");
    btnVolver.textContent = "Volver"
    btnVolver.href = "#"
    contBtn.appendChild(btnVolver);
    elementos.appendChild(contBtn);
    container.appendChild(elementos);
    btnVolver.addEventListener("click", (e) => {
        e.preventDefault();
        $(".main").remove();
        $(elementos).remove();
        $("#misCursos").show();
        $("#verMas").show();
    })
}




function cargarImgPortada(data) {

    const elementos = document.querySelector("#elementos")
    const main = document.createElement("div");
    const imgPortada = document.createElement("img");
    main.setAttribute("class", "row justify-content-center m-5 main")
    imgPortada.setAttribute("class", "img-portada row justify-content-center")
    imgPortada.setAttribute("src", `${data.background_image}`);

    main.appendChild(imgPortada);
    console.log(elementos);
    elementos.appendChild(main);
    $("#descripcion-juegos").show();
}

function cargarDescripcion(data) {
    const elementos = document.querySelector("#elementos")
    const containerDescripcion = document.createElement("div");
    containerDescripcion.setAttribute("id", "container-descripcion");
    containerDescripcion.setAttribute("class", "col-12  row justify-content-start");
    const titulo = document.createElement("a");
    const descripcion = document.createElement("p");
    titulo.href = "#";
    titulo.addEventListener("click", (e) => {
        e.preventDefault()
        $("#descripcion").slideToggle("fast");
    })
    titulo.textContent = "Descripción";
    titulo.setAttribute("id", "titulo-descripcion")
    titulo.setAttribute("class", "col-12 text-left")
    descripcion.setAttribute("id", "descripcion");
    descripcion.innerHTML = `${data.description}`

    containerDescripcion.appendChild(titulo);
    containerDescripcion.appendChild(descripcion);
    elementos.appendChild(containerDescripcion);
    $("#descripcion").hide();
}

function cargarPlataformas(data) {
    const elementos = document.querySelector("#elementos")
    const containerPlataformas = document.createElement("div");
    containerPlataformas.setAttribute("id", "container-plataforma");
    containerPlataformas.setAttribute("class", "col-12  row justify-content-start");
    const titulo = document.createElement("a");
    const plataformas = document.createElement("p");
    titulo.href = "#";
    titulo.addEventListener("click", (e) => {
        e.preventDefault()
        $(listaPlataformas).slideToggle("fast");
    })
    titulo.textContent = "Plataformas";
    titulo.setAttribute("id", "titulo-plataforma")
    titulo.setAttribute("class", "col-12 text-left")

    plataformas.setAttribute("id", "plataformas");
    let plataformasAPI = data.platforms;
    const listaPlataformas = document.createElement("ul");
    plataformasAPI.forEach(element => {
        const plataformas = document.createElement("li");
        plataformas.setAttribute("class", "col-12");
        plataformas.textContent = `${element.platform.name}`;
        listaPlataformas.appendChild(plataformas);
    });


    containerPlataformas.appendChild(titulo);
    containerPlataformas.appendChild(plataformas);
    containerPlataformas.appendChild(listaPlataformas);
    elementos.appendChild(containerPlataformas);
    $(listaPlataformas).hide();
}







let pageCatalogo = 1
const verMas = document.querySelector(".verMas");
verMas.addEventListener("click", (e) => {
    e.preventDefault();

    $.ajax({
        url: 'https://api.rawg.io/api/games?page_size=21&page=' + pageCatalogo,
        beforeSend: function() {
            $('.verMas').hide();
            $('#loader').show();
        },
        success: function(data, status, xhr) {
            agregarCards(data.results)
            pageCatalogo += 1;
        },
        complete: function() {
            $("#loader").hide();
            $('.verMas').show();
            verMas.scrollIntoView()
        },
        error: function(xhr, status, errorThrown) {
            console.log(xhr)
            console.log(status)
            console.log(errorThrown)
        }

    });
})