let usuario = Number(prompt("Ingrese la cantidad de cursos que desea: "));
let textos = ["Fotografia", "Programacion", "Testing", "Data Science", "JUnit", "Python for dummies", "Java avanzado"]
let agregarCards = (titulos, num) => {
    for (let i = 0; i < usuario; i++) {
        document.write(" <div class='card' id='card'>")
        document.write(" <img src='src\\teacher.jpg' class='card-img-top' alt='...'>")
        document.write(" <div class='card-body'>")
        document.write(`<h5 class='card-title'>${textos[i]}</h5>`)
        document.write("  <p class='card-text' id='text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>")
        document.write("<a href='#' class='btn' id='boton'>Go somewhere</a>")
        document.write("</div>")
        document.write("</div>")
    }

    alert(`Se agregaron ${usuario} tarjetas a la seccion Mis Cursos`)
}

agregarCards(textos, usuario);