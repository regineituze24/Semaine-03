// Exercice 1: A l'aide d'une boucle, affiche les chiffres de 0 à 100, place les chiffres dans un tableau que tu nommeras fizzBuzzArray, à l'aide de la méthode .push()
let myArray = [];
let iteration = 0;
do {
  myArray.push(iteration);
  iteration++;
} while (iteration <= 100);
console.log(myArray);
// Exercice 2: Toujours à l'aide d'une boucle, passe sur chaque élément du tableau que tu viens de créer (fizzBuzzArray), si l'élément est divisible par trois affiche "fizz" dans la console, si l'élément est divisible par cinq affiche "buzz", si il est divisible par trois et par cinq affiche "fizzBuzz"

for (myArray = 0; myArray <= 100; myArray++) {
  if (myArray % 3 === 0) {
    console.log('fizz');
  } else if (myArray % 5 === 0) {
    console.log('buzz');
  } else if (myArray % 5 === 0 && myArray % 3 === 0) {
    console.log('buzzfizz');
  } else {
    console.log(myArray);
  }
}

// Exercice 3: A l'aide de l'objet Date (voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) affiche tous les vendredi 13 de l'année 2020
