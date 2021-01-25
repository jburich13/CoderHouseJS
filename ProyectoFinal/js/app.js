class Curso {
    constructor(titulo, img, descripcion, precio) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
    }
}





let misCursos = [
    new Curso("Programación", "prg.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 2000),
    new Curso("Testing", "test.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 4000),
    new Curso("Diseño UX", "ux.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 5000),
    new Curso("Machine Learning", "ux.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 3000),
    new Curso("Test Automation", "ux.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 9000),
    new Curso("Scrum", "ux.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 1000),
    new Curso("Inteligencia Artificial", "ux.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 11000)
];








let agregarCards = () => {

    //Traigo el container
    const container = document.getElementById("misCursos");
    misCursos.forEach(card => {

        //Creo el div de la tarjeta
        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card");
        divCard.setAttribute("id", "card");
        container.appendChild(divCard);

        //Agrego la imagen
        const imgCard = document.createElement("img");
        imgCard.setAttribute("class", "card-img-top")
        imgCard.src = `src\\${card.img}`;
        divCard.appendChild(imgCard);



        //Agrego el body
        const divBody = document.createElement("div");
        divBody.setAttribute("class", "card-body");
        divCard.appendChild(divBody);

        //Agrego el titulo
        const tituloCard = document.createElement("h5");
        tituloCard.setAttribute("class", "card-title");
        tituloCard.textContent = `${card.titulo}`;
        divBody.appendChild(tituloCard);


        //Agrego la descripcion
        const descripcionCard = document.createElement("p");
        descripcionCard.setAttribute("class", "card-title");
        descripcionCard.setAttribute("id", "text");
        descripcionCard.textContent = `${card.descripcion}`;
        divBody.appendChild(descripcionCard);



        //Label de precio
        const labelPrecio = document.createElement("h5");
        labelPrecio.textContent = "Precio:";
        divBody.appendChild(labelPrecio);
        //Agrego el precio
        const precioCard = document.createElement("p");
        precioCard.setAttribute("class", "text-center");
        precioCard.setAttribute("id", "precio");
        precioCard.textContent = `$${card.precio}`;
        divBody.appendChild(precioCard);



        //Agrego la linea de los botones
        const rowBotones = document.createElement("div");
        rowBotones.setAttribute("class", "row justify-content-between");
        divBody.appendChild(rowBotones);




        //Agrego los botones
        //Boton 2
        const botonCard2 = document.createElement("a");
        botonCard2.className = `btn col-5 curso${card.id} rounded-pill`;
        botonCard2.id = `boton`;
        botonCard2.addEventListener("click", eliminarDelCarrito);
        botonCard2.textContent = "Eliminar del carrito";
        rowBotones.appendChild(botonCard2);

        //Boton 1
        const botonCard1 = document.createElement("a");
        botonCard1.className = `btn col-5 añadir rounded-pill`;
        botonCard1.id = `boton`;
        botonCard1.textContent = "Añadir al carrito";
        botonCard1.addEventListener("click", agregarAlCarrito);
        rowBotones.appendChild(botonCard1);
    });
}

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












agregarCards();