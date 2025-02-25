// For - iterações

// Loops podem ser:
//  definidos: for (usado quando eu sei a quantidade de vezes que preciso iterar um comando)
//  indefinidos: while e do while

// For (inicio, condição, controle (contador)){}

console.log("Início do programa");

// Tabuada de 5

for(let i = 0; i<11; i++){
    let mult = i * 5
    console.log("5 vezes", i, "é igual a: ", mult );   
}

console.log("Início do programa de par ou impar");

for(let i = 0; i < 10; i++){
    if(i%2==0){
        console.log(i, '- par');
    }
    else{
        console.log(i, " - Ímpar");
        
    }
}