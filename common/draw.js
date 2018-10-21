/**
 * API de dibujo mediante el canvas.
 */

const canvas = document.getElementsByTagName("canvas")[0];
const context = canvas.getContext("2d");

/**
 * Dibuja un rectángulo.
 * @param {number} x - Coordenada X del rectángulo medida en pixeles.
 * @param {number} y - Coordenada Y del rectángulo medida en pixeles.
 * @param {number} width - Ancho del rectángulo medido en pixeles.
 * @param {number} height - Alto del rectángulo medido en pixeles.
 */
function drawRectangle(x = 0, y = 0, width = 0, height = 0) {
  context.beginPath();
  context.rect(x, y, width, height);
  context.closePath();
}

/**
 * Dibuja un círculo.
 * @param {number} x - Coordenada X del círculo medida en pixeles.
 * @param {number} y - Coordenada Y del círculo medida en pixeles.
 * @param {number} radius - Radio del círculo medido en pixeles.
 */
function drawCircle(x = 0, y = 0, radius = 0) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.closePath();
}

/**
 * Dibuja una imagen.
 * @param {Image} image - Imagen a dibujar.
 * @param {number} x - Coordenada X de la imagen medida en pixeles.
 * @param {number} y - Coordenada Y de la imagen medida en pixeles.
 * @param {number} width - Ancho de la imagen medido en pixeles.
 * @param {number} height - Alto de la imagen medido en pixeles.
 */
function drawImage(image, x = 0, y = 0, width = 0, height = 0) {
  context.drawImage(image, x, y, width, height, 0, 0, 1, 1);
}

/**
 * Rellena el dibujo actual con el color brindado.
 * @param {string} color - Color CSS para rellenar el dibujo actual.
 * https://www.quackit.com/css/css_color_codes.cfm
*/
function fillColor(color) {
  context.fillStyle = color;
  context.fill();
}

/**
 * Limpia el canvas completamente.
 */
function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Guarda el estado actual del canvas.
 * Más información: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save
 */
function save() {
  context.save();
}

 /**
  * Aplica una transformación al estado actual del canvas.
  * Más info: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform
  * @param {number[]} matrix
  */
function transform(matrix) {
  context.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
}

/**
 * Restaura el estado del canvas al último estado guardado utilizando save().
 * Más información: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore
 */
function restore() {
  context.restore();
}