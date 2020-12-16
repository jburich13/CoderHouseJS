class Curso {
    constructor(titulo, img, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
    }
}





let misCursos = [
    new Curso("Programación", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?"),
    new Curso("Testing", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?"),
    new Curso("Diseño UX", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?")
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


        //Agrego la linea de los botones
        const rowBotones = document.createElement("div");
        rowBotones.setAttribute("class", "row");
        divBody.appendChild(rowBotones);


        //Agrego los botones
        //Boton 1
        const botonCard1 = document.createElement("a");
        botonCard1.href = "#";
        botonCard1.className = "btn col-5";
        botonCard1.id = "boton";
        botonCard1.textContent = "Añadir al carrito";
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

agregarCards();