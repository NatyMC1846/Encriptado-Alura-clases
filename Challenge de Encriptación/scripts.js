document.getElementById("encriptar").addEventListener("click", function() {
    accionBoton('encriptar');
});

document.getElementById("desencriptar").addEventListener("click", function() {
    accionBoton('desencriptar');
});

function accionBoton(accion) {
    const mensaje = document.getElementById("message").value;
    let resultado = "";

    if (accion === "encriptar") {
        resultado = encriptar(mensaje);
        document.getElementById("desencriptar").disabled = false;
    } else if (accion === "desencriptar") {
        resultado = desencriptar(mensaje);
    }

    document.getElementById("response").innerText = resultado;
    document.getElementById("cajaResponse").hidden = false;
    document.getElementById("cajaNoResponse").hidden = true;
    document.getElementById("copiar").hidden = false;
}

function encriptar(texto) {
    return texto.split('').reverse().join('');
}

function desencriptar(texto) {
    return texto.split('').reverse().join('');
}

document.getElementById("copiar").addEventListener("click", function() {
    copiarPortapapeles();
});

function copiarPortapapeles() {
    const textToCopy = document.getElementById("response").innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Texto copiado en el portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar en el portapapeles: ", err);
        });
}
