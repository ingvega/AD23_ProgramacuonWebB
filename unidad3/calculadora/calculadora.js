document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("button[type='reset']").addEventListener('click',function(e){
        document.querySelector("form").classList.remove("revisado");
    });

    document.getElementById("btnCalcular").addEventListener('click',function(e){
        //e.preventDefault();
        //document.getElementsByTagName("form")
        //document.querySelector("form").class='revisado';
        let form=document.querySelector("form");
        form.classList.add("revisado");
        if(form.checkValidity()){
            let num1= parseInt(document.getElementById("txtNum1").value);
            let num2= parseInt(document.getElementById("txtNum2").value);
            let operacion=document.getElementById("cboOperacion").value;
            //alert(document.getElementById("cboOperacion"));
            debugger;
            let expresion=num1+operacion+num2;
            let resultado=eval(expresion);
            /*if(operacion=='S'){
                resultado=num1+num2;
            }else if(operacion=='R'){
                resultado=num1-num2;
            }else if(operacion=='M'){
                resultado=num1*num2;
            }else{
            }
            resultado=num1/num2;
            */
            alert(resultado);
        }else{
            if(!document.getElementById("txtNum1").checkValidity()){
                document.getElementById("txtNum1").
                setCustomValidity("El primer número es requerido");
            }
            alert("Completa los datos");
        }
    });
});