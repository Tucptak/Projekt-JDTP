var body = document.body
var check = document.querySelector('#check')
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')


check.addEventListener('change',function(){
  if(this.checked == true){
    box.setAttribute('style','background-color:rgb(252, 251, 244);')
    ball.setAttribute('style','transform:translatex(100%);')
    body.setAttribute('style','background-color:rgb(20, 20, 20); rgb(252, 251, 244);') 

  }


  if(this.checked == false){
    box.setAttribute('style','background-color:rgb(20, 20, 20); rgb(252, 251, 244);')
    ball.setAttribute('style','transform:translatex(0%);')
    body.setAttribute('style','background-color:rgb(252, 251, 244); color:rgb(20, 20, 20);')

  }
})

