/*
    Calculadora en JS
    Autor: Sebastian Rios
    Fecha: 12/03/2022
*/
"use strict";

var tecla_uno = document.querySelector("#tecla_uno");
var tecla_dos = document.querySelector("#tecla_dos");
var tecla_tres = document.querySelector("#tecla_tres");
var tecla_suma = document.querySelector("#tecla_suma");

var tecla_cuatro = document.querySelector("#tecla_cuatro");
var tecla_cinco = document.querySelector("#tecla_cinco");
var tecla_seis = document.querySelector("#tecla_seis");
var tecla_resta = document.querySelector("#tecla_resta");

var tecla_siete = document.querySelector("#tecla_siete");
var tecla_ocho = document.querySelector("#tecla_ocho");
var tecla_nueve = document.querySelector("#tecla_nueve");
var tecla_division = document.querySelector("#tecla_division");

var tecla_limpiar = document.querySelector("#tecla_limpiar");
var tecla_cero = document.querySelector("#tecla_cero");
var tecla_igual = document.querySelector("#tecla_igual");
var tecla_multiplicar = document.querySelector("#tecla_multiplicar");

var display = document.querySelector("input[type='number']");

var primerNumero = "";
var segundoNumero = "";
var formula = "";

//Evento Click para Numeros
tecla_uno.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

tecla_dos.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

tecla_tres.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

tecla_cuatro.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

tecla_cinco.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

tecla_seis.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

tecla_siete.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

tecla_ocho.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

tecla_nueve.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

tecla_cero.addEventListener("click", function (event) {
  var num = event.target.innerText;
  if (
    formula.slice(-1) != "+" &&
    formula.slice(-1) != "-" &&
    formula.slice(-1) != "*" &&
    formula.slice(-1) != "/"
  ) {
    primerNumero = primerNumero.concat(num);
    display.value = parseInt(primerNumero);
  } else {
    segundoNumero = segundoNumero.concat(num);
    display.value = parseInt(segundoNumero);
  }
});

//Evento Click para funciones aritmeticas
tecla_suma.addEventListener("click", function (event) {
  formula = primerNumero + event.target.innerText;

  //console.log(formula);

  display.value = "";
});

tecla_resta.addEventListener("click", function (event) {
  formula = primerNumero + event.target.innerText;

  console.log(formula);

  display.value = "";
});

tecla_division.addEventListener("click", function (event) {
  formula = primerNumero + event.target.innerText;

  console.log(formula);

  display.value = "";
});

tecla_multiplicar.addEventListener("click", function (event) {
  formula = primerNumero + event.target.innerText;

  display.value = "";
});

//Evento Click para Resultado
tecla_igual.addEventListener("click", function () {
  formula = formula.concat(segundoNumero);
  //console.log(formula);

  if (formula.indexOf("+") > -1) {
    var primer = formula.substring(0, formula.indexOf("+"));
    var segundo = formula.substring(formula.indexOf("+") + 1);

    primer = parseInt(primer);
    segundo = parseInt(segundo);

    display.value = primer + segundo;
  } else if (formula.indexOf("-") > -1) {
    var primer = formula.substring(0, formula.indexOf("-"));
    var segundo = formula.substring(formula.indexOf("-") + 1);

    primer = parseInt(primer);
    segundo = parseInt(segundo);

    display.value = primer - segundo;
  } else if (formula.indexOf("*") > -1) {
    var primer = formula.substring(0, formula.indexOf("*"));
    var segundo = formula.substring(formula.indexOf("*") + 1);

    primer = parseInt(primer);
    segundo = parseInt(segundo);

    display.value = primer * segundo;
  } else if (formula.indexOf("/") > -1) {
    var primer = formula.substring(0, formula.indexOf("/"));
    var segundo = formula.substring(formula.indexOf("/") + 1);

    primer = parseInt(primer);
    segundo = parseInt(segundo);

    display.value = primer / segundo;
  }
  setTimeout(function () {
    primerNumero.toString();
    primerNumero = "";
    segundoNumero.toString();
    segundoNumero = "";
    formula = "";
    console.log("Wait passed");
  }, 1000);

  console.log("primer" + primer + "\nsegundo" + segundo);
});

//Evento Click para Limpiar
tecla_limpiar.addEventListener("click", function (event) {
  primerNumero.toString();
  primerNumero = "";
  segundoNumero.toString();
  segundoNumero = "";
  formula = "";
  display.value = "";
});

// var str = parseInt("1") + parseInt("1");
// parseInt(str);
// console.log(str);
