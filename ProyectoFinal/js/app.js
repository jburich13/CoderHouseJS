class Curso {
    constructor(titulo, img, descripcion, precio, id) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
        this.id = id;

    }
}





let misCursos = [
    new Curso("Programación", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 2000, 1),
    new Curso("Testing", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 4000, 2),
    new Curso("Diseño UX", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 5000, 3)
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
        //Boton 1
        const botonCard1 = document.createElement("a");
        botonCard1.className = `btn col-5 curso${card.id}`;
        botonCard1.id = `boton`;;
        botonCard1.textContent = "Añadir al carrito";
        botonCard1.addEventListener("click", agregarAlCarrito);
        rowBotones.appendChild(botonCard1);

        //Boton 2
        const botonCard2 = document.createElement("a");
        botonCard2.className = `btn col-5 curso${card.id}`;
        botonCard2.id = `boton`;
        botonCard2.addEventListener("click", eliminarDelCarrito);
        botonCard2.textContent = "Eliminar del carrito";
        rowBotones.appendChild(botonCard2);
    });
}

//Listener para el carrito, la idea es que se muestre un modal con los cursos agregados,
//pero todavia falta el desarrollo.
const imgCarro = document.querySelector(".imgCarrito");
imgCarro.addEventListener("click", function() {})


let click = 0;
//Funcion para poder agregar al carrito los diferentes cursos.
function agregarAlCarrito(event) {
    //Sumamos al icon del carrito
    const num = document.querySelector(".num");
    click += 1;
    num.textContent = parseInt(click);


    //Captamos el boton
    const boton = event.target;

    //Luego buscamos el elementos mas cercano que tenga como clase 'card', con la funcion closest
    const card = boton.closest(".card");



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
    rowModal.setAttribute("class", "row align-items-center itemsCarrito");




    //Agregamos el titulo al modal
    const tituloCardModal = document.createElement("p");
    tituloCardModal.setAttribute("class", "tituloModal col-6");
    tituloCardModal.textContent = cursoTitle;
    //Agregamos el precio al modal
    const precioCardModal = document.createElement("p");
    precioCardModal.setAttribute("class", "precioModal col-3");
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

    let precio2 = "$" + String(total);
    //Actualizamos total a pagar
    actualizarPrecioTotal(precio2);


}


function actualizarPrecioTotal(precio) {
    const divModal = document.querySelector(".divModalBody");
    const rowTotal = document.querySelector(".rowTotal");
    const labelTotal = document.querySelector(".labelTotal");
    const totalPagar = document.querySelector(".totalAPagar");



    totalPagar.textContent = precio;

    rowTotal.appendChild(labelTotal);
    rowTotal.appendChild(totalPagar);
    divModal.appendChild(rowTotal);
}

function eliminarDelCarrito() {
    const num = document.querySelector(".num");
    click -= 1;
    if (click < 0) {

        click = 0;
        num.textContent = parseInt(click);
    } else {
        num.textContent = parseInt(click);
    }


}



agregarCards();