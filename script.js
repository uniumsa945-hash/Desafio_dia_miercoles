
    const numeroInput = document.getElementById("numero");
    const boton = document.getElementById("btnVerificar");
    const resultado = document.getElementById("resultado");

    boton.addEventListener("click", function(){

      let numero = parseInt(numeroInput.value);

      if(isNaN(numero)){
        resultado.innerHTML = "⚠️ Ingresa un número válido";
        resultado.className = "";
        return;
      }

      let esPrimo = true;

      if(numero <= 1){
        esPrimo = false;
      }else{
        for(let i = 2; i <= Math.sqrt(numero); i++){
          if(numero % i === 0){
            esPrimo = false;
            break;
          }
        }
      }

      if(esPrimo){
        resultado.innerHTML =
          "✅ El número " + numero +
          " ES PRIMO y puede servir como clave básica de seguridad.";

        resultado.className = "primo";

      }else{
        resultado.innerHTML =
          "❌ El número " + numero +
          " NO ES PRIMO y no es recomendable como clave básica.";

        resultado.className = "noPrimo";
      }

    });