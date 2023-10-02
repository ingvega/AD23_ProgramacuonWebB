//alert('Ejecución de mensaje al cargar el script');
var x=5;
let y='Hola';
const z=true;
//z=false;
a=20.5;
//alert(x+a);
//Espera a que carguen todos los recursos de la página
/*window.addEventListener("load",function(){
    var botones=document.querySelectorAll("#opciones button");
    for(let i=0;i<botones.length;i++){
        botones[i].addEventListener("click", colorear);
    }
});*/
//En cuanto el DOM está disponible se ejecuta aunque no 
//estén cargados todos los recursos
document.addEventListener("DOMContentLoaded",()=>{
    var botones=document.querySelectorAll("#opciones button");
    for(let i=0;i<botones.length;i++){
        botones[i].addEventListener("click", colorear);
    }
});



function saludar(){
    var x=20;
    var nombre=document.getElementById("txtNombre").value;
    alert(x+ ` texto ${y} más texto `+ nombre);
}

function colorear(e){
    //boton.style='background-color:red';
    debugger;
    let botones=this.parentElement.children;
    //let botones=e.target.parentElement.children;
    for(let i=0;i<botones.length;i++){
        botones[i].style.backgroundColor='initial';
    }
    e.target.style.backgroundColor='red';
}