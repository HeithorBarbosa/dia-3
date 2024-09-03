let name = prompt("qual é o seu nome ?");
let date = parseInt(prompt("quantos anos você tem ?"));
let weight = parseInt(prompt("quanto você pesa ?"));
let height = parseFloat(
  prompt("qual é a sua altura ? (use ponto no lugar da vírgula)")
);
let IMC = 0;

let bornDate = 2023 - date;
IMC = weight / (height * height);

document.write(
  "Olá ",
  name,
  ", você nasceu em ",
  bornDate,
  ", você pesa ",
  weight,
  ", sua altura é ",
  height,
  " e seu IMC é ",
  IMC
);
