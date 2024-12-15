"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos el módulo readline para manejar la entrada y salida del usuario.
const readline = __importStar(require("readline"));
// Array para almacenar las tareas.
let tasks = [];
// Configuramos la interfaz readline.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Función que muestra el menú de opciones al usuario.
function showMenu() {
    console.log("\nOpciones:");
    console.log("1. Agregar Tarea");
    console.log("2. Listar Tareas");
    console.log("3. Completar Tarea");
    console.log("4. Salir");
}
// Función para agregar una tarea.
function addTask(title) {
    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false,
    };
    tasks.push(newTask);
    console.log(`Tarea "${title}" añadida.`);
}
// Función para listar las tareas.
function listTasks() {
    console.log("\nLista de Tareas:");
    tasks.forEach((task) => {
        console.log(`${task.id}. [${task.completed ? "X" : " "}] ${task.title}`);
    });
    console.log("");
}
// Función para marcar una tarea como completada.
function completeTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.completed = true;
        console.log(`Tarea "${task.title}" completada.`);
    }
    else {
        console.log(`Tarea con ID ${id} no encontrada.`);
    }
}
// Función que muestra el menú y maneja la interacción con el usuario.
const prompt = () => {
    showMenu(); // Muestra el menú con las opciones disponibles.
    // Espera a que el usuario seleccione una opción.
    rl.question("Selecciona una opción: ", (option) => {
        switch (option) {
            case "1": // Opción para agregar una tarea.
                // Pregunta al usuario el título de la nueva tarea.
                rl.question("Escribe el título de la tarea: ", (title) => {
                    addTask(title); // Llama a la función para agregar la tarea al array.
                    prompt(); // Vuelve a mostrar el menú después de añadir la tarea.
                });
                break;
            case "2": // Opción para listar todas las tareas.
                listTasks(); // Llama a la función para imprimir la lista de tareas.
                prompt(); // Vuelve a mostrar el menú después de listar las tareas.
                break;
            case "3": // Opción para completar una tarea.
                // Pregunta al usuario el ID de la tarea que quiere marcar como completada.
                rl.question("Escribe el ID de la tarea completada: ", (id) => {
                    completeTask(parseInt(id, 10)); // Convierte el ID de string a número y marca la tarea como completada.
                    prompt(); // Vuelve a mostrar el menú después de completar la tarea.
                });
                break;
            case "4": // Opción para salir del programa.
                console.log("¡Adiós!"); // Imprime un mensaje de despedida.
                rl.close(); // Cierra la interfaz de entrada (finaliza el programa).
                break;
            default: // Caso para cualquier entrada inválida.
                console.log("Opción no válida. Intenta de nuevo."); // Informa al usuario que la opción no es válida.
                prompt(); // Vuelve a mostrar el menú después de una entrada inválida.
        }
    });
};
// Inicia el bucle del programa llamando a la función prompt por primera vez.
prompt();
