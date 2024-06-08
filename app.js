const sum = (a,b) => {
    return a + b;
}

sum(7,3);

console.log(sum(7,3));

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}



// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const valueInDollar = function(valueInYen) {
    let valueInYen = (valueInEuro / valueInDollar) * 156.5;
    return valueInYen;
}
console.log (valueInYen(30));

const fromDollarToYen = function(valueInDollar) {
    // Tu recibes dolares, y los paso a euros
    // A esos Euros, los paso a Yen
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}


const fromYenToPound = function(valueInPounds) {
    let valueInPounds = valueInEuro * 0.87;
    return valueInPounds;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};


