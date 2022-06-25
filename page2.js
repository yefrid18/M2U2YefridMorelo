
let a = document.getElementById("numero1")
let b = document.getElementById("numero2")
let c = document.getElementById("numero3")
let d = document.getElementById("numero4")
let botoncito = document.getElementById('boton')
let numMayor = document.getElementById('numeroMayor')
let numMenor = document.getElementById('numeroMenor')


let lista_numeros = []; 


botoncito.addEventListener("click", () => {

    if ((a.value == b.value) || (a.value == c.value) || (a.value == d.value) || (b.value == c.value) || (b.value == d.value) || (c.value == d.value)){
        alert("No se pueden digitar numeros repetidos, favor revisar")    
    
    }else{  

    lista_numeros=[parseInt(a.value),parseInt(b.value),parseInt(c.value),parseInt(d.value)]    
    lista_numeros.sort(function(a, b){return a - b});    
    numMayor.innerHTML = 'El numero mayor es:' + lista_numeros[3]
    numMenor.innerHTML = 'El numero menor es:' + lista_numeros[0]

    }
       
})