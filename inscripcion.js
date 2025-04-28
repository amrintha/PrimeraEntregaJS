const estudiantes2025 = [
    { nivel: 'Principiante', lista: [], precio: 100 },
    { nivel: 'Intermedio', lista: [], precio: 150 },
    { nivel: 'Avanzado', lista: [], precio: 200 }
]

let nombreEstudiante = "";
let nivel = "";

function buscarPrecioPorNombre(nombreBuscado) {
    for (let nivel of estudiantes2025) {
        let precioNivel = nivel.lista.find(estudiante => estudiante.nombre === nombreBuscado);
        if (precioNivel) {
            console.log(nivel.precio);
            return nivel.precio;
        }
    }
    alert("Tu nombre no se encuentra en la lista de estudiantes inscritos.");
    return null;
}

function registro() {

    let seguirResgistrando = confirm("Bienvenido a la inscripción para la escuela de fútbol CoderHouse. ¿Deseas continuar con la inscripción?");

    while (seguirResgistrando) {
        nombreEstudiante = prompt("¿Cuál es tu nombre?");
        if (nombreEstudiante.length <= 2) {
            alert("Nombre no válido");
            seguirResgistrando = false;
        }
        else {
            alert("Hola " + nombreEstudiante.toLocaleUpperCase() + "!");
            console.log(nombreEstudiante);
        }

        let edadEstudiante = Number(prompt("Ingresa tu edad. Recuerda que aceptamos niños de 7 a 17 años."));

        if (edadEstudiante != "" && edadEstudiante < 7 || edadEstudiante > 17) {
            alert("No estás dentro del rango de edad para los niveles ofrecidos.");
            seguirResgistrando = false;
            console.log("Edad no válida para inscripción.");
        }
        else if (edadEstudiante == "") {
            alert("Formato de edad no válido");
            console.log("Formato incorrecto.");
            seguirResgistrando = false;
        }
        else {
            let aniosExperiencia = Number(prompt("Cuántos años llevas jugando fútbol?"));
            if (aniosExperiencia <= 2) {
                nivel = "Principiante";
                console.log(nivel);
            }
            else if (aniosExperiencia > 2 && aniosExperiencia <= 5) {
                nivel = "Intermedio";
                console.log(nivel);
            }
            else {
                nivel = "Avanzado";
                console.log(nivel);
            }

            let nivelSeleccionado = estudiantes2025.find(estudiante => estudiante.nivel === nivel);

            if (nivelSeleccionado.lista.length < 3) {
                nivelSeleccionado.lista.push({ nombre: nombreEstudiante.toLocaleUpperCase(), edad: edadEstudiante, antigüedad: aniosExperiencia });
                console.log(estudiantes2025);
                alert(`Serás parte del nivel: ${nivel}`);
            }
            else {
                alert(`Lo sentimos, el nivel ${nivel} está lleno.`);
                console.log("Nivel lleno");
            }

            seguirResgistrando = confirm("¿Desea registrar otro estudiante?");

        }
    }

    let consultarMensualidad = confirm("Desea consultar su mensualidad?");
    while (consultarMensualidad) {

        let nombreBuscado = prompt("¿Cuál es tu nombre?");
        let mensualidad = buscarPrecioPorNombre(nombreBuscado.toLocaleUpperCase());

        if (mensualidad !== null) {
            let estudianteAntiguo = prompt("Eres un estudiante antiguo de la escuela? (SI/NO)");
            let aPagar = 0;
            const descuentoAntiguedad = 0.20;

            switch (estudianteAntiguo.toLocaleUpperCase()) {
                case 'SI':
                    aPagar = mensualidad * (1 - descuentoAntiguedad);
                    console.log(`Valor a pagar ${aPagar}`);
                    break;
                case 'NO':
                    aPagar = mensualidad;
                    console.log(`Valor a pagar ${aPagar}`);
                    break;
            }

            alert("Tu mensualidad es de: $" + aPagar);
            consultarMensualidad = false;

        }
        consultarMensualidad = confirm("¿Desea consultar otra mensualidad?");
    }
    alert("Gracias por usar el sistema de inscripciones. Recuerda que abrimos inscripción cada semestre. Bye!");

}

window.onload= function(){
registro();
};

