import GestorEstudiantes from './GestorEstudiantes.js';
import readlineSync from 'readline-sync';

const gestor = new GestorEstudiantes();

export function mostrarMenu() {
  console.log('--- Menú CRUD de Estudiantes ---');
  console.log('1. Agregar estudiante');
  console.log('2. Listar estudiantes');
  console.log('3. Actualizar estudiante');
  console.log('4. Eliminar estudiante');
  console.log('5. Salir');
}

export function manejarSeleccion(opcion) {
  switch (opcion) {
    case '1':
      agregarEstudiante();
      break;
    case '2':
      listarEstudiantes();
      break;
    case '3':
      actualizarEstudiante();
      break;
    case '4':
      eliminarEstudiante();
      break;
    case '5':
      console.log('¡Hasta luego!');
      process.exit();
    default:
      console.log('Opción no válida');
  }
}

function agregarEstudiante() {
  const nombre = readlineSync.question('Nombre del estudiante: ');
  const edad = readlineSync.questionInt('Edad del estudiante: ');
  const nivel = readlineSync.question('Nivel del estudiante: ');
  gestor.agregarEstudiante(nombre, edad, nivel);
  console.log('Estudiante agregado con éxito.');
}

function listarEstudiantes() {
  const estudiantes = gestor.listarEstudiantes();
  if (estudiantes.length === 0) {
    console.log('No hay estudiantes registrados.');
  } else {
    estudiantes.forEach(est => {
      console.log(`ID: ${est.id}, Nombre: ${est.nombre}, Edad: ${est.edad}, Nivel: ${est.nivel}`);
    });
  }
}

function actualizarEstudiante() {
  const id = readlineSync.questionInt('Ingrese el ID del estudiante a actualizar: ');
  const nombre = readlineSync.question('Nuevo nombre (deje vacío para no cambiar): ');
  const edad = readlineSync.questionInt('Nueva edad (deje vacío para no cambiar): ');
  const nivel = readlineSync.question('Nuevo nivel (deje vacío para no cambiar): ');

  gestor.actualizarEstudiante(id, nombre, edad, nivel);
  console.log('Estudiante actualizado con éxito.');
}

function eliminarEstudiante() {
  const id = readlineSync.questionInt('Ingrese el ID del estudiante a eliminar: ');
  gestor.eliminarEstudiante(id);
  console.log('Estudiante eliminado con éxito.');
}