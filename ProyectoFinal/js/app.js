let usuario = Number(prompt("Ingrese la cantidad de cursos que desea: "));

class Curso {
    constructor(titulo, img, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
    }
}
let prog = new Curso("Programación", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?")
let testing = new Curso("Testing", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?")
let diseñoUX = new Curso("Diseño UX", "teacher.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat voluptatem odit doloremque porro similique?")
let misCursos = [prog, testing, diseñoUX];
let agregarCards = () => {
    misCursos.forEach(card => {
        document.write(" <div class='card' id='card'>")
        document.write(`<img src='src\\${card.img}' class='card-img-top' alt='...'>`)
        document.write(" <div class='card-body'>")
        document.write(`<h5 class='card-title'>${card.titulo}</h5>`)
        document.write(`<p class='card-text' id='text'>${card.descripcion}</p>`)
        document.write("<a href='#' class='btn' id='boton'>Go somewhere</a>")
        document.write("</div>")
        document.write("</div>")
    });
    alert(`Se agregaron ${usuario} tarjetas a la seccion Mis Cursos`)
}

agregarCards();