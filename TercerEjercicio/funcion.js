let pares = () => {
    const diasLista = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    for (let i = 0; i < diasLista.length; i++) {
        if (i == 6) {
            alert(`Hoy es ${diasLista[i]}`);
        }
        if (i % 2 == 0) {
            console.log(`El dia ${diasLista[i]} es par`);
        }
    }
}
pares();