<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
      var_dump($_GET);
      print_r($_POST);
      var_dump($_REQUEST);
    ?>
    </pre>
    <form method="post">
        <p>
        <input type="text" id="txtNombre" name="Nombre" placeholder="Nombre" 
        value="<?php echo ISSET($_POST["Nombre"])?$_POST["Nombre"]:"" ?>" required>
        </p>
        <p>
            <input type="text" id="txtApellido1" name="Apellido1" value="<?= ISSET($_POST["Apellido1"])?$_POST["Apellido1"]:"" ?>" placeholder="Primer apellido" required>
        </p>
        <p>
            <input type="text" id="txtApellido2" name="Apellido2" placeholder="Segundo apellido">
        </p>
        <p>
        <input type="number" id="txtEdad" name="Edad" placeholder="Edad" required>
        </p>
        <p>
        <label>
            <input type="radio" id="rbtMasculino" name="Genero" value="Masculino">
            Masculino
        </label>

        <label>
            <input type="radio" id="rbtFemenino" name="Genero" Value="Femenino">
            Femenino
        </label>
        </p>
        <p>
        <h4>Intereses</h4>
        <label>
            <input type="checkbox" name="Intereses[]" value="Tecnologia"> Tecnología
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Cambio climático"> Cambio climático
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Covid19"> COVID-19
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Politica"> Política
        </label>
        </p>
        <p>
            <select name="EstadoCivil">
                <option value="1">Soltero</option>
                <option value="2">Casado</option>
                <option value="3">Divorciado</option>
                <option value="4">Viudo</option>
                <option  value="5">Unión Libre</option>
            </select>
            </p>
        <p>
        <label>
        <input type="checkbox" name="Terminos" value="terminos">
        Acepto los términos</label>
        </p>
        
        <button>Enviar</button>
    </form>
</body>
</html>>