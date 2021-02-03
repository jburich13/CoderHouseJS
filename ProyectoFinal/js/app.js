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
                    console.log("🚀 ~ data", data);
                    descripcionJuegos(data);
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

function descripcionJuegos(data) {
    const contBtn = document.createElement("div");
    contBtn.setAttribute("id", "volver");
    const btnVolver = document.createElement("a");
    btnVolver.setAttribute("class", "boton rounded-pill p-4 m-3");
    btnVolver.textContent = "volver"
    const container = document.querySelector("#descripcion-juegos");
    contBtn.appendChild(btnVolver)
    container.appendChild(contBtn);
    btnVolver.addEventListener("click", (e) => {
        e.preventDefault();
        $(".main").remove();
        $(btnVolver).remove();
        $("#misCursos").show();
        $("#verMas").show();
    })


    cargarImgPortada(data);

}


function cargarImgPortada(data) {
    const container = document.querySelector("#descripcion-juegos");
    const main = document.createElement("div");
    const imgPortada = document.createElement("img")
    main.setAttribute("class", "row justify-content-center m-5 main")
    imgPortada.setAttribute("class", "img-portada row justify-content-center")
    imgPortada.setAttribute("src", `${data.background_image}`);
    main.appendChild(imgPortada);
    container.appendChild(main);
    $(".main").fadeIn("slow");
    $("#descripcion-juegos").show();

}





const verMas = document.querySelector(".verMas");
console.log("🚀 ~ verMas", verMas);
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






//Listener para el carrito, la idea es que se muestre un modal con los cursos agregados,
//pero todavia falta el desarrollo.
const imgCarro = document.querySelector(".imgCarrito");
imgCarro.addEventListener("click", function() {})


let click = 0;
let boton;
//Funcion para poder agregar al carrito los diferentes cursos.
function agregarAlCarrito(event) {
    //Sumamos al icon del carrito
    const num = document.querySelector(".num");
    click += 1;
    num.textContent = parseInt(click);


    //Captamos el boton
    boton = event.target;
    //Luego buscamos el elementos mas cercano que tenga como clase 'card', con la funcion closest
    const card = boton.closest(".card");


    $(boton).addClass("disabled");




    //Captamos el titulo
    const cursoTitle = card.querySelector(".card-title").textContent;
    //Captamos el precio
    const cursoPrecio = card.querySelector("#precio").textContent;
    //Captamos la imagen
    const cursoImg = card.querySelector(".card-img-top").src;






    agregarAListaCompras(cursoTitle, cursoPrecio, cursoImg);
}





let total = 0;

function agregarAListaCompras(cursoTitle, cursoPrecio, cursoImg) {

    const modalBody = document.querySelector(".modal-body");
    const divModalBody = document.querySelector(".divModalBody")
    const rowModal = document.createElement("div");
    rowModal.setAttribute("class", "row align-items-center itemsCarrito")
    switch (cursoTitle) {
        case "Programación":
            console.log("no problem")
            rowModal.setAttribute("id", "prog");
            break;
        case "Testing":
            rowModal.setAttribute("id", "test");
            break;
        case "Diseño UX":
            rowModal.setAttribute("id", "ux");
            break;
        case "Machine Learning":
            rowModal.setAttribute("id", "ml");
            break;
        case "Test Automation":
            rowModal.setAttribute("id", "ta");
            break;
        case "Scrum":
            rowModal.setAttribute("id", "scrum");
            break;
        case "Inteligencia Artificial":
            rowModal.setAttribute("id", "ia");
            break;
        default:
            console.log("PROBLEMAS");
    }


    //Agregamos el titulo al modal
    const tituloCardModal = document.createElement("p");
    tituloCardModal.setAttribute("class", "tituloModal col-5");
    tituloCardModal.textContent = cursoTitle;
    //Agregamos el precio al modal
    const precioCardModal = document.createElement("p");
    precioCardModal.setAttribute("class", "precioModal col-2");
    precioCardModal.textContent = cursoPrecio;
    let precio = cursoPrecio.substring(1);
    total += Number(precio);
    //Agregamos la img
    const imgCardModal = document.createElement("img");
    imgCardModal.setAttribute("src", cursoImg);
    imgCardModal.setAttribute("class", "imgModal col-3")
    rowModal.appendChild(imgCardModal);
    rowModal.appendChild(tituloCardModal);
    rowModal.appendChild(precioCardModal);

    divModalBody.appendChild(rowModal);

    modalBody.appendChild(divModalBody);


    //Actualizamos total a pagar
    actualizarPrecioTotal(total);


}


function actualizarPrecioTotal(precio) {
    const precioCurso = document.querySelector("#precio");


    const divModal = document.querySelector(".divModalBody");
    const rowTotal = document.querySelector(".rowTotal");
    const labelTotal = document.querySelector(".labelTotal");
    const totalPagar = document.querySelector(".totalAPagar");



    totalPagar.textContent = "$" + precio;

    rowTotal.appendChild(labelTotal);
    rowTotal.appendChild(totalPagar);
    divModal.appendChild(rowTotal);
}

function eliminarDelCarrito(event) {
    const buttonClicked = event.target;
    const cardClicked = buttonClicked.closest(".card");
    const tituloCard = cardClicked.querySelector(".card-title").textContent;
    console.log($(buttonClicked).next().removeClass("disabled"));



    switch (tituloCard) {
        case "Programación":


            if (document.querySelector("#prog") != null) {
                $("#prog").remove();
                total = total - 2000;
                document.querySelector(".totalAPagar").textContent = "$" + total;
                $("#prog").show();

                restarCarrito();
            }
            break;
        case "Testing":
            if (document.querySelector("#test") != null) {
                $("#test").remove();
                total = total - 4000;
                document.querySelector(".totalAPagar").textContent = "$" + total;
                restarCarrito();
            }
            break;
        case "Diseño UX":
            if (document.querySelector("#ux") != null) {
                $("#ux").remove();
                total = total - 5000;
                document.querySelector(".totalAPagar").textContent = "$" + total;
                $(boton).show();
                restarCarrito();
            }
            break;
        case "Machine Learning":
            if (document.querySelector("#ml") != null) {
                $("#ml").remove();
                total = total - 3000;
                document.querySelector(".totalAPagar").textContent = "$" + total;
                $(boton).show();
                restarCarrito();
            }
            break;
        case "Test Automation":
            if (document.querySelector("#ta") != null) {
                $("#ta").remove();
                total = total - 9000;
                document.querySelector(".totalAPagar").textContent = "$" + total;
                $(boton).show();
                restarCarrito();
            }
            break;
        case "Scrum":
            if (document.querySelector("#scrum") != null) {
                $("#scrum").remove();
                total = total - 1000;
                document.querySelector(".totalAPagar").textContent = "$" + total;
                $(boton).show();
                restarCarrito();
            }
            break;
        case "Inteligencia Artificial":
            if (document.querySelector("#ia") != null) {
                $("#ia").remove();
                total = total - 11000;
                document.querySelector(".totalAPagar").textContent = "$" + total;
                $(boton).show();
                restarCarrito();
            }
            break;
        default:
            console.log("Nada para eliminar")
    }



}



function restarCarrito() {
    const num = document.querySelector(".num");
    click -= 1;
    if (click < 0) {
        click = 0;
        num.textContent = parseInt(click);
    } else {
        num.textContent = parseInt(click);
    }

}

$(".titulo-seccion").click(() => {
    $("#misCursos").slideToggle();
})