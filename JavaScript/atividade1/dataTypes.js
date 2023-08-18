// Variáveis inicialmente declaradas sem valor (undefined)
let boolean;
let bigInt;
let string;
let symbol;

console.log("Valores iniciais (undefined):");
console.log("boolean:", boolean);
console.log("bigInt:", bigInt);
console.log("string:", string);
console.log("symbol:", symbol);

// Atribuir valores nulos
boolean = null;
bigInt = null;
string = null;
symbol = null;

console.log("\nValores após atribuição de nulos:");
console.log("boolean:", boolean);
console.log("bigInt:", bigInt);
console.log("string:", string);
console.log("symbol:", symbol);

// Atribuir valores de tipos correspondentes
boolean = true;
bigInt = BigInt(1234567890123456789012345678901234567890);
string = "Olá, mundo!";
symbol = Symbol("identificador");

console.log("\nValores finais:");
console.log("boolean:", boolean);
console.log("bigInt:", bigInt);
console.log("string:", string);
console.log("symbol:", symbol);
