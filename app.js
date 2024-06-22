const sum = (a,b) => {
    return a + b;
}

sum(7,3);

console.log(sum(7,3));

// One euro is:
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

let dollarToYen = function fromDollarToYen (dollar) {
    let yen = dollar * 150.84;
    return yen;
}

let euroToDollar = function fromEuroToDollar(euro) {
    let dollar = euro * 1.07;
    return dollar;
}

let yenToPound = function fromYenToPound (yen) {
    let pound = yen * 0.0052;
    return pound;
}

module.exports ={euroToDollar, dollarToYen, yenToPound};


