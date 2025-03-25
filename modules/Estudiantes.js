export default class Estudiante {
    constructor(nombre, edad, nivel) {
      this.id = Estudiante.incrementId();
      this.nombre = nombre;
      this.edad = edad;
      this.nivel = nivel;
    }
  
    static incrementId() {
      if (!this.idCounter) {
        this.idCounter = 1;
      } else {
        this.idCounter++;
      }
      return this.idCounter;
    }
  }