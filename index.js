// ES6 import single value
// import coffeeStock from './state.js'

// ES6 export multiple value
import { coffeeStock as coffee, isCoffeeMachineReady as ready } from './state.js' 

console.log(coffee);
console.log(ready);

try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}