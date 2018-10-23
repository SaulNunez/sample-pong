/**
 * Devuelve un número entero aleatorio entre 0 y x
 * @param {number} x
 * @returns {number}
 */
function randomInt(x) {
    return Math.floor(Math.random() * x);
}

/**
 * Devuelve un número aleatorio entre n1 y n2
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
function randomRange(n1, n2) {
    return Math.min(n1, n2) + randomInt(Math.abs(n2 - n1));
}

/**
 * Devuelve un elemento del arreglo de manera aleatoria
 * @param {any[]} array 
 * @returns {any}
 */
function randomChoose(array) {
    return array[randomInt(array.length)];
}