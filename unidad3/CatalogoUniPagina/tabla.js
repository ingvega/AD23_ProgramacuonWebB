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
    //inicializarDatos();
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
            let clave=0;
            if(operacion=='Agregar'){
                //Llenar un objeto con los elementos de la caja de texto
                if(personas.length>0){
                    clave=personas[personas.length-1].clave;
                }          
                clave++;      
                let nuevaPersona={
                    clave:clave,
                    nombre:document.getElementById("txtNombre").value.trim(),
                    edad:document.getElementById("txtEdad").value
                };
                personas.push(nuevaPersona);
                localStorage.setItem('personas',JSON.stringify(personas));
                alert('Registro añadido');
            }else if(operacion=='Editar'){
                clave=document.getElementById("txtClave").value;
                let index=personas.findIndex(item=>item.clave==clave);
                personas[index].nombre=document.getElementById("txtNombre").value.trim();
                personas[index].edad=document.getElementById("txtEdad").value;
                localStorage.setItem('personas',JSON.stringify(personas));
                alert('Registro almacenado');
                //if('1'==1)->true
                //if('1'===1)->false
            }
        }
    });
});

function llenarTabla2(datos){
    let fila;
    let tbody=document.querySelector("#listaPersonas tbody");
    tbody.innerHTML='';
    datos.forEach(p => {
        fila=document.createElement('tr');
        let celda=document.createElement('td');
        celda.innerText=p.clave;
        fila.appendChild(celda);
        
        celda=document.createElement('td');
        celda.innerText=p.nombre;
        fila.appendChild(celda);
        
        celda=document.createElement('td');
        celda.innerText=p.edad;
        fila.appendChild(celda);

        let btnEditar=document.createElement('button');
        btnEditar.innerText='Editar';
        btnEditar.addEventListener('click',(e)=>{
            //Cargar la información almacenada
            let personas=localStorage.getItem('personas')?
            JSON.parse(localStorage.getItem('personas')):[];
            //Buscar la persona que tenga la clave de la fila
            
            let persona=personas.find(item=>item.clave==p.clave);
            if(persona){
                document.getElementById("txtClave").value=persona.clave;
                document.getElementById("txtNombre").value=persona.nombre;
                document.getElementById("txtEdad").value=persona.edad;
                document.querySelector("form h4").innerText='Editar';
            }else{
                alert('Registro no encontrado');
            }
        });

        let btnEliminar=document.createElement('button');
        btnEliminar.innerText='Eliminar';
        
        /*btnEliminar.value=p.clave;
        btnEliminar.onclick = eliminar;*/
        btnEliminar.onclick=function(){
            this.disabled=true;
            eliminar(p.clave);
            this.disabled=false;
        };
        
        celda=document.createElement('td');
        celda.appendChild(btnEditar);
        celda.appendChild(btnEliminar);
        fila.appendChild(celda);

        tbody.appendChild(fila);
    });
    
}
function eliminar(clave){//,boton){
    debugger;
    
    //Cargar la información almacenada
    let personas=localStorage.getItem('personas')?
    JSON.parse(localStorage.getItem('personas')):[];
    //Buscar la persona que tenga la clave de la fila
    let index=personas.findIndex(item=>item.clave==clave);
    let persona=personas[index];
    if(confirm('Está a punto de eliminar a ' + persona.nombre + 
    ' ¿desea continuar?')){
        personas.splice(index,1);
        localStorage.setItem('personas',JSON.stringify(personas));
        alert('registro eliminado');
        llenarTabla2(personas);
    }
    console.log(this);
}
function eliminar2(e){
    let clave=this.value;
     clave=e.target.value;
    debugger;
     //Cargar la información almacenada
     let personas=localStorage.getItem('personas')?
     JSON.parse(localStorage.getItem('personas')):[];
     //Buscar la persona que tenga la clave de la fila
     
     let persona=personas.find(item=>item.clave==p.clave);
     if(persona){
         document.getElementById("txtClave").value=persona.clave;
         document.getElementById("txtNombre").value=persona.nombre;
         document.getElementById("txtEdad").value=persona.edad;
         document.querySelector("form h4").innerText='Editar';
     }else{
         alert('Registro no encontrado');
     }
}

function llenarTabla(datos){
    let cadena='',fila;
    datos.forEach(p => {
        fila='<tr><td>'+p.clave+'</td><td>'+p.nombre+
        '</td><td>'+p.edad+'</td></tr>';
        
        fila=`<tr><td${p.clave}</td><td>${p.nombre}</td><td>${p.edad}</td></tr>`;
        cadena+=fila;
    });
    document.querySelector("#listaPersonas tbody").innerHTML=cadena;
}