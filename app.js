let amigos = [];
let lista = document.getElementById('listaAmigos');

function esNombreValido(nombre) {
    // Convertir el nombre a minúsculas para simplificar validaciones
    nombre = nombre.trim().toLowerCase(); 

    if (nombre === "") {
        return false; // No se permite un nombre vacío
    }

    // Lista de caracteres válidos (letras, espacio y acentos básicos)
    let letrasValidas = "abcdefghijklmnopqrstuvwxyzáéíóúñ ";

    for (let i = 0; i < nombre.length; i++) {
        let char = nombre[i];
        if (!letrasValidas.includes(char)) {
            return false; // Si encuentra un carácter inválido, retorna falso
        }
    }

    return true;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre');
    } else if (!esNombreValido(nombre)) {
        alert('El nombre solo puede contener letras y espacios, sin números ni símbolos.');
    } else if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
        actualizarAmigos();
    }
}

function actualizarAmigos() {
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos 2 amigos para sortear.');
    } else {
        let random = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `¡El amigo sorteado es: ${amigos[random]}!`;
        amigos.splice(random, 1);
        actualizarAmigos();
    }
}
