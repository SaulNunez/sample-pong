/// <reference path="rectangle.js" />
/// <reference path="circle.js" />
/// <reference path="point.js" />

/**
 * Determina si hay una colisión entre un objeto de tipo rectángulo y un objeto de tipo punto.
 * @param {Rectangle} rect - Referencia al objeto rectángulo.
 * @param {Point} point - Referncia al objeto punto.
 * @returns {boolean}
 */
function testRectanglePointOverlap(rect, point) {
	return point.x >= rect.x && point.x <= rect.x + rect.width && point.y >= rect.y && point.y <= rect.y + rect.height;
}

/**
 * Determina si hay una colisión entre dos objetos de tipo círculo.
 * @param {Circle} circleA - Referencia al primer círculo.
 * @param {Circle} circleB - Referencia al segundo círculo.
 * @returns {boolean}
 */
function testCircleCircleOverlap(circleA, circleB) {
    const distX = circleA.x - circleB.x;
    const distY = circleA.y - circleB.y;

    return (distX ** 2 + distY ** 2) < (circleA.radius + circleB.radius) ** 2;
}

/**
 * Determina si hay una colisión entre dos objetos de tipo rectángulo.
 * @param {Rectangle} rect - Referencia al primer rectángulo.
 * @param {Circle} circle - Referencia al segundo rectángulo.
 * @returns {boolean}
 */
function testRectangleCircleOverlap(rect, circle) {
    const distX = abs(circle.x - rect.x);
    const distY = abs(circle.y - rect.y);

    if (distX > (rect.width / 2 + circle.radius)) { return false; }
    if (distY > (rect.height / 2 + circle.radius)) { return false; }

    if (distX <= (rect.width / 2)) { return true; } 
    if (distY <= (rect.height / 2)) { return true; }

    cornerDistance = (distX - rect.width / 2) ** 2 + (distY - rect.height / 2) ** 2;

    return cornerDistance <= (circle.radius ** 2);
}

/**
 * Determina si hay una colisión entre dos objetos de tipo rectángulo.
 * @param {Rectangle} rectA - Referencia al primer rectángulo.
 * @param {Rectangle} rectB - Referencia al segundo rectángulo.
 * @returns {boolean}
 */
function testRectangleRectangleOverlap(rectA, rectB) {
	const xAxis = (rectA.left >= rectB.left && rectA.left <= rectB.right) || (rectA.right >= rectB.left && rectA.right <= rectB.right);
	const yAxis = (rectA.top >= rectB.top && rectA.top <= rectB.bottom) || (rectA.bottom >= rectB.top && rectA.bottom <= rectB.bottom);
	return xAxis && yAxis;
}


