//Esto permite cargar sólo en el momento requerido y no todos los scripts
//en el navegador.
const button = document.getElementById("btn");
button.addEventListener("click", async function(){
    const module = await import("./01-file.mjs");
    module.hello();
});