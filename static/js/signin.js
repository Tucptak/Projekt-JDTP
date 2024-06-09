var body = document.body;
var box = document.querySelector('.box');
var ball = document.querySelector('.ball');
var navcontainer = document.querySelector('.nav-container');
var navbar = document.querySelector('.navbar');
var text = document.querySelectorAll('.text');
var checkbox = document.getElementById('check');
var inputs = document.querySelectorAll('input');


function applyTheme(theme) {
	if (theme === 'dark') {
		checkbox.checked = true;
		box.setAttribute('style', 'background-color:rgb(255, 255, 255);');
		ball.setAttribute('style', 'transform:translatex(100%);');
		body.setAttribute('style', 'background-color:rgb(20, 20, 20); color:rgb(245, 230, 230);');
		navcontainer.setAttribute('style', 'background-color:rgb(20, 20, 20); color:rgb(245, 230, 230);');
		navbar.setAttribute('style', 'background-color:rgb(0, 0, 0);');
		text.forEach(function (text) {
			text.style.color = 'white';
		});
		inputs.forEach(function (input) {
			input.style.color = 'black';
			input.style.backgroundColor = '#CECECE';
		});
	} else {
		checkbox.checked = false;
		box.setAttribute('style', 'background-color:rgb(20, 20, 20);');
		ball.setAttribute('style', 'transform:translatex(0%);');
		body.setAttribute('style', 'background-color:rgb(245, 230, 230); color:rgb(20, 20, 20);');
		navcontainer.setAttribute('style', 'background-color:rgb(245, 230, 230); color:rgb(20, 20, 20);');
		navbar.setAttribute('style', 'background-color:rgb(0, 0, 0);');
		text.forEach(function (text) {
			text.style.color = 'black';
		});
		inputs.forEach(function (input) {
			input.style.color = 'white';
			input.style.backgroundColor = 'black';
		});
	}
}

checkbox.addEventListener('change', function () {
	if (this.checked) {
		localStorage.setItem('theme', 'dark');
		applyTheme('dark');
	} else {
		localStorage.setItem('theme', 'light');
		applyTheme('light');
	}
});


window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
});