const { Console } = require('console');
const fs = require('fs');
const http = require("http");
const autos = require("./index");

console.log(autos);

function describirse(numero){
    return `Hola soy el auto marca ${autos.lista[numero].marca}, modelo ${autos.lista[numero].modelo}, fabricado en el año ${autos.lista[numero].año} y de color ${autos.lista[numero].color}` 
}

console.log(describirse(3));

for (let i = 0 ; i < autos.lenght ; i++) {
    console.log(autos[i])
}

function porColor(color){
    return `${autos.lista[color].color}`
};

function porMarca(marca){
    return `${autos.lista[marca].marca}`
    if(return = undefined){
        Console.log(`No contamos con autos de la marca ${autos.lista[marca].marca}`)}
}

function porAño(año){
    return `${autos.lista[año].año}`
    if(return = undefined){
        Console.log(`No contamos con autos del año ${autos.lista[año].año}`)
    }
}