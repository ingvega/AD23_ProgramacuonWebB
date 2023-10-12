function inicializarDatos(){
    if(!localStorage.getItem('personas')){
        //Solo guardar si no se ha guardado personas antes
        let personas=[
            {clave:1,nombre:'Juan Pérez',edad:16},
            {clave:2,nombre:'Lorena Juárez',edad:20},
            {clave:3,nombre:'Antonio Pérez',edad:18},
            {clave:4,nombre:'Margarita Hernández',edad:22},
            {clave:5,nombre:'Alfonso Suárez',edad:17}
        ];
        localStorage.setItem('personas',JSON.stringify(personas));
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    inicializarDatos();
    let personas=[];
    if(localStorage.getItem('personas')){
        personas=JSON.parse(localStorage.getItem('personas'));
    }
    llenarTabla2(personas);
});

function llenarTabla2(datos){
    let fila;
    let tbody=document.querySelector("#listaPersonas tbody");
    datos.forEach(p => {
        fila=document.createElement('tr');
        let celda=document.createElement('td');
        celda=document.createElement('td');
        celda.innerText=p.clave;
        fila.appendChild(celda);
        celda=document.createElement('td');
        celda.innerText=p.nombre;
        fila.appendChild(celda);
        celda=document.createElement('td');
        celda.innerText=p.edad;
        fila.appendChild(celda);
        tbody.appendChild(fila);
    });
    
}

function llenarTabla(datos){
    let cadena='',fila;
    datos.forEach(p => {
        fila='<tr><td>'+p.clave+'</td><td>'+p.nombre+
        '</td><td>'+p.edad+'</td></tr>';
        
        fila=`<tr><td>${p.clave}</td><td>${p.nombre}</td><td>${p.edad}</td></tr>`;
        cadena+=fila;
    });
    document.querySelector("#listaPersonas tbody").innerHTML=cadena;
}