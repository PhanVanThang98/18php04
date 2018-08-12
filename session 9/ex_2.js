function changeImage(image, name, color) {
	document.getElementById('changeImage').src = image;
	document.getElementById('textDemo').innerHTML = name;
	document.getElementById('textDemo').style.color = color;
}
