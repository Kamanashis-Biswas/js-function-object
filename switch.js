const color = 'yellow';

if (color === 'green') {
    console.log("You are green");

} else if (color === 'blue') {
    console.log("You are blue");

} else if (color === 'red') {
    console.log("You are red");

} else if (color === 'white') {
    console.log("You are white");

} else if (color === 'yellow') {
    console.log("You are yellow");
} else {
    console.log("You are black");
}

switch (color) {
    case 'green':
        console.log("You are green");
        break;
    case 'blue':
        console.log("You are blue");
        break;
    case 'red':
        console.log("You are red");
        break;
    case 'white':
        console.log("You are white");
        break;

    case 'yellow':
        console.log("You are yellow");
        break;
    default:
        console.log("You are black");
        break;
}