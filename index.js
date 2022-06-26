
let estudiante = document.getElementById("estudiante")
let cantMaterias = document.getElementById("cantMaterias")
let botoncito = document.getElementById("boton")
let ValorPagar = document.getElementById("Valor_Pagar")

botoncito.addEventListener("click", () => {

    let valorMaterias = 0
    const papeleria = 20000
    const carnet = 8000
    const pagoxdescuento = 0.80

    for(let i=1;i<=cantMaterias.value;i++) {
        let valorMateria = prompt("Digite valor materia "+(i))
        valorMateria = parseInt(valorMateria)
        valorMaterias += valorMateria        
    } 
    
    ValorPagar.innerHTML = "El Valor Total a pagar es " + (valorMaterias * pagoxdescuento + papeleria + carnet)

})