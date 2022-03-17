const autos = require("./db/index");

console.log(autos);

function describirse(numero){
    let respuesta = "";
    respuesta = `Hola soy el auto marca ${autos.lista[numero].marca}, modelo ${autos.lista[numero].modelo}, fabricado en el año ${autos.lista[numero].año} y de color ${autos.lista[numero].color}` 
    return respuesta
}

function porColor(color) {
    let respuesta = [];
    for (let i = 0; i < autos.lista.length; i += 1) {
      if (autos.lista[i].color == color.toLowerCase()) {
        respuesta.push(autos.lista[i]);
      }
    }
    
    if (respuesta.length == 0) {
        respuesta = "Por el momento no tenmos autos de color ${color}";
    }
    return respuesta;
}   

console.log(describirse(3));

console.log(autos);

console.log("Lista de autos por color ============");
console.log(porColor("white"));



