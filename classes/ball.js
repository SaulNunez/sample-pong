/// <reference path="../common/point.js" />
/// <reference path="../common/random.js" />

class Ball {
  constructor(x, y, width, height) {
    this.rect = new Rectangle(x, y, width, height);
    this.color = "#fff";
    this.speed = 5;

    /**
     * Se elige una dirección al azar entre (1, 1), (1, -1), (-1, 1), (-1, -1).
     * Recordando que es posible dividir la dirección en diferentes componentes; X, y Y.
     * Una dirección de (1, 1), nos dice que la pelota va a avanzar una unidad a la derecha, y una hacia arriba, es decir, a 45 grados.
     */
    this.direction = randomChoose([
      new Point(1, 1),
      new Point(1, -1),
      new Point(-1, 1),
      new Point(-1, -1),
    ]);
  }

  /**
   * Función llamada cada fotograma.
   * Método utilizado para manejar toda la lógica referente a las instancias de la clase Ball.
   * @param {number} deltaTime
   * @param {number} ms
   */
  update(deltaTime, ms) {
    // Si los extremos horizontales del rectángulo llegan a 480px o 0px (límites horizontales del juego), se invierte el componente X de la dirección.
    if (this.rect.right >= 640 || this.rect.left <= 0) {
      this.direction.x *= -1;
    }

    // Si los extremos verticales del rectángulo llegan a 640px o 0px (límites verticales del juego), se invierte el componente Y de la dirección.
    if (this.rect.bottom >= 480 || this.rect.top <= 0) {
      this.direction.y *= -1;
    }

    // Cada fotograma actualizamos la posición del rectángulo, en base a la rapidez y su dirección.
    this.rect.x += this.speed * this.direction.x;
    this.rect.y += this.speed * this.direction.y;
  }

  /**
   * Función llamada cada fotograma.
   * Método utilizado para manejar toda la lógica de renderizado de los objetos tipo Ball
   * @param {number} deltaTime
   * @param {number} ms
   */
  draw(deltaTime, ms) {
    this.rect.draw();
    fillColor(this.color);
  }
}
