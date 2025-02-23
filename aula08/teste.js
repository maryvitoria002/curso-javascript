let a = 'rola'
let b = 'boceta'

console.log('eu amo ', a, 'mas odeio ', b);

a = a ^ b; // a agora é a combinação de a e b
b = a ^ b; // b passa a ser o valor original de a
a = a ^ b; // a passa a ser o valor original de b

console.log('eu amo ', a, 'mas odeio ', b);

