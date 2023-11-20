# Java Script
## Parte 1(preguntas):
1. En JavaScript, todas las operaciones de red son asíncronas. ¿Porque es esto importante?
   
2. En Javascript, queremos realizar acciones tras una operación/solicitud de red completa. ¿Qué paradigma de programación hace esto posible?
   
3. ¿Javascript proporciona soporte limitado para la herencia a través de qué mecanismo?
   
4. ¿Qué es el DOM? ¿Qué librería nos ayuda a usar Javascript para manipular el DOM?
   El DOM significa **Document,Object and Model**, y trabaja como forma de arbol 

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
