let mdlConfirmacion;
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
        //window.location.href='agregarPersona.html';
        sessionStorage.removeItem('clavePersona');
        window.location.replace('persona.html');

    });

    document.getElementById("btnConfirmar").onclick=eliminar;

    mdlConfirmacion = document.getElementById('mdlConfirmacion')
    mdlConfirmacion.addEventListener('show.bs.modal', event => {
        //Cargar el nombre de la persona a eliminar
        let personas=localStorage.getItem('personas')?
        JSON.parse(localStorage.getItem('personas')):[];
        let clave=event.relatedTarget.value;
        //Buscar la persona que tenga la clave de la fila
        let index=personas.findIndex(item=>item.clave==clave);
        let persona=personas[index];
        document.getElementById("spnPersona").innerText=
            persona.nombre;
        
        //Cargar la clave en el value del botón "SI"
        document.getElementById("btnConfirmar").value=clave;
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
        btnEditar.className='btn btn-primary';
        btnEditar.addEventListener('click',(e)=>{
            sessionStorage.setItem('clavePersona',p.clave);
            window.location.replace('persona.html');
        });

        let btnEliminar=document.createElement('button');
        btnEliminar.innerText='Eliminar';
        btnEliminar.className='btn btn-danger';
        btnEliminar.value=p.clave;
        /*btnEliminar.onclick = eliminar;*/
        btnEliminar.onclick=function(){
            //this.disabled=true;
            myModal = new bootstrap.Modal('#mdlConfirmacion');
            myModal.show(this);
            //eliminar(p.clave);
            //this.disabled=false;
        };
        
        celda=document.createElement('td');
        celda.appendChild(btnEditar);
        celda.appendChild(btnEliminar);
        fila.appendChild(celda);

        tbody.appendChild(fila);
    });
    
}
function eliminar(){
    
    let personas=localStorage.getItem('personas')?
    JSON.parse(localStorage.getItem('personas')):[];
    
    let index=personas.findIndex(item=>item.clave==this.value);
    if(index>=0){
        personas.splice(index,1);
        localStorage.setItem('personas',JSON.stringify(personas));
        alert('registro eliminado');
    }else{
        alert('registro no encontrado');
    }
    llenarTabla2(personas);

}
