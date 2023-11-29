# Java Script
## Parte 1(preguntas):
1. En JavaScript, todas las operaciones de red son asíncronas. ¿Porque es esto importante?
   
   Cuando estamos trabajando a nivel de red, las operaciones no se dan a la vez(síncronia), por ejemplo, una solicitud HTTP requiere que se realize una petición al servidor y este responde después de la operación(paradigma cliente-servidor).
   Además, es conveniente tener operaciones asíncronas si es que las solicitudes HTTP son concurrentes, en JavaScript existe el concepto de callback, una funcion que se ejecuta al completar las tareas de una operación asíncrona.
   
3. En Javascript, queremos realizar acciones tras una operación/solicitud de red completa. ¿Qué paradigma de programación hace esto posible?
El paradigma que permite lo enunciado en la pregunta es el paradigma de la programacion asíncrona, esta permite que un programe no se cierre y deje que se realizen ciertas funciones en segundo plano.
   
   
3. ¿Javascript proporciona soporte limitado para la herencia a través de qué mecanismo?
En javascript no contamos directamente con una estructura llamada `clase`, sin embargo, tenemos dos opciones; la primera es, podemos usar `prototype` para realizar herencia, aquí un ejemplo:
```js
function Padre(nombre) {
   this.nombre = nombre;
}
// Agregamos un metodo al prototipo Padre
Padre.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};
var Hijo = new Padre('Maria');
Hijo.saludar();
// En consola veremos el mensaje: 
// Hola, soy Maria
```
   
   
4. ¿Qué es el DOM? ¿Qué librería nos ayuda a usar Javascript para manipular el DOM?
   
   El DOM significa **Document,Object and Model**, y trabaja como forma de arbol .El DOM representa la estructura del documento como un árbol de objetos donde cada nodo es un objeto que representa parte del documento, como elementos HTML, atributos, y texto.

## Parte 2(verificacion de booleanos)
En codigo verificamos los valores de cada igualdad.

![scale = 0.7](https://github.com/GaboYR/javascript/blob/main/images/booleanos.png)

## Parte 3(algoritmos)
Piden optimizar este codigo 
```python
def greatestNumber(array):
   for i in array:
     isIValTheGreatest = True
     for j in array:
      if j > i:
         isIValTheGreatest = False
    if isIValTheGreatest:
      return i
```
de complejidad `O(n²)` a complejidad lineal `O(n)`.

solucion:

Podemos considerar el elemento mayor como el primero valor del array, despues iteramos sobre los demas valores y comparamos, si algun valor es mayor al inicial,
se va guardando y asi hasta recorrer todo el arreglo.

![scale = 0.8](https://github.com/GaboYR/javascript/blob/main/images/mayorLineal.png)

Para la imagen,usamos un arreglo `x = [12,13,15,6,12,100]`, donde el elemento mayor es 100, y en la consola aparece lo mismo,por lo que el algoritmo funciona.

Ahora la funcion 
```js
function containsX(string) {
  foundX = false;
  for(let i = 0; i < string.length; i++) {
   if (string[i] === "X") {
     foundX = true;
     }
   }
   return foundX;
  }
```
realiza la busqueda del caracter 'X' en una cadena,hay una variable booleana `foundX` inicializada en `false` porque no ha encontrado aun el caracter, entonces para buscar basta con realizar un recorrido lineal en el arreglo
hasta ver si la encuentra, si encuentra la 'X', entonces la variable `foundX` se cambia a `true`. Finalmente se retorna el valor de `foundX` si al final se encuentra la 'X'.Por lo tanto el algoritmo tiene una complejidad en términos de notacion big O`O(n)`.

Usamos la extension `Code Runner` de `Visual Studio Code` y realizamos pruebas en cuatro cadenas.

![](https://github.com/GaboYR/javascript/blob/main/images/containX_original.png)


Para mejorar el algoritmo podemos usar la técnica de doble puntero,es decir, usar 2 variables `i` y `j` una que empieze en el comienzo del arreglo, y la otra empezaría al final del arreglo, el algoritmo se ejecuta hasta que se cumpla una de las siguientes condiciones:
- Que una de las variables encuentre el caracter 'X'.
- Que `i <= j`.

Codigo modificado:
```js
//Algoritmo modificado
function containsXMejorado(string){
    let i = 0,j = string.length;
    let foundX = false;
    while (i <= j && !foundX) {
        if (string[i] == 'X' || string[j] == 'X'){
            foundX = true;
        }
        i ++;
        j --;
    }
    return foundX;
}
```
Este algoritmo es de complejidad O(n), pero realiza una busqueda de extremos a medio, por lo que puede acortar el tiempo de ejecucion.
