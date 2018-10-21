/**
 * Clase encargada de definir el ciclo principal del juego, además del estado actual del juego.
 */
class Game {
  constructor() {
    this.lastTime = 0;
    // Petición para llamar loop() en el siguiente frame.
    requestAnimationFrame((ms) => this.loop(ms));
  }

  /**
   * Ciclo principal del juego.
   * @param {number} ms - Número de milisegundos durante los cuales se ha estado ejecutando el juego.
   */
  loop(ms) {
    // Se calcula la diferencia de tiempo (en segundos) entre el frame actual y el anterior.
    const deltaTime = this.getDeltaTime(ms, this.lastTime);

    console.log(deltaTime);

    // Se registra el tiempo actual, para tener acceso a él en el siguiente frame.
    this.lastTime = ms;

    // Se repite la petición para llamar loop() en el siguiente frame.
    requestAnimationFrame((newMs) => this.loop(newMs));
  }

  /**
  * Calcula un "delta time", o "cambio de tiempo" basado en el último número de milisegundos que han pasado desde el último frame.
  * Para más información:
  * http://www.creandovideojuegos.com/desarrollo/entendiendo-delta-time/
  * https://en.wikipedia.org/wiki/Delta_timing
  * @param {number} currentTime - Tiempo actual en milisegundos.
  * @param {number} lastTime - Tiempo registrado en el último frame, en milisegundos.
  */
  getDeltaTime(currentTime = 0, lastTime = 0) {
    let deltaTime = (currentTime - lastTime) || (1 / 60);
    deltaTime = isNaN(deltaTime) ? (1 / 60) : deltaTime / 1000;

    // En caso de que se tenga un cambio de tiempo mayor a 200 milisegundos,
    // se asume que el juego perdió el foco y se devuelven 16ms de dt.
    if (deltaTime >= 0.2) {
      deltaTime = (1 / 60);
    }

    return deltaTime;
  }
}