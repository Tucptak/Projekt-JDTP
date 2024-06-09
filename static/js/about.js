document.getElementById("cards").onmousemove = e => {
	for(const card of document.getElementsByClassName("card")) {
		const rect = card.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	}
}

var body = document.body
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')
var navcontainer = document.querySelector('.nav-container')
var navbar = document.querySelector('.navbar')
var text = document.querySelectorAll('.text')
var card = document.querySelectorAll('.card-content')
var checkbox = document.getElementById('check');




function applyTheme(theme) {
	if (theme === 'dark') {
	  checkbox.checked = true;
    box.setAttribute('style','background-color:rgb(255, 255, 255);')
    ball.setAttribute('style','transform:translatex(100%);')
    body.setAttribute('style','background-color:rgb(20, 20, 20); color:rgb(245, 230, 230);')
    navcontainer.setAttribute('style','background-color:rgb(20, 20, 20); color:rgb(245, 230, 230);')
    card.forEach(function(card) {
		card.style.backgroundColor = "rgb(245, 230, 230)"; 
	  });
	text.forEach(function(text) {
		text.style.color = "black"; 
	  });
	
	} else {
    checkbox.checked = false;
    box.setAttribute('style','background-color:rgb(20, 20, 20); rgb(255, 255, 255);')
    ball.setAttribute('style','transform:translatex(0%);')
    body.setAttribute('style','background-color:rgb(245, 230, 230); color:rgb(20, 20, 20);')
    navcontainer.setAttribute('style','background-color:rgb(245, 230, 230); color:rgb(20, 20, 20;')
    navbar.setAttribute('style','background-color:rgb(0, 0, 0);')
    card.forEach(function(card) {
		card.style.backgroundColor = "rgb(20, 20, 20)"; 
	  });
	text.forEach(function(text) {
		text.style.color = "rgb(200, 200, 200)"; 
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
