//Llenado de variables con datos del html
let a = document.getElementById('numero1')
let b = document.getElementById('numero2')
let c = document.getElementById('numero3')
let d = document.getElementById('numero4')
let botoncito = document.getElementById('boton')
let numMayor = document.getElementById('numeroMayor')
let numMenor = document.getElementById('numeroMenor')


var lista_numeros =[a,b,c,d]


botoncito.addEventListener("click", () => {

    lista_numeros.sort(function(a, b){return a - b});    
    numMayor.innerHTML = 'El numero mayor es:' + lista_numeros[3]
    numMenor.innerHTML = 'El numero menor es:' + lista_numeros[0]
})
