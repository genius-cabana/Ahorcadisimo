// Palabras predefinidas con pistas
const words = [
    { word: "CASA", hint: "Lugar donde vives." },
    { word: "PERRO", hint: "Animal doméstico que ladra." },
    { word: "ARBOL", hint: "Planta grande con tronco." },
    { word: "AGUA", hint: "Líquido esencial para la vida." },
    { word: "LIBRO", hint: "Objeto con páginas para leer." },
    { word: "COMIDA", hint: "Alimento que comes." },
    { word: "ESCOLAR", hint: "Relacionado con la escuela." },
    { word: "FAMILIA", hint: "Grupo de personas unidas." },
    { word: "MESA", hint: "Mueble con patas para colocar cosas." },
    { word: "SILLA", hint: "Mueble para sentarse." },
    { word: "AUTO", hint: "Vehículo con ruedas." },
    { word: "CAMISA", hint: "Prenda de vestir para el torso." },
    { word: "ZAPATO", hint: "Calzado para los pies." },
    { word: "PELOTA", hint: "Objeto redondo para jugar." },
    { word: "TELEVISOR", hint: "Dispositivo para ver programas." },
    { word: "CELULAR", hint: "Dispositivo para comunicarse." },
    { word: "CUADERNO", hint: "Libro para escribir notas." },
    { word: "LAPIZ", hint: "Instrumento para escribir." },
    { word: "GATO", hint: "Animal doméstico que maúlla." },
    { word: "FLOR", hint: "Parte decorativa de una planta." },
    { word: "RADIO", hint: "Dispositivo para escuchar música." },
    { word: "BICICLETA", hint: "Vehículo de dos ruedas." },
    { word: "PUERTA", hint: "Entrada a una casa." },
    { word: "VENTANA", hint: "Abertura para ver afuera." },
    { word: "RELOJ", hint: "Dispositivo para medir el tiempo." },
    { word: "LLAVE", hint: "Objeto para abrir cerraduras." },
    { word: "SOL", hint: "Estrella central del sistema solar." },
    { word: "LUNA", hint: "Satélite natural de la Tierra." },
    { word: "ESTRELLA", hint: "Punto luminoso en el cielo nocturno." },
    { word: "NARANJA", hint: "Fruta cítrica de color anaranjado." },
    { word: "MANZANA", hint: "Fruta roja o verde." },
    { word: "PLATANO", hint: "Fruta amarilla alargada." },
    { word: "UVA", hint: "Fruta pequeña y dulce." },
    { word: "SANDIA", hint: "Fruta grande y jugosa." },
    { word: "PIZZA", hint: "Comida italiana con queso y salsa." },
    { word: "HELADO", hint: "Postre frío y dulce." },
    { word: "CAFETERIA", hint: "Lugar para tomar café." },
    { word: "CINE", hint: "Lugar para ver películas." },
    { word: "PARQUE", hint: "Área verde para recreación." },
    { word: "MUSEO", hint: "Lugar para exhibir arte y cultura." },
    { word: "HOSPITAL", hint: "Lugar para recibir atención médica." }
];

let selectedWordObj = getRandomWord();
let selectedWord = selectedWordObj.word;
let hint = selectedWordObj.hint; // Pista inicial
let guessedLetters = [];
let wrongLetters = [];
let attemptsLeft = 6;

// Dibujos del Ahorcado
const hangmanDrawings = [
    "  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n========="
];

// Elementos del DOM
const wordDisplay = document.getElementById('word-display');
const hintElement = document.getElementById('hint'); // Elemento para mostrar la pista
const attemptsLeftElement = document.getElementById('attempts-left');
const wrongLettersElement = document.getElementById('wrong-letters');
const letterInput = document.getElementById('letter-input');
const restartButton = document.getElementById('restart-button');
const nextButton = document.getElementById('next-button');
const message = document.getElementById('message');
const hangmanDrawing = document.getElementById('hangman-drawing');

// Función para obtener una palabra aleatoria diferente a la actual
function getRandomWord(excludeWord = null) {
    const filteredWords = words.filter(wordObj => wordObj.word !== excludeWord);
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

// Función para actualizar la pantalla
function updateDisplay() {
    const displayWord = selectedWord
        .split('')
        .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');
    wordDisplay.textContent = displayWord;

    attemptsLeftElement.textContent = attemptsLeft;
    wrongLettersElement.textContent = wrongLetters.join(', ');
    hangmanDrawing.textContent = hangmanDrawings[6 - attemptsLeft];

    // Verificar si el jugador ganó
    if (!displayWord.includes('_')) {
        showMessage('¡Felicidades! ¡Has ganado!', 3000); // Mensaje temporal
        message.style.color = '#4caf50'; // Color verde
        letterInput.style.display = 'none'; // Ocultar caja de texto
        nextButton.style.display = 'inline-block'; // Mostrar botón "Siguiente"
    }

    // Verificar si el jugador perdió
    if (attemptsLeft === 0) {
        showMessage(`¡Perdiste! La palabra era "${selectedWord}".`, 5000); // Mensaje temporal
        message.style.color = '#ff6f61'; // Color rojo
        letterInput.style.display = 'none'; // Ocultar caja de texto
        restartButton.style.display = 'inline-block'; // Mostrar botón "Reintentar"
    }
}

// Enviar letra con Enter
letterInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitLetter();
    }
});

// Función para enviar una letra
function submitLetter() {
    const letter = letterInput.value.toUpperCase();

    if (!letter.match(/[A-Z]/) || letter.length !== 1) {
        showMessage('Por favor, ingresa una letra válida.', 3000);
        return;
    }

    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
        showMessage('Ya intentaste esta letra.', 3000);
        return;
    }

    if (selectedWord.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        wrongLetters.push(letter);
        attemptsLeft--;
    }

    letterInput.value = '';
    updateDisplay();
}

// Mostrar mensaje temporal
function showMessage(text, duration) {
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, duration);
}

// Reiniciar el juego
function resetGame() {
    selectedWordObj = getRandomWord(selectedWord); // Obtener una palabra diferente
    selectedWord = selectedWordObj.word;
    hint = selectedWordObj.hint; // Actualizar la pista
    hintElement.textContent = `Pista: ${hint}`; // Mostrar la nueva pista
    guessedLetters = [];
    wrongLetters = [];
    attemptsLeft = 6;

    letterInput.style.display = 'inline-block'; // Mostrar caja de texto
    restartButton.style.display = 'none'; // Ocultar botón "Reintentar"
    nextButton.style.display = 'none'; // Ocultar botón "Siguiente"

    updateDisplay();
}

// Evento para reiniciar el juego
restartButton.addEventListener('click', resetGame);

// Evento para pasar a la siguiente palabra
nextButton.addEventListener('click', resetGame);

// Inicializar el juego al cargar la página
hintElement.textContent = `Pista: ${hint}`; // Mostrar la pista inicial
updateDisplay();