/**
 * Escenario del juego.
 * Clase encargada de manejar las instancias del juego, las collisiones, el tiempo transcurrido, el ganador, etcétera.
 */
class Stage {
  constructor() {
    this.leftPlayer = new Player();
    this.rightPlayer = new Player();
    this.ball = new Ball();
  }

  /**
   * Función llamada cada fotograma.
   * Se encarga de llamar la función draw de cada una de las instancias hijas.
   * @param {number} deltaTime
   * @param {number} ms
   */
  update(deltaTime, ms) {
    this.leftPlayer.update(deltaTime, ms);
    this.rightPlayer.update(deltaTime, ms);
    this.ball.update(deltaTime);
  }

  /**
   * Función llamada cada fotograma.
   * Se encarga de llamar la función draw de cada una de las instancias hijas.
   * @param {number} deltaTime
   * @param {number} ms
   */
  draw(deltaTime, ms) {
    // Se dibuja un escenario negro.
    drawRectangle(0, 0, 640, 480);
    fillColor("#000");

    // Se dibujan los jugadores.
    this.leftPlayer.draw(deltaTime, ms);
    this.rightPlayer.draw(deltaTime, ms);

    // Se dibuja la pelota.
    this.ball.draw(deltaTime);
  }
}
