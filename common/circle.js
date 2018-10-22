/// <reference path="draw.js" />
/**
 * Clase círculo.
 * Utilizada para tener un manejo común de los círculos.
 */
class Circle {
    constructor(x = 0, y = 0, radius = 0) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    /**
     * Propiedad tipo get para obtener el diámetro del círculo.
     */
    get diameter () {
      return this.radius * 2;
    }
  
    /**
     * Dibuja el círculo.
     */
    draw() {
      drawCircle(this.x, this.y, this.radius);
    }
  }