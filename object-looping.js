var shoppindItem = ['books', 'sanglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rohim: 12,
    samad: 45,
    korim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}


var shoppinfCart = {
    book: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppinfCart);
console.log(keys);

const values = Object.values(shoppinfCart);
console.log(values);

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppinfCart[propertyName];
    // console.log(propertyName,propertyValue);
}

for (var propertyName in shoppinfCart) {
    const value = shoppinfCart[propertyName];
    console.log(propertyName, value);
}