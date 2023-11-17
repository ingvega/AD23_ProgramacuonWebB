<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <?php
      include('menu.php');
      /*echo $_GET;
      echo $_POST;
      echo $_REQUEST;*/
    ?>
    <pre>
    <?php
      //echo //Imprimir lo que sea en el html (cadenas)
      /*var_dump($_GET);
      print_r($_POST);*/
      var_dump($_REQUEST);
     function marcar($interes){
        if(ISSET($_POST["Intereses"])){
            for($i=0;$i<count($_POST["Intereses"]);$i++){
                if($_POST["Intereses"][$i]==$interes)
                    return "checked";
            }
        }
        return "";
     }

     //Cuando POST no tiene datos es porque a penas vamos a agregar
     $valNombre=$valApe1=$valApe2=$valEmail="";
     if(count($_POST)>0){ //Debo validar
        $valNombre=$valApe1=$valApe2=$valEmail="is-invalid";
        $valido=true;
        if(ISSET($_POST["Nombre"]) && 
            (strlen(trim($_POST["Nombre"]))>=2 && strlen(trim($_POST["Nombre"]))<=50)
            && preg_match("/^[a-z.A-Z\s]+$/",$_POST["Nombre"])){
                $valNombre="is-valid";
        }else{
            $valido=false;
        }
        if(ISSET($_POST["Apellido1"]) && 
            (strlen(trim($_POST["Apellido1"]))>=2 && strlen(trim($_POST["Apellido1"]))<=50)
            && preg_match(preg_match("/^[a-z.A-Z\s]+$/",$_POST["Apellido1"]))){
                $valApe1="is-valid";
        }else{
            $valido=false;
        }
        if(ISSET($_POST["Apellido2"]) && (strlen(trim($_POST["Apellido2"]))==0 ||
            ((strlen(trim($_POST["Apellido2"]))>=2 && strlen(trim($_POST["Apellido2"]))<=50)
            && preg_match(preg_match("/^[a-z.A-Z\s]+$/",$_POST["Apellido2"]))))){
                $valApe2="is-valid";
        /*}elseif(ISSET($_POST["Apellido2"]) && strlen(trim($_POST["Apellido2"]))==0){
            $valApe2="is-valid";*/
        }else{
            $valido=false;
        }

     }
    ?>
    </pre>
    <form method="post">
        <div>
            <input type="text" id="txtNombre" class="form-control <?=$valNombre?>" name="Nombre" placeholder="Nombre" 
            value="<?php echo ISSET($_POST["Nombre"])?$_POST["Nombre"]:"" ?>" required>
            <div class="invalid-feedback">
                <ul>
                    <li>Campo obligario</li>
                    <li>Valor entre 2 y 50 caracteres</li>
                    <li>Solo valores alfabéticos</li>
                </ul>
            </div>
        </div>
        <div>
            <input type="text" id="txtApellido1" class="form-control <?=$valApe1?>" name="Apellido1" 
            value="<?= ISSET($_POST["Apellido1"])?$_POST["Apellido1"]:"" ?>" placeholder="Primer apellido" required>
            <div class="invalid-feedback">
                <ul>
                    <li>Campo obligario</li>
                    <li>Valor entre 2 y 50 caracteres</li>
                    <li>Solo valores alfabéticos</li>
                </ul>
            </div>
        </div>
        <div>
            <input type="text" id="txtApellido2"  class="form-control <?=$valApe2?>" name="Apellido2" placeholder="Segundo apellido">
            <div class="invalid-feedback">
                <ul>
                    <li>Valor entre 2 y 50 caracteres</li>
                    <li>Solo valores alfabéticos</li>
                </ul>
            </div>
        </div>
        <div>
            <input type="email" name="Email"  class="form-control" id="" required>
            <div class="invalid-feedback">
                <ul>
                    <li>Campo obligario</li>
                    <li>Debe tener un formato de correo válido "correo@empresa.dominio"</li>
                </ul>
            </div>
        </div>
        <div>
        <input type="number" id="txtEdad" name="Edad" placeholder="Edad" required>
        </div>
        <div>
        <label>
            <input type="radio" id="rbtMasculino" name="Genero"
             value="Masculino" checked>
            Masculino
        </label>

        <label>
            <input type="radio" id="rbtFemenino" name="Genero" 
            Value="Femenino"
            <?= ISSET($_POST["Genero"])?($_POST["Genero"]=="Femenino"?"checked":""):"" ?>>
            Femenino
        </label>
        </div>
        <div>
        <h4>Intereses</h4>
        <label>
            <input type="checkbox" name="Intereses[]" value="Tecnologia" <?= marcar("Tecnologia")?>> Tecnología
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Cambio climático" <?= marcar("Cambio climático")?>> Cambio climático
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Covid19" <?= marcar("Covid19")?>> COVID-19
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Politica" <?= marcar("Politica")?>> Política
        </label>
        </div>
        <div>
            <select multiple name="EstadoCivil[]">
                <option value="1">Soltero</option>
                <option value="2">Casado</option>
                <option value="3">Divorciado</option>
                <option value="4">Viudo</option>
                <option  value="5">Unión Libre</option>
            </select>
            </div>
        <div>
        <label>
        <input type="checkbox" name="Terminos" value="terminos">
        Acepto los términos</label>
        </div>
        
        <button>Enviar</button>
        <script src="js/bootstrap.bundle.min.js"></script>
    </form>
</body>
</html>