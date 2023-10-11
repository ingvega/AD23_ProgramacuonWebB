//Crear un arreglo
let arr = [];
let arr2 = new Array();
let arr3 = new Array(5);
//Almacenar valores en un arreglo (inicializarlo)
arr = ['gera', 'lola'];
//Añadir (al inicio, final, intermedio)
//['gera', 'lola']
arr.unshift('Antonio'); //Inicio
//['Antonio','gera', 'lola']

arr.push('Fernando'); //Final
//['Antonio','gera', 'lola','Fernando']
arr[4]='Isaac';
arr[10]='Bryan';
//['Antonio','gera', 'lola','Fernando','Isaac',,,,,,'Bryan']
//Añade 3 elementos a partir de la posición 2
arr.splice(2,0,'Ricardo','Laura','Francisco');
//['Antonio','gera', 'Ricardo','Laura','Francisco','lola','Fernando','Isaac',,,,,,'Bryan']

//Eliminar valores
arr.shift();//Del inicio
arr.pop();//Del inicio
//Borra 1 elemento a partir de la posición 5
arr.splice(5,1);
arr['nombre']='juan perez';
let obj={};
let obj2=new Object();
obj={nombre:'Juan Perez',clave:1};
obj.semestre=5;
obj2.nombre='Juan Perez';
obj2.clave=1;
obj2.semestre=1;
let obj3=[];
obj3['nombre']='Juan perez';
obj3['clave']=1;
obj3['semestre']=1;

arr2.push(obj,obj2,obj3);
debugger;
