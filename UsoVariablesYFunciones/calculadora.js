document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("btnCalcular").addEventListener('click',function(){
        let num1= parseInt(document.getElementById("txtNum1").value);
        let num2= parseInt(document.getElementById("txtNum2").value);
        let operacion=document.getElementById("cboOperacion").value;
        let resultado;
        if(operacion=='S'){
            resultado=num1+num2;
        }
        alert(resultado);
    });
});