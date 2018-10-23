/// <reference path="../common/collisions.js" />
/// <reference path="../common/rectangle.js" />
/// <reference path="../common/draw.js" />
/// <reference path="../common/keyboard-control.js" />

class Player {
  /**
   * 
   * @param {number} x - Coordenada en X del objeto.
   * @param {number} y - Coordenada en Y del objeto.
   * @param {number} width - Ancho del objeto.
   * @param {number} height - Alto del objeto.
   * @param {string} color - Color del objeto.
   * @param {{ up: Control, down: Control }} controls - Definición de controles del jugador
   */
  constructor(x, y, width, height, color, controls) {
    this.rect = new Rectangle(x, y, width, height);
    this.color = color;
    this.controls = controls;
  }

  /**
   * Función llamada cada fotograma.
   * Método utilizado para manejar toda la lógica referente a los objetos tipo Player.
   * @param {number} deltaTime
   * @param {number} ms
   */
  update(deltaTime, ms) {
    if (this.controls.up.isActive) {
      this.rect.y -= 5;
    }
    if (this.controls.down.isActive) {
      this.rect.y += 5;
    }

    if (this.rect.top < 0) {
      this.rect.top = 0;
    }

    if (this.rect.bottom > 480) {
      this.rect.bottom = 480;
    }
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
