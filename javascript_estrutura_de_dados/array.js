let meuArray = ["Array de pessoas","Olá mundo", "Son"];
// Adicionar um elemento no final
meuArray.push(350);
meuArray.push("Victor");
console.log(meuArray);
// Adicionar elementos no inicio
meuArray.unshift("Segundo elemento");
meuArray.unshift("Primeiro elemento");
console.log(meuArray);
// Adicionar dados no meio do array
meuArray.splice(1, 0, "UM", "DOIS", "TRES", "QUATRO")
console.log(meuArray);
// Juntar dois arrays
let meuArray2 = [1,2,3,4,5,6,7,8,9,10];
let novoArray = meuArray.concat(meuArray2);
console.log(novoArray);
