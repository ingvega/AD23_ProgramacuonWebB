<?php
    require_once("../datos/DAOUsuario.php");
    
    //Revisar que lleguen los datos
    if(ISSET($_POST["correo"]) && ISSET($_POST["password"])){
        
        //Revisar en BD que esten correctas
        $dao=new DAOUsuario();
        $usuario=$dao->autenticar($_POST["correo"],$_POST["password"]);
        
        if($usuario){
            header("Location: listaUsuarios.php");
            return;
        }
    }
    header("Location: index.html");
?>