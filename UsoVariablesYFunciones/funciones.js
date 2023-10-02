//alert('Ejecución de mensaje al cargar el script');
var x=5;
let y='Hola';
const z=true;
//z=false;
a=20.5;
//alert(x+a);

var botones=document.querySelectorAll("#opciones button");
for(let i=0;i<botones.length;i++){
    botones[i].addEventListener("click", colorear);
}


function saludar(){
    var x=20;
    var nombre=document.getElementById("txtNombre").value;
    alert(x+ ` texto ${y} más texto `+ nombre);
}

function colorear(boton){
    //boton.style='background-color:red';
    debugger;
    let botones=boton.parentElement.children;
    for(let i=0;i<botones.length;i++){
        botones[i].style.backgroundColor='initial';
    }
    boton.style.backgroundColor='red';
}