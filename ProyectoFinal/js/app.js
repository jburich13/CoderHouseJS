let usuario = Number(prompt("Ingrese la cantidad de cursos que desea: "));



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
        let divCard = document.createElement("div");
        divCard.setAttribute("class", "card");
        divCard.setAttribute("id", "card");
        //Agrego la imagen
        let imgCard = document.createElement("img");
        imgCard.src = `src\\${card.img}`;
        divCard.appendChild(imgCard);
        container.appendChild(divCard);




        // document.write(" <div class='card' id='card'>")
        // document.write(`<img src= class='card-img-top' alt='...'>`)
        document.write(" <div class='card-body'>")
        document.write(`<h5 class='card-title'>${card.titulo}</h5>`)
        document.write(`<p class='card-text' id='text'>${card.descripcion}</p>`)
        document.write("<div class='row'>")
        document.write("<a href='#' class='btn col-5' id='boton'>Añadir al carrito</a>")
        document.write("<a href='#' class='btn col-5' id='boton'>Eliminar del carrito</a>")
        document.write("</div>")
        document.write("</div>")
        document.write("</div>")
    });
    alert(`Se agregaron ${usuario} tarjetas a la seccion Mis Cursos`)
}

agregarCards();