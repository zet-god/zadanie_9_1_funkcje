//alert('hello');

function getTriangleArea(a, h) {
	if (a >= 0 && h >= 0) {
		return a * h / 2;
	}
	else {
		console.log('Nieprawidłowe dane');
	}
}

var triangleArea1 = getTriangleArea(10, 15);
var triangleArea2 = getTriangleArea(8, 18);
var triangleArea3 = getTriangleArea(2.5, 6.8);