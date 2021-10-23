/*
mirar la forma mas rapida de hacerla 
debe presionar los botones y coloca los numeros solo si las letras estan escritos

SI PRESIONA LAS LETRAS DEBE COLOCARLOS EN ORDEN
si escribe una h q es 8 deben decir q le faltan las letras menores
sino debe quedar
abcdefghij
1234567890
EL EJERCICIO NO ME DEBE DEJAR PONER UNO Q NO SIGA


//cn clear number
y cl clear letras


cada boton debe tener id y evento
*/
//Campos de letras y numeros
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");
//Botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");

//funciones fna1 es para letras y numeros
const fnA1 = () => {
  console.log(letters);
  if (letters.innerHTML == "") {
    letters.innerHTML = "A";
  }else  if(letters.innerHTML == "ABC"){
    numbers.innerHTML = "1"; 
  
  }
};

const fnB2 = () => {
  if (letters.innerHTML == "A") {
    letters.innerHTML += "B";
  } else if(numbers.innerHTML == "" && letters.innerHTML == "" ) {
    alert("faltan letras");
  }


  if(numbers.innerHTML == "1" ){
    numbers.innerHTML +="2"
  }else if(letters.innerHTML == "ABC"){
    alert("faltan numeros");
  }
  // letters.innerHTML = letters.innerHTML +"B";e s ihualñ a lo d eabajo
  // letters.innerHTML += "B";
};
const fnC3 = () => {
  console.log(letters.innerHTML);
    if (letters.innerHTML == "AB") {
        letters.innerHTML += "C";
      } else if( numbers.innerHTML == "" && ( letters.innerHTML == ""    ||     letters.innerHTML == "A" || letters.innerHTML =="AB") ) {
        alert("faltan letras");
      }

      if(numbers.innerHTML =="12"){
        numbers.innerHTML +="3";
      }else if(letters.innerHTML == "ABC"){
        alert("faltan numeros");
      }

};


const fnD4 = () => {};
const fnE5 = () => {};
const fnF6 = () => {};
const fnG7 = () => {};
const fnH8 = () => {};
const fnI9 = () => {};
const fnCL = () => {
  letters.innerHTML ="";

};
const fnJ0 = () => {};
const fnCN = () => {
  numbers.innerHTML="";

};

//eventos
a1.onclick = () => {
  fnA1();
};

b2.onclick = () => {
  fnB2();
};

c3.onclick = () => {
  fnC3();
};

//borrar letras
cl.onclick = () => {
  fnCL();
}

j0.onclick= () => {
  fnJ0();
};

//borrar numeros
cn.onclick = () => {
  fnCN();
}