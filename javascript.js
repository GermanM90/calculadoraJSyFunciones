/*    function sumar(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = parseInt(numero1) + parseInt(numero2);
    document.write(resultado) 

    }
*/

// function restarNumero(){
//     let numero3 = parseInt(prompt("Ingresa el número 1: "));
//     let numero4 = parseInt(prompt("Ingresa el número 2: "));
//     let resta = (numero3-numero4);
//     alert( " el resultado de la resta de: " +numero3+ "   -   " +numero4+ "  es:  " +resta)
// }
// restarNumero();


document.getElementById("botonSumar").addEventListener("click",function(){
    var numero1 = document.getElementById("numero1").value 
    var numero2 = document.getElementById("numero2").value 
    var resultado = parseInt(numero1) + parseInt(numero2)
    document.getElementById("resultadoTotal").innerText = 'Resultado: ' + resultado;
    console.log(resultado)
    
})
document.getElementById("botonRestar").addEventListener("click",function(){
    var numero1 = document.getElementById("numero1").value 
    var numero2 = document.getElementById("numero2").value 
    var resultado = parseInt(numero1) - parseInt(numero2)
    document.getElementById("resultadoTotal").innerText = 'Resultado: ' + resultado;
    console.log(resultado)
})
document.getElementById("botonDividir").addEventListener("click",function(){
    var numero1 = document.getElementById("numero1").value 
    var numero2 = document.getElementById("numero2").value 
    var resultado = parseInt(numero1) / parseInt(numero2)
    document.getElementById("resultadoTotal").innerText = 'Resultado: ' + resultado;
    console.log(resultado)
})
document.getElementById("botonMultiplicar").addEventListener("click",function(){
    var numero1 = document.getElementById("numero1").value 
    var numero2 = document.getElementById("numero2").value 
    var resultado = parseInt(numero1) * parseInt(numero2)
    document.getElementById("resultadoTotal").innerText = 'Resultado: ' + resultado;
    console.log(resultado)
    
})

document.getElementById("botonClick").addEventListener("click",function(){
    alert("!Diste click en el boton Click!")
})

document.getElementById("mostrarTexto").addEventListener("click",function(){
    var texto = document.getElementById("texto")
    document.getElementById("textoEscrito").innerText = 'Texto Escrito: ' + texto.value;


})