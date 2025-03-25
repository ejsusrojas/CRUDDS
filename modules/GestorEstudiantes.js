import Estudiante from './Estudiante.js';

export default class GestorEstudiantes {
  constructor() {
    this.estudiantes = [];
  }

  agregarEstudiante(nombre, edad, nivel) {
    const nuevoEstudiante = new Estudiante(nombre, edad, nivel);
    this.estudiantes.push(nuevoEstudiante);
  }

  listarEstudiantes() {
    return this.estudiantes;
  }

  actualizarEstudiante(id, nombre, edad, nivel) {
    let estudiante = this.estudiantes.find(est => est.id === id);
    if (estudiante) {
      estudiante.nombre = nombre || estudiante.nombre;
      estudiante.edad = edad || estudiante.edad;
      estudiante.nivel = nivel || estudiante.nivel;
    }
  }

  eliminarEstudiante(id) {
    const index = this.estudiantes.findIndex(est => est.id === id);
    if (index !== -1) {
      this.estudiantes.splice(index, 1);
    }
  }
}