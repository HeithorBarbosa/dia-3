let name = prompt("qual é seu nome ?");
let date = prompt("quantos anos vôce tem ?");
let peso = prompt("qual é o seu peso ?");
let altura = prompt("qual é a sua altura ?");

let dataDeNascimento = 2023 - date;
let IMC = peso / (altura * altura);
document.write(
  "Olá ",
  name,
  ", você nasceu em ",
  dataDeNascimento,
  ", possui o peso de ",
  peso,
  ", tem a altura de ",
  altura,
  " e o IMC equivale a: ",
  IMC
);
