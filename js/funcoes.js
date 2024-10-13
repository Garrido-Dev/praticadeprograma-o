function somar(){
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)
    const soma = n1 + n2
    document.getElementById("resultado").innerHTML = "o resultado é: " + soma
}
function subtrair(){
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value
    const subtracao = n1-n2
    resultado.innerHTML = "o resultado é: " + subtracao
}
function multi(){
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value
    const multiplicar = n1*n2
    resultado.innerHTML = "o resultado é: " + multiplicar
}
function dividir(){
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value
    const divisao = n1/n2
    resultado.innerHTML = "o resultado é: " + divisao
}

function chamarfuncao(){
    document.getElementById("apertar").innerHTML = "voce ganhou 1 milhão"
}

function calcular(n1, n2){
    const resultado = n1 + n2
    console.log(resultado)
}
calcular(50,30)
calcular(90,10)
calcular(10,100)
