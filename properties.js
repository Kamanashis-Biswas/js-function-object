var shoppinfCart={
    book:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}

var penCount=shoppinfCart.pen;
var penCount2=shoppinfCart['pen'];
var properties = Object.keys(shoppinfCart);
var propertyValue=Object.values(shoppinfCart);
console.log(properties);
console.log(propertyValue)

var propertyName='book';
var propertiesValue=shoppinfCart[propertyName];
console.log(propertyName,propertiesValue);

//console.log(shoppinfCart);