
const TIEMPO_POR_PREGUNTA = 15;
const PUNTOS_POR_ACIERTO = 100;
const CANTIDAD_TODAS = 10;

const bancoPreguntas = [
    // CIENCIA
    {
        categoria: "ciencia",
        pregunta: "¿Qué planeta es conocido como el planeta rojo?",
        opciones: ["Venus", "Marte", "Júpiter", "Saturno"],
        correcta: "Marte"
    },
    {
        categoria: "ciencia",
        pregunta: "¿Qué gas necesitan las personas para respirar?",
        opciones: ["Helio", "Hidrógeno", "Oxígeno", "Nitrógeno"],
        correcta: "Oxígeno"
    },
    {
        categoria: "ciencia",
        pregunta: "¿Cuál es el satélite natural de la Tierra?",
        opciones: ["El Sol", "La Luna", "Marte", "Venus"],
        correcta: "La Luna"
    },
    {
        categoria: "ciencia",
        pregunta: "¿A qué temperatura hierve el agua al nivel del mar?",
        opciones: ["50 °C", "75 °C", "100 °C", "150 °C"],
        correcta: "100 °C"
    },
    {
        categoria: "ciencia",
        pregunta: "¿Qué órgano bombea la sangre?",
        opciones: ["Pulmón", "Cerebro", "Estómago", "Corazón"],
        correcta: "Corazón"
    },

    // MATEMÁTICAS
    {
        categoria: "matematicas",
        pregunta: "¿Cuánto es 8 × 7?",
        opciones: ["48", "54", "56", "64"],
        correcta: "56"
    },
    {
        categoria: "matematicas",
        pregunta: "¿Cuánto es la mitad de 150?",
        opciones: ["50", "65", "75", "85"],
        correcta: "75"
    },
    {
        categoria: "matematicas",
        pregunta: "¿Cuántos lados tiene un hexágono?",
        opciones: ["5", "6", "7", "8"],
        correcta: "6"
    },
    {
        categoria: "matematicas",
        pregunta: "¿Cuál es la raíz cuadrada de 81?",
        opciones: ["7", "8", "9", "10"],
        correcta: "9"
    },
    {
        categoria: "matematicas",
        pregunta: "¿Cuánto es 25 + 37?",
        opciones: ["52", "62", "72", "57"],
        correcta: "62"
    },

    // TECNOLOGÍA
    {
        categoria: "tecnologia",
        pregunta: "¿Qué lenguaje se utiliza para dar estilo a una web?",
        opciones: ["CSS", "HTML", "SQL", "Python"],
        correcta: "CSS"
    },
    {
        categoria: "tecnologia",
        pregunta: "¿Qué significa CPU?",
        opciones: [
            "Control Personal Universal",
            "Unidad Central de Procesamiento",
            "Código Principal Universal",
            "Centro de Programas Unidos"
        ],
        correcta: "Unidad Central de Procesamiento"
    },
    {
        categoria: "tecnologia",
        pregunta: "¿Cuál de estos es un navegador web?",
        opciones: ["Excel", "Chrome", "Windows", "Python"],
        correcta: "Chrome"
    },
    {
        categoria: "tecnologia",
        pregunta: "¿Para qué sirve HTML?",
        opciones: [
            "Crear la estructura de páginas web",
            "Reparar computadoras",
            "Editar videos",
            "Limpiar archivos"
        ],
        correcta: "Crear la estructura de páginas web"
    },
    {
        categoria: "tecnologia",
        pregunta: "¿Qué es una contraseña segura?",
        opciones: [
            "123456",
            "El nombre propio",
            "Una clave larga y difícil de adivinar",
            "La fecha de nacimiento"
        ],
        correcta: "Una clave larga y difícil de adivinar"
    },

    // GEOGRAFÍA
    {
        categoria: "geografia",
        pregunta: "¿Cuál es la capital de El Salvador?",
        opciones: ["Santa Ana", "San Miguel", "San Salvador", "La Unión"],
        correcta: "San Salvador"
    },
    {
        categoria: "geografia",
        pregunta: "¿Cuál es el océano más grande?",
        opciones: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        correcta: "Pacífico"
    },
    {
        categoria: "geografia",
        pregunta: "¿En qué continente está Egipto?",
        opciones: ["Europa", "África", "Asia", "Oceanía"],
        correcta: "África"
    },
    {
        categoria: "geografia",
        pregunta: "¿Cuál es el país más grande del mundo por superficie?",
        opciones: ["Canadá", "China", "Rusia", "Brasil"],
        correcta: "Rusia"
    },
    {
        categoria: "geografia",
        pregunta: "¿Cuál es la capital de Japón?",
        opciones: ["Pekín", "Seúl", "Bangkok", "Tokio"],
        correcta: "Tokio"
    },

    // CULTURA GENERAL
    {
        categoria: "cultura",
        pregunta: "¿Quién escribió Don Quijote de la Mancha?",
        opciones: [
            "Miguel de Cervantes",
            "Pablo Neruda",
            "Federico García Lorca",
            "Gabriel García Márquez"
        ],
        correcta: "Miguel de Cervantes"
    },
    {
        categoria: "cultura",
        pregunta: "¿Cuántos días tiene una semana?",
        opciones: ["5", "6", "7", "8"],
        correcta: "7"
    },
    {
        categoria: "cultura",
        pregunta: "¿Qué instrumento tiene teclas blancas y negras?",
        opciones: ["Guitarra", "Piano", "Violín", "Flauta"],
        correcta: "Piano"
    },
    {
        categoria: "cultura",
        pregunta: "¿En qué estación caen generalmente las hojas de los árboles?",
        opciones: ["Primavera", "Verano", "Otoño", "Invierno"],
        correcta: "Otoño"
    },
    {
        categoria: "cultura",
        pregunta: "¿Cuántos minutos tiene una hora?",
        opciones: ["30", "45", "60", "100"],
        correcta: "60"
    }
];

const nombresCategorias = {
    ciencia: "Ciencia",
    matematicas: "Matemáticas",
    tecnologia: "Tecnología",
    geografia: "Geografía",
    cultura: "Cultura general"
};

const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaJuego = document.getElementById("pantalla-juego");
const pantallaResultados = document.getElementById("pantalla-resultados");

const nombreInput = document.getElementById("nombre");
const categoriaSelect = document.getElementById("categoria");
const comenzarBoton = document.getElementById("comenzar");
const siguienteBoton = document.getElementById("siguiente");
const salirBoton = document.getElementById("salir");
const jugarOtraVezBoton = document.getElementById("jugar-otra-vez");
const irInicioBoton = document.getElementById("ir-inicio");

const saludoJugador = document.getElementById("saludo-jugador");
const numeroPregunta = document.getElementById("numero-pregunta");
const puntosElemento = document.getElementById("puntos");
const tiempoElemento = document.getElementById("tiempo");
const relojElemento = document.querySelector(".reloj");
const barraProgreso = document.getElementById("barra-progreso");
const categoriaActual = document.getElementById("categoria-actual");
const preguntaElemento = document.getElementById("pregunta");
const opcionesElemento = document.getElementById("opciones");
const mensajeElemento = document.getElementById("mensaje");
const errorInicio = document.getElementById("error-inicio");

let jugador = "";
let preguntasPartida = [];
let indice = 0;
let puntos = 0;
let correctas = 0;
let tiempoRestante = TIEMPO_POR_PREGUNTA;
let temporizador = null;
let respondida = false;

// Mezcla una lista aleatoriamente.
function mezclar(lista) {
    const resultado = [...lista];

    for (let i = resultado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
    }

    return resultado;
}

// Cambia la pantalla visible.
function mostrarPantalla(pantalla) {
    detenerTemporizador();

    pantallaInicio.classList.add("oculta");
    pantallaJuego.classList.add("oculta");
    pantallaResultados.classList.add("oculta");

    pantalla.classList.remove("oculta");
}

// Prepara una partida nueva.
function comenzarJuego() {
    jugador = nombreInput.value.trim();

    if (!jugador) {
        errorInicio.textContent = "Por favor, escribe tu nombre para comenzar.";
        nombreInput.focus();
        return;
    }

    errorInicio.textContent = "";

    const categoria = categoriaSelect.value;

    let disponibles = bancoPreguntas;

    if (categoria !== "todas") {
        disponibles = bancoPreguntas.filter(
            pregunta => pregunta.categoria === categoria
        );
    }

    preguntasPartida = mezclar(disponibles);

    if (categoria === "todas") {
        preguntasPartida = preguntasPartida.slice(0, CANTIDAD_TODAS);
    }

    indice = 0;
    puntos = 0;
    correctas = 0;

    saludoJugador.textContent = `¡Vamos, ${jugador}!`;
    puntosElemento.textContent = puntos;

    mostrarPantalla(pantallaJuego);
    mostrarPregunta();
}

// Muestra la pregunta actual y comienza el reloj.
function mostrarPregunta() {
    detenerTemporizador();
    respondida = false;
    tiempoRestante = TIEMPO_POR_PREGUNTA;

    const actual = preguntasPartida[indice];

    numeroPregunta.textContent =
        `Pregunta ${indice + 1} de ${preguntasPartida.length}`;

    barraProgreso.style.width =
        `${(indice / preguntasPartida.length) * 100}%`;

    categoriaActual.textContent = nombresCategorias[actual.categoria];
    preguntaElemento.textContent = actual.pregunta;
    tiempoElemento.textContent = tiempoRestante;
    relojElemento.classList.remove("urgente");

    mensajeElemento.textContent = "";
    mensajeElemento.className = "mensaje";

    siguienteBoton.classList.add("oculta");
    siguienteBoton.textContent =
        indice === preguntasPartida.length - 1
            ? "Ver resultados →"
            : "Siguiente pregunta →";

    opcionesElemento.innerHTML = "";

    mezclar(actual.opciones).forEach((opcion, posicion) => {
        const boton = document.createElement("button");

        boton.type = "button";
        boton.className = "opcion";
        boton.style.animationDelay = `${posicion * 0.06}s`;
        boton.textContent = opcion;

        boton.addEventListener("click", () => {
            comprobarRespuesta(opcion);
        });

        opcionesElemento.appendChild(boton);
    });

    iniciarTemporizador();
}

// Cuenta atrás de 15 segundos.
function iniciarTemporizador() {
    temporizador = setInterval(() => {
        tiempoRestante--;
        tiempoElemento.textContent = tiempoRestante;

        if (tiempoRestante <= 5) {
            relojElemento.classList.add("urgente");
        }

        if (tiempoRestante <= 0) {
            comprobarRespuesta(null);
        }
    }, 1000);
}

// Detiene el reloj para que no siga contando.
function detenerTemporizador() {
    if (temporizador !== null) {
        clearInterval(temporizador);
        temporizador = null;
    }
}

// Comprueba una respuesta o registra el tiempo agotado.
function comprobarRespuesta(opcionElegida) {
    if (respondida) return;

    respondida = true;
    detenerTemporizador();

    const actual = preguntasPartida[indice];
    const esCorrecta = opcionElegida === actual.correcta;

    if (esCorrecta) {
        correctas++;
        puntos += PUNTOS_POR_ACIERTO;
        puntosElemento.textContent = puntos;

        mensajeElemento.textContent = "¡Respuesta correcta! 🎉";
        mensajeElemento.classList.add("bien");
    } else if (opcionElegida === null) {
        mensajeElemento.textContent =
            `¡Se acabó el tiempo! La respuesta era: ${actual.correcta}`;
        mensajeElemento.classList.add("mal");
    } else {
        mensajeElemento.textContent =
            `Respuesta incorrecta. La correcta era: ${actual.correcta}`;
        mensajeElemento.classList.add("mal");
    }

    document.querySelectorAll(".opcion").forEach(boton => {
        boton.disabled = true;

        if (boton.textContent === actual.correcta) {
            boton.classList.add("correcta");
        } else if (boton.textContent === opcionElegida) {
            boton.classList.add("incorrecta");
        }
    });

    barraProgreso.style.width =
        `${((indice + 1) / preguntasPartida.length) * 100}%`;

    siguienteBoton.classList.remove("oculta");
}

// Avanza a la siguiente pregunta o muestra los resultados.
function avanzarPregunta() {
    if (!respondida) return;

    if (indice < preguntasPartida.length - 1) {
        indice++;
        mostrarPregunta();
    } else {
        mostrarResultados();
    }
}

// Calcula y muestra el resultado final.
function mostrarResultados() {
    mostrarPantalla(pantallaResultados);

    const total = preguntasPartida.length;
    const porcentaje = Math.round((correctas / total) * 100);
    const incorrectas = total - correctas;

    let titulo = "¡Buen intento! 💪";

    if (porcentaje === 100) {
        titulo = "¡Perfecto, eres increíble! 🏆";
    } else if (porcentaje >= 70) {
        titulo = "¡Excelente trabajo! 🌟";
    } else if (porcentaje >= 40) {
        titulo = "¡Vas por buen camino! 🚀";
    }

    document.getElementById("titulo-resultado").textContent = titulo;

    document.getElementById("resumen-resultado").textContent =
        `${jugador}, has completado el reto. ¡Sigue aprendiendo!`;

    document.getElementById("porcentaje").textContent = `${porcentaje}%`;
    document.getElementById("total-correctas").textContent = correctas;
    document.getElementById("total-incorrectas").textContent = incorrectas;
    document.getElementById("puntos-finales").textContent = puntos;
}

// Eventos de los botones.
comenzarBoton.addEventListener("click", comenzarJuego);

nombreInput.addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
        comenzarJuego();
    }
});

siguienteBoton.addEventListener("click", avanzarPregunta);

salirBoton.addEventListener("click", () => {
    mostrarPantalla(pantallaInicio);
});

jugarOtraVezBoton.addEventListener("click", () => {
    comenzarJuego();
});

irInicioBoton.addEventListener("click", () => {
    mostrarPantalla(pantallaInicio);
    nombreInput.focus();
});
