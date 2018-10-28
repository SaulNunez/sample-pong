/// <reference path="player.js" />
/// <reference path="ball.js" />
/// <reference path="../common/keyboard-control.js" />
/**
 * Escenario del juego.
 * Clase encargada de manejar las instancias del juego, las collisiones, el tiempo transcurrido, el ganador, etcétera.
 */
class Stage {
  constructor() {
    const leftPlayerController = {
      up: new KeyboardControl(["w", "W"]),
      down: new KeyboardControl(["s", "S"]),
    };

    const rightPlayerController = {
      up: new KeyboardControl(["ArrowUp", "8"]),
      down: new KeyboardControl(["ArrowDown", "2"]),
    };

    this.leftPlayer = new Player(10, 190, 20, 100, "#fff", leftPlayerController);
    this.rightPlayer = new Player(610, 190, 20, 100, "#fff", rightPlayerController);
    this.ball = new Ball(310, 230, 12, 12);
  }

  /**
   * Función llamada cada fotograma.
   * Se encarga de llamar la función update de cada una de las instancias hijas.
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
