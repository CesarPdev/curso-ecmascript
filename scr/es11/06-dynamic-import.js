// Este archivo es llamado desde index.html para dar una acción al botón btn

const btn = document.getElementById('btn');
btn.addEventListener("click", async function () {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});

// En este caso, tiene la función asíncrona para importar module.js cuando se haga click en el botón y no antes