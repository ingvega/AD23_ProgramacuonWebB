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

    document.getElementById("btnAgregar").addEventListener('click',()=>{
        //Limpiar el form
        let frm=document.querySelector("form");
        let operacion=document.querySelector("form h4");
        frm.reset();
        operacion.innerText='Agregar';
        document.getElementById("txtNombre").focus();
    });

    document.getElementById("btnAceptar").addEventListener('click',function(e){
        if(document.querySelector("form").checkValidity()){
            let personas=[];
            if(localStorage.getItem('personas')){
                personas=JSON.parse(localStorage.getItem('personas'));
            }
            let operacion=document.querySelector("form h4").innerText;
            if(operacion=='Agregar'){
                //Llenar un objeto con los elementos de la caja de texto
                let clave=0;
                if(personas.length>0){
                    clave=personas[personas.length-1].clave;
                }          
                clave++;      
                let nuevaPersona={
                    clave:clave,
                    nombre:document.getElementById("txtNombre").value,
                    edad:document.getElementById("txtEdad").value
                };
                personas.push(nuevaPersona);
                localStorage.setItem('personas',JSON.stringify(personas));
                alert('Registro añadido');
            }
        }
    });
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