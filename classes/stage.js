/// <reference path="player.js" />
/// <reference path="ball.js" />
/// <reference path="../common/collisions.js" />
/// <reference path="../common/keyboard-control.js" />
/**
 * Escenario del juego.
 * Clase encargada de manejar las instancias del juego, las collisiones, el tiempo transcurrido, el ganador, etcétera.
 */
class Stage {
  constructor() {
    this.start();
  }

  start() {
    activeKeys.clear();
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
    this.scores = {
      leftPlayer: 0,
      rightPlayer: 0,
    };
  }

  /**
   * Función llamada cada fotograma.
   * Se encarga de llamar la función update de cada una de las instancias hijas.
   * @param {number} deltaTime
   * @param {number} ms
   */
  update(deltaTime, ms) {
    const ballCollidesWithLeftPlayer = testRectangleRectangleOverlap(this.ball.rect, this.leftPlayer.rect);
    const ballCollidesWithRightPlayer = testRectangleRectangleOverlap(this.ball.rect, this.rightPlayer.rect);

    this.ball.isCollidingWithLeftPlayer = ballCollidesWithLeftPlayer;
    this.ball.isCollidingWithRightPlayer = ballCollidesWithRightPlayer;

    this.leftPlayer.update(deltaTime, ms);
    this.rightPlayer.update(deltaTime, ms);
    this.ball.update(deltaTime);

    if (this.ball.collidedWithRightSide) {
      this.scores.leftPlayer++;
    }

    if (this.ball.collidedWithLeftSide) {
      this.scores.rightPlayer++;
    }

    if (this.scores.rightPlayer > 5) {
      alert("Ganó el jugador derecho");
      this.start();
    }

    if (this.scores.leftPlayer > 5) {
      alert("Ganó el jugador izquierdo");
      this.start();
    }
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
