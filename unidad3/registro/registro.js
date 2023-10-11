document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("button[type='reset']").addEventListener('click',function(e){
        document.querySelector("form").classList.remove("revisado");
    });

    document.getElementById("btnRegistrar").addEventListener('click',function(e){
        //debugger;
        document.getElementById("txtContrasenia").setCustomValidity('');
        document.getElementById("txtContrasenia2").setCustomValidity('');
        document.getElementById("txtTelefono").setCustomValidity('');
        let form=document.querySelector("form");
        form.classList.add("revisado");
        if(form.checkValidity()){
            let valido=true;
            if(document.getElementById("txtContrasenia").value!=
            document.getElementById("txtContrasenia2").value){
                //alert('Contraseñas no coinciden');
                document.getElementById("txtContrasenia").setCustomValidity(
                    'Las contraseñas no coinciden'
                );
                document.getElementById("txtContrasenia2").setCustomValidity(
                    'Las contraseñas no coinciden'
                );
                valido=false;
            }
            
            /*if(!valido){
                e.preventDefault();
            }*/
        }
        //if(txtTelefono.value!=''){
        if(txtTelefono.value){
            //     12345
            //Verifica si se convirtió a entero
            //if(isNaN(parseInt(txtTelefono.value))){
            //Verificar que sean 10 dígitos
            if(!txtTelefono.value.match('^\\d{10}$')){
                //alert('Teléfono no valido')
                txtTelefono.setCustomValidity('El teléfono debe tener exactamente 10 dígitos');
            }   
        }
        if(form.checkValidity()){
          e.preventDefault();
          //let objUsuario=new Object();
          let objUsuario={
            Nombre:Nombre=document.getElementById("txtNombre").value,
            Usuario: Nombre=document.getElementById("txtUsuario").value,
            Pass:document.getElementById("txtNombre").value
          };
          objUsuario.Nombre=document.getElementById("txtNombre").value;
          objUsuario.Nombre=document.getElementById("txtNombre").value;
          objUsuario.Nombre=document.getElementById("txtNombre").value;
          objUsuario.Nombre=document.getElementById("txtNombre").value;

          //Guardar en el navegador  
        }
    });
});