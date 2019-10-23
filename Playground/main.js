//js basics

const myName = "gaston";
var myAge = 34;
var ignasiAge = 32;

var ageDiff =  myAge - ignasiAge;

if(myAge < 21){
  console.log("im older than 21")
} else{
  console.log("you are not older than 21")
};

console.log(ageDiff);

if(myAge > ignasiAge){
  console.log("older than")
}else if(myAge < ignasiAge){
  console.log("younger than")
}else{
  console.log("same")
};

//js array function ejercicio #1

console.log("ejercicio #1");

var alumnos = ["pedro","andres","pablo","julian","profe1","profe2"];

console.log(alumnos.sort());
console.log(alumnos[0]);
console.log(alumnos[alumnos.length - 1]);

for(let i = 0; i < alumnos.length; i++){
  console.log(alumnos[i])
};


//js array function ejercicio #2

console.log("ejercicio #2");

var edadAlumnos = [20, 25, 30, 19, 25, 45, 34, 26];
var cont = 0;
//
// while (cont < edadAlumnos.length) {
//   console.log(edadAlumnos[cont])
//   cont++
// };


while(cont < edadAlumnos.length){
if(edadAlumnos[cont] % 2 == 0){
  console.log(edadAlumnos[cont] + " while");
}
cont++
};


for(let i = 0; i < edadAlumnos.length; i++){
  if(edadAlumnos[i] % 2 == 0){
    console.log(edadAlumnos[i] + " for");
  }
}



//js array function ejercicio #3 #4

console.log("ejercicio #3 y #4");

var numeros = [6,3,234,20,25,100];

function min(numeros){
  var menor = numeros[0];
  numeros.forEach((numero)=>{
    if(numero<menor) menor=numero;
  })
  return menor;
}

console.log(min(numeros));


function max(numeros){
  var mayor = numeros[0];
  numeros.forEach((numero)=>{
    if(numero>mayor) mayor=numero;
  })
  return mayor;
}
 console.log(max(numeros));

// Exercise 5: Write a function which receives two parameters, an array and an index.  The function will print the value of the element at the given position (one-based) to the console.

console.log("ejercicio #5")
 var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
 var index = 5;


function posicion(array, index){
  console.log(array[index-1])
};

posicion(array,index);

// ejercicio #6 Write a function which receives an array and only prints the values that repeat.

console.log("ejercicio #6")

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function repiten(array){
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      if(array[i] == array[j]){
        console.log(array[i])
      }
    }
  }
};

repiten(array);

// ejercicio #7 Write a simple JavaScript function to join all elements of the following array into a string.

console.log("ejercicio #7");

var myColor = ["Red", "Green", "White", "Black"];

function concatenar(myColor){
return myColor.toString();
}

var string = concatenar(myColor);
console.log(string);


// JavaScript String Functions Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423.

console.log("String Functions Exercise: ejercicio #1");

var numx = 324443;

function revertir(numx){
  // convierte variable numerica en string.
  numx = numx + "";

  return numx.split("").reverse().join("");
};

console.log(revertir(numx));


// JavaScript String Functions Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'.

console.log("String Functions Exercise: ejercicio #2");

var webmaster = "webmaster";

function organizar(webmaster){
  return webmaster.split('').sort().join('');
}

console.log(organizar(webmaster));


// JavaScript String Functions Exercise 3 Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia".

console.log("String Functions Exercise: ejercicio #3");

var textoprince = "prince of persia"

function toUp(textoprince){
  var array1 = textoprince.split(" ");
  var newarray1 = [];

  for(var i = 0; i < array1.length; i++){
    newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1))
  }
  return newarray1.join(" ");
}

console.log(toUp(textoprince));


// JavaScript String Functions Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development".

console.log("String Functions Exercise: ejercicio #4");


var fraseLong = "Web Development Tutorial";

function palabralarga(fraseLong){
  var array1 = fraseLong.split(" ");
  var larga = array1[0];
 array1.forEach((frase)=>{
   if(frase.length>larga.length){
     larga = frase
  }
 })
 return larga;
};

console.log(palabralarga(fraseLong));
