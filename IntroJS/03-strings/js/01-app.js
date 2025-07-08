// los strings o cadenas de texto representan texto y se pueden declarar de varias formas: con comillas simples, dobles o backticks (template literals)


const producto = "Monitor 20 pulgadas";
const producto2 = String('Monitor 20 pulgadas');
const producto3 =  new String `Monitor 20 pulgadas`;
console.log(producto);
console.log(producto2);
console.log(producto3);

//algunas reglas
// se pueden usar comillas simples, dobles o backticks (template literals)
// barras de escape para caracteres especiales
const producto4 = "Monitor 20 pulgadas \"con barra\"";
const producto5 = 'Monitor 20 pulgadas \'con barra\'';
const producto6 = `Monitor 20 pulgadas "con barra"`;