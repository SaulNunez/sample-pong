/// <reference path="draw.js" />
/**
 * Clase punto.
 * Utilizada para tener un manejo común de los puntos.
 */
class Point {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    /**
     * Dibuja el punto.
     */
    draw() {
      drawCircle(this.x, this.y, 1);
    }
  }