class Player {
  constructor(x, y, width, height) {
    this.rect = new Rectangle(x, y, width, height);
    this.color = "#fff";
  }

  /**
   * Función llamada cada fotograma.
   * Método utilizado para manejar toda la lógica referente a los objetos tipo Player.
   * @param {number} deltaTime
   * @param {number} ms
   */
  update(deltaTime, ms) {

  }

  /**
   * Función llamada cada fotograma.
   * Método utilizado para manejar toda la lógica de renderizado de los objetos tipo Player
   * @param {number} deltaTime
   * @param {number} ms
   */
  draw(deltaTime, ms) {
    this.rect.draw();
    fillColor(this.color);
  }
}
