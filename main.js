let fecha = document.getElementById("start");
let color = document.querySelector(".color");
const button = document.getElementById("btn");

button.addEventListener('click', () => {
    let colorHex = "#";
    let strFecha = fecha.value;
    strFecha = strFecha.split('-');
    let anio = strFecha[0].slice(-2);

    for(let i = 2; i > 0; i--) {
        colorHex += strFecha[i];
    }
    colorHex += anio;

    color.textContent = colorHex;
    document.body.style.backgroundColor = colorHex;
});