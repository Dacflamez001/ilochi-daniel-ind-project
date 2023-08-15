let celsuis = document.getElementById ('celsuis');
let fahrenheit = document.getElementById ('fahrenheit');

celsuis.oninput = () => {
    let output = (parseFloat(celsuis.value) * 9) /5 + 32;
     fahrenheit.value = parseFloat(output.toFixed(2));
};
fahrenheit.oninput = () => {
    let output = ((parseFloat(fahrenheit.value) - 32) *5) / 9;
     celsuis.value = parseFloat(output.toFixed(2));
};