const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPokemonJugador = document.getElementById('boton-pokemon')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectioSeleccionarPokemon = document.getElementById('seleccionar-pokemon')
const spanPokemonJugador = document.getElementById('pokemon-jugador')

const spanPokemonEnemigo = document.getElementById('pokemon-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let pokemones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDePokemones
let inputLapras
let inputVulpix
let inputNinetales
let inputCubone
let inputPiplup
let pokemonJugador
let ataquesPokemon
let ataquesPokemonEnemigo
let botonFuego
let botonAgua
let botonTierra
let botonHielo
let botonElectrico
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0 
let vidasJugador = 3
let vidasEnemigo = 3

class Pokemon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let lapras = new Pokemon('Lapras', './assets/Lapras.png', 5)

let vulpix= new Pokemon('Vulpix', './assets/Vulpix.png', 5)

let ninetales= new Pokemon('Ninetales', './assets/Ninetales.png', 5)

let cubone= new Pokemon('Cubone', './assets/Cubone.png', 5)

let piplup= new Pokemon('Piplup', './assets/Piplup.png', 5)

lapras.ataques.push(
    { nombre: '🧊', id: 'boton-agua' },
    { nombre: '⚡', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

vulpix.ataques.push(
    { nombre: '🔥', id: 'boton-tierra' },
    { nombre: '⚡', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-fuego' },
    
)

ninetales.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '⚡', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-fuego' }, 
    { nombre: '🧊', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

cubone.ataques.push(
    { nombre: '🌱', id: 'boton-agua' },
    { nombre: '⚡', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🧊', id: 'boton-tierra' },
)

piplup.ataques.push(
    { nombre: '💧', id: 'boton-tierra' },
    { nombre: '⚡', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🧊', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)

pokemones.push(lapras,vulpix,ninetales,cubone,piplup)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    pokemones.forEach((pokemon) => {
        opcionDePokemones = `
        <input type="radio" name="pokemon" id=${pokemon.nombre} />
        <label class="tarjeta-de-pokemon" for=${pokemon.nombre}>
            <p>${pokemon.nombre}</p>
            <img src=${pokemon.foto} alt=${pokemon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDePokemones

     inputLapras = document.getElementById('Lapras')
     inputVulpix = document.getElementById('Vulpix')
     inputNinetales = document.getElementById('Ninetales')
     inputCubone = document.getElementById('Cubone')
     inputPiplup = document.getElementById('Piplup')

    })
    
    botonPokemonJugador.addEventListener('click', seleccionarPokemonJugador)

    
    

    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPokemonJugador() {
    
    sectioSeleccionarPokemon.style.display = 'none'
    
    
    sectionSeleccionarAtaque.style.display = 'flex'
    
    
    
    if (inputLapras.checked) {
        spanPokemonJugador.innerHTML = inputLapras.id
        pokemonJugador = inputLapras.id
    } else if (inputVulpix.checked) {
        spanPokemonJugador.innerHTML = inputVulpix.id
        pokemonJugador = inputVulpix.id
    } else if (inputNinetales.checked) {
        spanPokemonJugador.innerHTML = inputNinetales.id
        pokemonJugador = inputNinetales.id
    } else if (inputCubone.checked) {
        spanPokemonJugador.innerHTML = inputCubone.id
        pokemonJugador = inputCubone.id
    } else if (inputPiplup.checked) {
        spanPokemonJugador.innerHTML = inputPiplup.id
        pokemonJugador = inputPiplup.id
    } else {
        alert('Selecciona un pokemon')
    }

    extraerAtaques(pokemonJugador)
    seleccionarPokemonEnemigo()
}

function extraerAtaques(pokemonJugador) {
    let ataques
    for (let i = 0; i < pokemones.length; i++) {
        if (pokemonJugador === pokemones[i].nombre) {
            ataques = pokemones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPokemon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPokemon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botonHielo= document.getElementById ('boton-hielo')
    botonElectrico= document.getElementById ('boton-electrico')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true   
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            } else if (e.target.textContent === '🌱') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            } else if (e.target.textContent === '🧊') {
                ataqueJugador.push('HIELO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            } else {
                ataqueJugador.push('ELECTRICO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true  
            }
            ataqueAleatorioEnemigo()
        })
    })
    

}

function seleccionarPokemonEnemigo() {
    let pokemonAleatorio = aleatorio(0, pokemones.length -1)

    spanPokemonEnemigo.innerHTML = pokemones[pokemonAleatorio].nombre
    ataquesPokemonEnemigo = pokemones[pokemonAleatorio].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesPokemonEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('TIERRA')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('HIELO')
    } else {
        ataqueEnemigo.push('ELECTRICO')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'HIELO' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'ELECTRICO' && ataqueEnemigo[index] === 'HIELO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'ELECTRICO' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'HIELO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'ELECTRICO') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'HIELO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponente(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'ELECTRICO' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponente(index, index)
            crearMensaje("EMPATE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un empate!!!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    
    sectionMensajes.innerHTML = resultadoFinal


    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
