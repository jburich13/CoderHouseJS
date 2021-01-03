class Curso {
    constructor(titulo, img, descripcion, precio) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;

    }
}





let misCursos = [
    new Curso("Programación", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 2000),
    new Curso("Testing", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 4000),
    new Curso("Diseño UX", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?", 5000)
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
        botonCard1.className = "btn col-5 ";
        botonCard1.id = "boton";
        botonCard1.textContent = "Añadir al carrito";
        botonCard1.addEventListener("click", agregarAlCarrito);
        rowBotones.appendChild(botonCard1);

        //Boton 2
        const botonCard2 = document.createElement("a");
        botonCard2.href = "#";
        botonCard2.className = "btn col-5";
        botonCard2.id = "boton";
        botonCard2.textContent = "Eliminar del carrito";
        rowBotones.appendChild(botonCard2);
    });
}


const imgCarro = document.querySelector(".imgCarrito");
imgCarro.addEventListener("click", function() {})


let click = 0;

function agregarAlCarrito() {
    const num = document.querySelector(".num");
    console.log(click);
    click += 1;
    num.textContent = parseInt(click);
}

agregarCards();