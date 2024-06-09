var body = document.body
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')
var navcontainer = document.querySelector('.nav-container')
var navbar = document.querySelector('.navbar')
var text = document.querySelectorAll('.text')



check.addEventListener('change',function(){
  if(this.checked == true){
    box.setAttribute('style','background-color:rgb(255, 255, 255);')
    ball.setAttribute('style','transform:translatex(100%);')
    body.setAttribute('style','background-color:rgb(20, 20, 20); color:rgb(245, 230, 230);')
    navcontainer.setAttribute('style','background-color:rgb(20, 20, 20); color:rgb(245, 230, 230);')
    text.forEach(function(text) {
		text.style.color = "white"; 
	  });

  }


  if(this.checked == false){
    box.setAttribute('style','background-color:rgb(20, 20, 20); rgb(255, 255, 255);')
    ball.setAttribute('style','transform:translatex(0%);')
    body.setAttribute('style','background-color:rgb(245, 230, 230); color:rgb(20, 20, 20);')
    navcontainer.setAttribute('style','background-color:rgb(245, 230, 230); color:rgb(20, 20, 20;')
    navbar.setAttribute('style','background-color:rgb(0, 0, 0);')
    text.forEach(function(text) {
		text.style.color = "black"; 
	  }); 

  }
})
