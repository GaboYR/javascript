// Algoritmo 1 en tiempo lineal
function greatestNumber(array){
    let v = array[0];
    for (let i = 1; i < array.length; i ++){
        if (array[i] > v){
            v = array[i];
        }
    }
    return v;
}
x = [12,13,15,6,12,100]
max_in_x = greatestNumber(x)
console.log(max_in_x)

//Algoritmo 2
function containsX(string) {
    foundX = false;
    for(let i = 0; i < string.length; i++) {
        if (string[i] === "X") {
            foundX = true;
        }
    }
    return foundX;
}
cad1 = "abcdeeeeeeeeeX"
cad2 = "aaaaaaaXaaaaaa"
cad3 = "aaaaaaaaaaaaaX"
cad4 = "aaaaaaaaaaaaaa"
console.log(containsX(cad1))
console.log(containsX(cad2))
console.log(containsX(cad3))
console.log(containsX(cad4))

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

console.log(containsXMejorado(cad1))
console.log(containsXMejorado(cad2))
console.log(containsXMejorado(cad3))
console.log(containsXMejorado(cad4))