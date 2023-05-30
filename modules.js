const { people, ages } = require('./people');	// when we require a file, node automatically runs that file, however data inside file is still unaccessible

console.log(people, ages);

const os = require('os');
console.log(os);

console.log(os.platform(), os.homedir());