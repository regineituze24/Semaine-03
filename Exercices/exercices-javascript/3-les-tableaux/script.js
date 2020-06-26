// Exercice 1: ajoute "Ted" au tableau suivant

let castArray = ['Robin', 'Barney', 'Lily', 'Marshal'];
console.log(castArray.push('Ted'));
// Exercice 2: Affiche l'index de "Ted" dans le tableau dans la console
const myIndex = castArray.findIndex(element => element === 'Ted');
console.log(myIndex);
// Exercice 3: Affiche l'index de Robin dans le tableau dans la console
const myVar = castArray.findIndex(element => element === 'Robin');
console.log(myVar);
// Exercice 4: retire "Robin" du tableau
console.log(castArray.shift());
// Exercice 5: retire "Ted" du tableau
console.log(castArray.pop());
// Exercice 6: ajoute "Ted" et "Robin" au tableau
console.log(castArray.push('Ted', 'Robin'));

// Exercice 7: Affiche le nouvel index de Ted et Robin dans le tableau dans la console
const myNumber = castArray.findIndex(element => element === 'Robin');
console.log(myNumber);
const index1 = castArray.findIndex(element => element === 'Ted');
console.log(index1);
// Exercice 8: à l'aide d'une boucle, affiche chaque élément du tableau dans la console
castArray.forEach(myArray => console.log(myArray));
// Exercice 9: à l'aide de la méthode .findIndex(), trouve l'index de Lily, ensuite, affiche Lily dans la console
const indexTwo = castArray.findIndex(element => element === 'Lily');
console.log(indexTwo);
console.log(castArray[indexTwo]);
// Exercice 10: à l'aide d'une boucle, multiplie par 2 chaque élément du tableau suivant, crée un nouveau tableau à l'aide de la méthode .push(), affiche le nouveau tableau dans la console

let multiplicationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let element = [];
function elementFunction() {
  multiplicationArray.forEach(multiplication => {
    element.push(multiplication * 2);
  });
  console.log(element);
}
elementFunction();
