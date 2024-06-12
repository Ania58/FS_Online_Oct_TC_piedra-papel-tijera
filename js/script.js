const opciones = ['piedra', 'papel', 'tijera']
let contadorUsuario = 0;
let contadorOrdenador = 0;

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');

const resultados = document.getElementById('resultados');
const usuario = document.getElementById('contador-usuario');
const ordenador = document.getElementById('contador-ordenador');
const botones = document.querySelectorAll('.boton-jugada');

console.log(piedra);
console.log(papel);
console.log(tijera);
console.log(resultados);
console.log(usuario);
console.log(ordenador);




botones.forEach(boton =>) {
    boton.addEventListener('click', function()) {
        const jugadaUsuario = boton.getAttribute('data-jugada')
        const jugadaOrdenador = obtenerJugadaOrdenador();
        const resultado = determinarGanador(jugadaUsuario, jugadaOrdenador);
        if (resultado === "usuario") {
            puntosUsuario++;
        } else if (resultado === "ordenador") {
            puntosOrdenador++;
        }
    }
};

function obtenerJugadaOrdenador() {
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return jugadas[indiceAleatorio];
}

function determinarGanador (jugadaUsuario, jugadaOrdenador)
if (jugadaUsuario === jugadaOrdenador) {
    return empate;
} else if {
    (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
    (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
    (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
    return 'usuario';
} else {
    return 'ordenador'
}