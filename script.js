let aluno = prompt('digite o nome do aluno')

let presenca = parseInt(prompt("Digite sua Presença"))

if (aluno.length <5 || presenca <=0 || presenca >10 ) 
{ alert ("nome ou presença invalido")


}else { 

let materia0 = prompt("Digite sua Matéria")
let nota0 = parseFloat(prompt( `Digita sua Nota de ${materia0}`))
if (nota0 <=0 || nota0 >10) alert ("Nota Invalida")

let materia1 = prompt("Digite sua Matéria")
let nota1 = parseFloat(prompt( `Digita sua Nota de ${materia1}`))
if (nota1 <=0 || nota1 >10) alert ("Nota Invalida")

let materia2 = prompt("Digite sua Matéria")
let nota2 = parseFloat(prompt( `Digita sua Nota de ${materia2}`))
if (nota2 <=0 || nota2 >10) alert ("Nota Invalida")

let materia3 = prompt("Digite sua Matéria")
let nota3 = parseFloat(prompt( `Digita sua Nota de ${materia3}`))
if (nota3 <=0 || nota3 >10) alert ("Nota Invalida")

let materia4 = prompt("Digite sua Matéria")
let nota4 = parseFloat(prompt( `Digita sua Nota de ${materia4}`))
if (nota4 <=0 || nota4 >10) alert ("Nota Invalida")

let materia5 = prompt("Digite sua Matéria")
let nota5 = parseFloat(prompt( `Digita sua Nota de ${materia5}`))
if (nota5 <=0 || nota5 >10) alert ("Nota Invalida")

let materia6 = prompt("Digite sua Matéria")
let nota6 = parseFloat(prompt( `Digita sua Nota de ${materia6}`))
if (nota6 <=0 || nota6 >10) alert ("Nota Invalida")

let materia7 = prompt("Digite sua Matéria")
let nota7 = parseFloat(prompt( `Digita sua Nota de ${materia7}`))
if (nota7 <=0 || nota7 >10) alert ("Nota Invalida")

let materia8 = prompt("Digite sua Matéria")
let nota8 = parseFloat(prompt( `Digita sua Nota de ${materia8}`))
if (nota8 <=0 || nota8 >10) alert ("Nota Invalida")

let materia9 = prompt("Digite sua Matéria")
let nota9 = parseFloat(prompt( `Digita sua Nota de ${materia9}`))
if (nota9 <=0 || nota9 >10) alert ("Nota Invalida")


let mediaFinal = ( nota0 + nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 ) / 10


if (mediaFinal >= 8 && presenca >= 6) {

    alert
        (`O Aluno Foi Aprovado com uma média de  ${mediaFinal} e uma presença de ${presenca}`)

} else {
    
    alert
     (`O Aluno Foi Reprovado com uma média de ${mediaFinal} e uma presença de ${presenca}`)

    }}




    




