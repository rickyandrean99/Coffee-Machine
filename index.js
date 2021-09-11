// ES6 import single value
// import coffeeStock from './state.js'

// ES6 export multiple value
// import { coffeeStock as coffee, isCoffeeMachineReady as ready } from './state.js' 

// console.log(coffee)
// console.log(ready)

// try {
//     console.log("Awal blok try")
//     errorCode
//     console.log("Akhir blok try")
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// } finally {
//     console.log("Finally")
// }

// Custom Error Class
// class ValidationError extends Error {
//     constructor(message) {
//         super(message)
//         this.name = "ValidationError"
//     }
// }

// let json = '{}';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new ValidationError("'name' is required.");
//     }

//     if (!user.age) {
//         throw new ValidationError("'age' is required.");
//     }

//     console.log(user.name)
//     console.log(user.age)
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Error: ${error.message}`)
//     } else if (error instanceof ReferenceError) {
//         console.log(error.message)
//     } else {
//         console.log(error.stack)
//     }
// }

// console.log("Selamat datang!");
// setTimeout(() => {
//   console.log("Terima kasih sudah mampir, silakan datang kembali!");
// }, 3000);
// console.log("Ada yang bisa dibantu?");

// const orderCoffee = (callback) => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//         callback(coffee)
//     }, 3000);
// }

// orderCoffee((coffee) => {
//     console.log(coffee)
// })

// Promise
// const stock = {
//     coffeeBeans: 250,
//     water: 1000,
// }

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//             resolve("Stok cukup. Bisa membuat kopi")
//         } else {
//             reject("Stok tidak cukup")
//         }
//     })
// }

// const handleSuccess = resolvedValue => console.log(resolvedValue)
// const handleFailure = rejectionReason => console.log(rejectionReason)

// // checkStock().then(handleSuccess, handleFailure)
// checkStock().then(handleSuccess).catch(handleFailure)

// Chaining Promises
// const state = {
//     stock: {
//         coffeeBeans: 250,
//         water: 1000,
//     },
//     isCoffeeMachineBusy: false,
// }

// const checkAvailability = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!state.isCoffeeMachineBusy) {
//                 resolve("Mesin kopi siap digunakan.");
//             } else {
//                 reject("Maaf, mesin sedang sibuk.");
//             }
//         }, 1000);
//     });
// };

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         state.isCoffeeMachineBusy = true;
//         setTimeout(() => {
//             if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
//                 resolve("Stok cukup. Bisa membuat kopi.");
//             } else {
//                 reject("Stok tidak cukup!");
//             }
//         }, 1500);
//     });
// };

// const brewCoffee = () => {
//     console.log("Membuatkan kopi Anda...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Kopi sudah siap!")
//         }, 2000);
//     });
// };

// const boilWater = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Memanaskan air...");
//         setTimeout(() => {
//             resolve("Air panas sudah siap!");
//         }, 2000);
//     })
// }

// const grindCoffeeBeans = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Menggiling biji kopi...");
//         setTimeout(() => {
//             resolve("Kopi sudah siap!");
//         }, 1000);
//     })
// }

// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then(value => {
//             console.log(value);
//             const promises = [boilWater(), grindCoffeeBeans()];
//             return Promise.all(promises);
//         })
//         .then((value) => {
//             console.log(value)
//             return brewCoffee();
//         })
//         .then((value) => {
//             console.log(value);
//         })
//         .catch((rejectedReason) => {
//             console.log(rejectedReason);
//         });
// }

// makeEspresso();

// Async / Await
// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// }

// makeCoffee();


// class NetworkError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'NetworkError';
//     }
// }

// // TODO: 1
// const fetchingUserFromInternet = (isOffline) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isOffline) {
//                 reject(new NetworkError('Gagal mendapatkan data dari internet'));
//             }
//             resolve({ name: 'John', age: 18 });
//         }, 500);
//     })
// }

// // TODO: 2
// async function gettingUserName() {
//     try {
//         const user = await fetchingUserFromInternet(false)
//         return user.name
//     } catch (error) {
//         return error.message
//     }
// }

// gettingUserName().then((value) => {
//     console.log(value)
// })

// const _ = require('lodash')

// const myArray = [1, 2, 3, 4]
// const sum = _.sum(myArray)
// console.log(sum)