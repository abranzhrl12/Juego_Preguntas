// Declaración de variables
const resultado: HTMLElement | null = document.getElementById("calcular");
const respuestas: string[] = ['a', 'b', 'c', 'd', 'a']; // Respuestas correctas

const salida: HTMLElement | null = document.getElementById("resultado");

// Evento click del botón
if (resultado) {
  resultado.addEventListener('click', () => {
    // Seleccionar todos los radios marcados con la clase "radios"
    const radios: HTMLInputElement[] = Array.prototype.slice.call(document.querySelectorAll('.radios:checked'));


    // Verificar si se han seleccionado todos los radios
    if (radios.length === 5) {
      let contador: number = 0;
      let correcto: string = "";

      for (let index = 0; index < respuestas.length; index++) {
        const seleccion: string = radios[index]?.value || ''; // Verificación segura del valor

        // Verificar si la respuesta seleccionada es correcta
        if (respuestas[index] === seleccion) {
          contador++;
          correcto += `Pregunta ${index + 1} opción Elegida ${seleccion} Correcta: ${respuestas[index]} \n`;
        } else {
          correcto += `Pregunta ${index + 1} opción Elegida ${seleccion} Incorrecta: ${respuestas[index]} \n`;
        }
      }

      // Mostrar el resultado en el elemento de salida
      if (salida) {
        salida.innerText = correcto;
      }
    } else {
      // Si no se han seleccionado todos los radios, mostrar mensaje de error
      if (salida) {
        salida.innerText = "Seleccione todos los campos";
      }
    }
  });
}

