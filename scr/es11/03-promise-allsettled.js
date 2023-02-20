// Con el método allsettled podemos verificar varias promesas en simultáneo y obtener el resultado de cada una en un objeto nuevo

const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

Promise.allSettled([promise1, promise2, promise3])
   .then(response => console.log(response));