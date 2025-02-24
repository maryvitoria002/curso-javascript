// Comando consicional IF e ELSE

let num = 10

if(num > 10){
    console.log("Numeral maior que 10");
    if(num > 50){
        console.log("Numeral maior que 50");
    }
}else if(num > 5)
    console.log("Numeral esta entre 6 e 10");
else{
    console.log("Numeral menor ou igual que 10");
}

console.log("Fim do programa ");

let clima="chuva "
let energia=100

if(energia > 70 && clima=="sol"){
    console.log("Vou à praia");
}else{
    console.log("Vou ao cinema");
    
}
