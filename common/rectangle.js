/**
 * Clase lógica de rectángulo.
 * Utilizada sólo para tener un manejo común de los rectangulos.
 */
class Rectangle {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /**
   * Propiedad tipo get para obtener la coordenada superior del rectángulo.
   */
  get top () {
    return this.y;
  }

  /**
   * Propiedad tipo get para obtener la coordenada inferior del rectángulo.
   */
  get bottom() {
    return this.y + this.height;
  }

  /**
   * Propiedad tipo get para obtener la coordenada izquierda del rectángulo.
   */
  get left() {
    return this.x;
  }

  /**
   * Propiedad tipo get para obtener la coordenada derecha del rectángulo.
   */
  get right() {
    return this.x + this.width;
  }

  /**
   * Dibuja el rectángulo.
   */
  draw() {
    drawRectangle(this.x, this.y, this.width, this.height);
  }
}