import { mostrarMenu, manejarSeleccion } from './modules/menu.js';
import readlineSync from 'readline-sync';

function iniciarPrograma() {
  while (true) {
    mostrarMenu();
    const opcion = readlineSync.question('Selecciona una opción: ');
    manejarSeleccion(opcion);
  }
}

iniciarPrograma();