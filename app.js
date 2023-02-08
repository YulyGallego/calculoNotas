const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const notValid = document.getElementById("notValid")
const total = document.getElementById("total");
const result = document.getElementById("result");
const recover = document.getElementById("recover");
const forWin = document.getElementById("forWin");
const honors = document.getElementById("honors");
const buttonTotal = document.getElementById("buttonTotal");
const buttonLack = document.getElementById("buttonLack");


buttonTotal.addEventListener("click", operation);
buttonLack.addEventListener("click", operation2);


let additionRe = qualification1 + qualification2;
let totalRe = (2.1 - additionRe);
let totalRecover = (totalRe / 0.40);

let additionFo = qualification1 + qualification2;
let totalFo = (3.5 - additionFo);
let totalForWin  = (totalFo / 0.40);

let additionHo = qualification1 + qualification2;
let totalHo = (4.6 - additionHo);
let totalHonors = (totalHo /0.40);


function operation(){
  let qualification1 = (note1.value * 0.30);
  let qualification2 = (note2.value *0.30);
  let qualification3 = (note3.value *0.40);

  let addition = qualification1 + qualification2 + qualification3;

  total.textContent = addition;

  if (addition > 5.0){
    result.textContent = "las notas ingresadas no son validas"
    recover.textContent = " ";
    forWin.textContent = " ";
    honors.textContent = " ";
  }else if(addition >= 4.6 && addition <= 5.0){
    result.textContent = "aprobo con honores"
    recover.textContent = " ";
    forWin.textContent = " ";
    honors.textContent = " ";
  }else if (addition >= 3.5 && addition <= 4.5){
    result.textContent = "aprobo"
    recover.textContent = " ";
    forWin.textContent = " ";
    honors.textContent = " ";
  }else if (addition >= 2.1 && addition <= 3.4){
    result.textContent = "reprobo pero puede recuperar"
    recover.textContent = " ";
    forWin.textContent = " ";
    honors.textContent = " ";
  }else if (addition <= 2){
    result.textContent = "reprobo la materia"
    recover.textContent = " ";
    forWin.textContent = " ";
    honors.textContent = " ";
  }
  }

  function operation2(){

  let qualification1 = (note1.value * 0.30);
  let qualification2 = (note2.value *0.30);
  let qualification3 = (note3.value *0.40);

  let addition = qualification1 + qualification2 + qualification3;

  total.textContent = addition;

  

let additionRe = qualification1 + qualification2;
let totalRe = (2.1 - additionRe);
let totalRecover = (totalRe / 0.40);

let additionFo = qualification1 + qualification2;
let totalFo = (3.5 - additionFo);
let totalForWin  = (totalFo / 0.40);

let additionHo = qualification1 + qualification2;
let totalHo = (4.6 - additionHo);
let totalHonors = (totalHo /0.40);

 
  if (addition > 3){
    result.textContent = "las notas ingresadas no son validas"
    recover.textContent = " ";
    forWin.textContent = " ";
    honors.textContent = " ";
  }else if (addition >= 2.1 && addition <= 3.4){
    recover.textContent = " ";
    forWin.textContent = ("para ganar la materia necesita una nota de: " + totalForWin.toFixed(1));
    honors.textContent = ("para ganar con honores la materia necesita una nota de: " + totalHonors.toFixed(1));
  }else if (addition <= 2){
    recover.textContent = ("para recuperar necesita una nota de: " + totalRecover.toFixed(1));
    forWin.textContent = ("para ganar la materia necesita una nota de: " + totalForWin.toFixed(1));
    honors.textContent = ("para ganar con honores la materia necesita una nota de: " + totalHonors.toFixed(1));
  }
  
  }




  






