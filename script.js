const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const parrafo = document.querySelector(".p");
const span = document.querySelector(".span");

function validarTexto(texto) {
    const regex = /^[a-zñ\s]+$/; // Solo permite letras minúsculas y espacios
    return regex.test(texto);
}

function btnEncrypt() {
    const textoOriginal = textarea.value.trim();

    if (!validarTexto(textoOriginal)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    const textoEncrypt = encriptar(textoOriginal);
    mensaje.value = textoEncrypt;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
    parrafo.style.display = "none";
    span.style.display = "none";
}

function encriptar(stringEncrypt) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncrypt.includes(matrizCodigo[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncrypt;
}

function btnDecrypt() {
    const textoOriginal = textarea.value.trim();

    if (!validarTexto(textoOriginal)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    const textoDecrypt = desencriptar(textoOriginal);
    mensaje.value = textoDecrypt;
    textarea.value = "";
}

function desencriptar(stringDecrypt) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDecrypt.includes(matrizCodigo[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDecrypt;
}

function btnCopiar() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}
