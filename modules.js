//method for importing all the exports from file as xyz
//const xyz = require('./people');

//returns empty object, except when we add the exports line in people.js
//console.log(xyz.people, xyz.ages)

//imports specific things from the export object in the other file using shorthand
const {people, ages} = require('./people');
console.log(people, ages);

const os = require('os');
console.log(os.platform(), os.homedir());