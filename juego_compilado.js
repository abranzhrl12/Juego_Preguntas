// Declaración de variables
let resultado = document.getElementById("calcular");
let respuestas = ['a', 'b', 'c', 'd', 'a']; // Respuestas correctas
let salida = document.getElementById("resultado");
// Evento click del botón
if (resultado) {
    resultado.addEventListener('click', function () {
        let _a;
        // Seleccionar todos los radios marcados con la clase "radios"
        let radios = Array.prototype.slice.call(document.querySelectorAll('.radios:checked'));
        // Verificar si se han seleccionado todos los radios
        console.log(radios)
        if (radios.length == 5) {
            let contador = 0;
            let correcto = "";
            for (let index = 0; index < respuestas.length; index++) {
                let seleccion = ((_a = radios[index]) === null || _a === void 0 ? void 0 : _a.value) || ''; // Verificación segura del valor
                // Verificar si la respuesta seleccionada es correcta
                if (respuestas[index] === seleccion) {
                    contador++;
                    correcto += "Pregunta ".concat(index + 1, " opci\u00F3n Elegida ").concat(seleccion, " Correcta: ").concat(respuestas[index], " \n");
                }
                else {
                    correcto += "Pregunta ".concat(index + 1, " opci\u00F3n Elegida ").concat(seleccion, " Incorrecta: ").concat(respuestas[index], " \n");
                }
            }
            // Mostrar el resultado en el elemento de salida
            if (salida) {
                salida.innerText = correcto;
            }
        }
        else {
            // Si no se han seleccionado todos los radios, mostrar mensaje de error
            if (salida) {
                salida.innerText = "Seleccione todos los campos";
            }
        }
    });
}
