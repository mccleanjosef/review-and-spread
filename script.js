console.log("script is linked");

const spotify2021 = [
    'Tom mich','Brine','Lorde'
];

// const spotify2022 = spotify2021;
// Above adds Mozart to 2021
// Use the spread method to create a unique duplicate of the array

const spotify2022 = ['Ice T', 'James Blunt', ...spotify2021, 'Neil Young']


spotify2022.push('Mozart');

console.log('spotify 2021 Playlist: ' + spotify2021);
console.log('spotify 2021 Playlist: ' + spotify2022);

// arrow function stores function in a variable
// const purchase = () => {
//     console.log('arrow function has been called');
// }
// purchase();

// const purchase = (product) => {
//     console.log('you bought a... ' + product);
// }
// purchase("Hammer");

const purchase = (product) => {
    return 'you have bought a ' + product;
}

const message = purchase('Hammer');
console.log(message);