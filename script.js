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
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    numbers.innerHTML = "1";
  }
};

const fnB2 = () => {
  if (letters.innerHTML == "A") {
    letters.innerHTML += "B";
  } else if (numbers.innerHTML == "" && letters.innerHTML == "") {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "1") {
    numbers.innerHTML += "2";
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    alert("faltan numeros");
  }
  // letters.innerHTML = letters.innerHTML +"B";e s ihualñ a lo d eabajo
  // letters.innerHTML += "B";
};
const fnC3 = () => {
  console.log(letters.innerHTML);
  if (letters.innerHTML == "AB") {
    letters.innerHTML += "C";
  } else if (
    numbers.innerHTML == "" &&
    (letters.innerHTML == "" ||
      letters.innerHTML == "A" ||
      letters.innerHTML == "AB")
  ) {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "12") {
    numbers.innerHTML += "3";
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    alert("faltan numeros");
  }
};

const fnD4 = () => {
  console.log(letters.innerHTML);
  if (letters.innerHTML == "ABC") {
    letters.innerHTML += "D";
  } else if (
    numbers.innerHTML == "" &&
    (letters.innerHTML == "" ||
      letters.innerHTML == "A" ||
      letters.innerHTML == "AB" ||
      letters.innerHTML == "ABC")
  ) {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "123") {
    numbers.innerHTML += "4";
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    alert("faltan numeros");
  }
};

const fnE5 = () => {
  console.log(letters.innerHTML);
  if (letters.innerHTML == "ABCD") {
    letters.innerHTML += "E";
  } else if (
    numbers.innerHTML == "" &&
    (letters.innerHTML == "" ||
      letters.innerHTML == "A" ||
      letters.innerHTML == "AB" ||
      letters.innerHTML == "ABC" ||
      letters.innerHTML == "ABCD")
  ) {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "1234") {
    numbers.innerHTML += "5";
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    alert("faltan numeros");
  }
};
const fnF6 = () => {
  console.log(letters.innerHTML);
  if (letters.innerHTML == "ABCDE") {
    letters.innerHTML += "F";
  } else if (
    numbers.innerHTML == "" &&
    (letters.innerHTML == "" ||
      letters.innerHTML == "A" ||
      letters.innerHTML == "AB" ||
      letters.innerHTML == "ABC" ||
      letters.innerHTML == "ABCD" ||
      letters.innerHTML == "ABCDE")
  ) {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "12345") {
    numbers.innerHTML += "6";
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    alert("faltan numeros");
  }
};
const fnG7 = () => {
  console.log(letters.innerHTML);
  if (letters.innerHTML == "ABCDEF") {
    letters.innerHTML += "G";
  } else if (
    numbers.innerHTML == "" &&
    (letters.innerHTML == "" ||
      letters.innerHTML == "A" ||
      letters.innerHTML == "AB" ||
      letters.innerHTML == "ABC" ||
      letters.innerHTML == "ABCD" ||
      letters.innerHTML == "ABCDE" ||
      letters.innerHTML == "ABCDEF")
  ) {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "123456") {
    numbers.innerHTML += "7";
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    alert("faltan numeros");
  }
};
const fnH8 = () => {
  console.log(letters.innerHTML);
  if (letters.innerHTML == "ABCDEFG") {
    letters.innerHTML += "H";
  } else if (
    numbers.innerHTML == "" &&
    (letters.innerHTML == "" ||
      letters.innerHTML == "A" ||
      letters.innerHTML == "AB" ||
      letters.innerHTML == "ABC" ||
      letters.innerHTML == "ABCD" ||
      letters.innerHTML == "ABCDE" ||
      letters.innerHTML == "ABCDEF" ||
      letters.innerHTML == "ABCDEFG")
  ) {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "1234567") {
    numbers.innerHTML += "8";
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    alert("faltan numeros");
  }
};
const fnI9 = () => {
  console.log(letters.innerHTML);
  if (letters.innerHTML == "ABCDEFGH") {
    letters.innerHTML += "I";
  } else if (
    numbers.innerHTML == "" &&
    (letters.innerHTML == "" ||
      letters.innerHTML == "A" ||
      letters.innerHTML == "AB" ||
      letters.innerHTML == "ABC" ||
      letters.innerHTML == "ABCD" ||
      letters.innerHTML == "ABCDE" ||
      letters.innerHTML == "ABCDEF" ||
      letters.innerHTML == "ABCDEFG" ||
      letters.innerHTML == "ABCDEFGH")
  ) {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "12345678") {
    numbers.innerHTML += "9";
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    alert("faltan numeros");
  }
};
const fnJ0 = () => {
  console.log(letters.innerHTML);
  if (letters.innerHTML == "ABCDEFGHI") {
    letters.innerHTML += "J";
  } else if (
    numbers.innerHTML == "" &&
    (letters.innerHTML == "" ||
      letters.innerHTML == "A" ||
      letters.innerHTML == "AB" ||
      letters.innerHTML == "ABC" ||
      letters.innerHTML == "ABCD" ||
      letters.innerHTML == "ABCDE" ||
      letters.innerHTML == "ABCDEF" ||
      letters.innerHTML == "ABCDEFG" ||
      letters.innerHTML == "ABCDEFGH" ||
      letters.innerHTML == "ABCDEFGHI")
  ) {
    alert("faltan letras");
  }

  if (numbers.innerHTML == "123456789") {
    numbers.innerHTML += "0";
  } else if (letters.innerHTML == "ABCDEFGHIJ") {
    alert("faltan numeros");
  }
};
const fnCL = () => {
  letters.innerHTML = "";
};
const fnCN = () => {
  numbers.innerHTML = "";
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

d4.onclick = () => {
  fnD4();
};

e5.onclick = () => {
  fnE5();
};

f6.onclick = () => {
  fnF6();
};

g7.onclick = () => {
  fnG7();
};

h8.onclick = () => {
  fnH8();
};

i9.onclick = () => {
  fnI9();
};

//borrar letras
cl.onclick = () => {
  fnCL();
};

j0.onclick = () => {
  fnJ0();
};

//borrar numeros
cn.onclick = () => {
  fnCN();
};
