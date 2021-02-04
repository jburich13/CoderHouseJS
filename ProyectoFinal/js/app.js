class Curso {
    constructor(titulo, img, descripcion, precio) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
    }
}





// document.addEventListener('DOMContentLoaded', () => {
//     $.ajax({
//         url: 'js/cursos.json',
//         success: function(data, status, xhr) {
//             agregarCards(data);
//         },
//         error: function(xhr, status, errorThrown) {
//             console.log(xhr)
//             console.log(status)
//             console.log(errorThrown)
//         }
//   });




// })

let page = 1;
document.addEventListener('DOMContentLoaded', () => {
    $.ajax({
        url: 'https://api.rawg.io/api/games?page_size=3&page=' + page,
        beforeSend: function() {
            $('#loader').show();
        },
        success: function(data, status, xhr) {
            agregarCards(data.results)

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


        //Agrego el precio




        //Agrego la linea de los botones
        const rowBotones = document.createElement("div");
        rowBotones.setAttribute("class", "row justify-content-center");
        divBody.appendChild(rowBotones);




        //Agrego los botones
        //Boton 2
        const botonCard = document.createElement("a");
        botonCard.className = `boton col-10 rounded-pill p-2`;
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
                    infoAmpliada(data);
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

function infoAmpliada(data) {
    const container = document.querySelector("#descripcion-juegos");
    const elementos = document.createElement("div");
    elementos.setAttribute("id", "elementos");
    const contBtn = document.createElement("div");
    contBtn.setAttribute("id", "volver");
    const btnVolver = document.createElement("a");
    btnVolver.setAttribute("class", "boton rounded-pill p-4 m-3");
    btnVolver.textContent = "volver"
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


    cargarImgPortada(data);
    cargarDescripcion(data);
    cargarPlataformas(data);
}




function cargarImgPortada(data) {


    const main = document.createElement("div");
    const imgPortada = document.createElement("img");
    main.setAttribute("class", "row justify-content-center m-5 main")
    imgPortada.setAttribute("class", "img-portada row justify-content-center")
    imgPortada.setAttribute("src", `${data.background_image}`);
    main.appendChild(imgPortada);
    elementos.appendChild(main);
    $("#descripcion-juegos").show();
}

function cargarDescripcion(data) {
    const containerDescripcion = document.createElement("div");
    containerDescripcion.setAttribute("id", "container-descripcion");
    containerDescripcion.setAttribute("class", "col-12  row justify-content-center");
    const titulo = document.createElement("a");
    titulo.href = "#";
    titulo.addEventListener("click", (e) => {
        e.preventDefault()
        $("#descripcion").slideToggle("fast");
        scrollTo()

    })
    titulo.textContent = "Descripción";
    titulo.setAttribute("id", "titulo-descripcion")
    titulo.setAttribute("class", "")
    const descripcion = document.createElement("p");
    descripcion.setAttribute("id", "descripcion");
    descripcion.innerHTML = `${data.description}`

    containerDescripcion.appendChild(titulo);
    containerDescripcion.appendChild(descripcion);
    elementos.appendChild(containerDescripcion);
    $("#descripcion").hide();
}

function cargarPlataformas(data) {
    const containerPlataformas = document.createElement("div");
    containerPlataformas.setAttribute("id", "container-plataforma");
    containerPlataformas.setAttribute("class", "col-12  row justify-content-center");
    const titulo = document.createElement("a");
    titulo.href = "#";
    titulo.addEventListener("click", (e) => {
        e.preventDefault()
        $(listaPlataformas).slideToggle("fast");
    })
    titulo.textContent = "Plataformas";
    titulo.setAttribute("id", "titulo-plataforma")
    titulo.setAttribute("class", "col-12 text-center")
    const plataformas = document.createElement("p");
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





const verMas = document.querySelector(".verMas");
verMas.addEventListener("click", (e) => {
    e.preventDefault();
    page += 1;
    $.ajax({
        url: 'https://api.rawg.io/api/games?page_size=3&page=' + page,
        beforeSend: function() {
            $('#loader').show();
        },
        success: function(data, status, xhr) {
            agregarCards(data.results)

        },
        complete: function() {
            $("#loader").hide();
            verMas.scrollIntoView()
        },
        error: function(xhr, status, errorThrown) {
            console.log(xhr)
            console.log(status)
            console.log(errorThrown)
        }

    });




})