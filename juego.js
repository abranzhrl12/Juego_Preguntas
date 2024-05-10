const resultado = document.getElementById("calcular");
const respuestas = ["a", "b", "c", "d", "a"];
const salida = document.getElementById("resultado");

resultado.addEventListener("click", () => {
  const radios = Array.from(document.querySelectorAll(".radios:checked"));
  console.log(radios);
  if (radios.length == 5) {
    let contador = 0;
    let correcto = "";

    for (index = 0; index < respuestas.length; index++) {
      let selecion = radios[index].value;

      if (respuestas[index] == selecion) {
        contador += 1;
        correcto += `Pregunta ${
          index + 1
        } opcion Elegida ${selecion} Correcta: ${respuestas[index]} \n`;
      } else {
        correcto += `Pregunta ${
          index + 1
        } opcion Elegida ${selecion} Icorrecta: ${respuestas[index]} \n`;
      }
      salida.innerText = correcto;
    }
  } else {
    salida.innerText = "Selecione todos los Campos Broo";
  }
});
