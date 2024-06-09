const get_makes = {
	async: true,
	crossDomain: true,
	url: 'https://car-data.p.rapidapi.com/cars/makes',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04305f6bfcmsha61960de0a45264p1ac656jsn12283b6499d4',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};

const get_types = {
	async: true,
	crossDomain: true,
	url: 'https://car-data.p.rapidapi.com/cars/types',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04305f6bfcmsha61960de0a45264p1ac656jsn12283b6499d4',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};


const get_years = {
	async: true,
	crossDomain: true,
	url: 'https://car-data.p.rapidapi.com/cars/years',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04305f6bfcmsha61960de0a45264p1ac656jsn12283b6499d4',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};

	
const get_models = {
	async: true,
	crossDomain: true,
	url: 'https://car-data.p.rapidapi.com/cars/models',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04305f6bfcmsha61960de0a45264p1ac656jsn12283b6499d4',
		'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
	}
};


	
$.ajax(get_makes).done(function (response) {
	response.forEach(element => {
		$('#make_select_1').append(`<option value="${element}">${element}</option>`);
	});
});


$.ajax(get_makes).done(function (response) {
	response.forEach(element => {
		$('#make_select_2').append(`<option value="${element}">${element}</option>`);
	});
});


$("#make_select_1").change(function () {
	showLoadingText()
	$.ajax(get_types).done(function (response) {
		response.forEach(element => {
			$('#type_select_1').append(`<option value="${element}">${element}</option>`);
		});
		hideLoadingText()
	});
});


$("#make_select_2").change(function () {
	showLoadingText()
	$.ajax(get_types).done(function (response) {
		response.forEach(element => {
			$('#type_select_2').append(`<option value="${element}">${element}</option>`);
		});
		hideLoadingText()
	});
});

$("#type_select_1").change(function () {
	showLoadingText()
	$.ajax(get_years).done(function (response) {
		response = response.sort(function(a, b){return b - a});
		response.forEach(element => {
			$('#year_select_1').append(`<option value="${element}">${element}</option>`);
		});
		hideLoadingText()
	});
});


$("#type_select_2").change(function () {
	showLoadingText()
	$.ajax(get_years).done(function (response) {
		response = response.sort(function(a, b){return b - a});
		response.forEach(element => {
			$('#year_select_2').append(`<option value="${element}">${element}</option>`);
		});
		hideLoadingText()
	});
});


$("#year_select_1").change(function () {
	showLoadingText()
	$.ajax(get_models).done(function (response) {
		response.forEach(element => {
			$('#model_select_1').append(`<option value="${element}">${element}</option>`);
		});
		hideLoadingText()
	});
});


$("#year_select_2").change(function () {
	showLoadingText()
	$.ajax(get_models).done(function (response) {
		response.forEach(element => {
			$('#model_select_2').append(`<option value="${element}">${element}</option>`);
		});
		hideLoadingText()
	});
});

document.addEventListener("DOMContentLoaded", function() {
    const parentDropdowns = document.getElementsByClassName("select_parent");

    Array.from(parentDropdowns).forEach(function(parentDropdown) {
        parentDropdown.addEventListener("change", function(event) {
            const nextDropdown = parentDropdown.nextElementSibling; 
            if (nextDropdown && nextDropdown.classList.contains("select_child")) {
                nextDropdown.style.display = "block"; 
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const childDropdowns = document.getElementsByClassName("select_child");

    Array.from(childDropdowns).forEach(function(childDropdown) {
        childDropdown.addEventListener("change", function(event) {
            const nextDropdown2 = childDropdown.nextElementSibling; 
            if (nextDropdown2 && nextDropdown2.classList.contains("select_child2")) {
                nextDropdown2.style.display = "block"; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const siblingDropdowns = document.getElementsByClassName("select_child2");

    Array.from(siblingDropdowns).forEach(function(siblingDropdown) {
        siblingDropdown.addEventListener("change", function(event) {
            const nextDropdown3 = siblingDropdown.nextElementSibling; 
            if (nextDropdown3 && nextDropdown3.classList.contains("select_child3")) {
                nextDropdown3.style.display = "block"; 
            }
        });
    });
});

function showLoadingText() {
    $("#loading-text").css("display", "block");
}

function hideLoadingText() {
    $("#loading-text").css("display", "none");
}

var body = document.body
var box = document.querySelector('.box')
var ball = document.querySelector('.ball')
var navcontainer = document.querySelector('.nav-container')
var navbar = document.querySelector('.navbar')
var text = document.querySelectorAll('.text')
var dropdown = document.querySelectorAll('.select_parent')
var dropdownchild = document.querySelectorAll('.select_child')
var dropdownchild2 = document.querySelectorAll('.select_child2')
var dropdownchild3 = document.querySelectorAll('.select_child3') 
var checkbox = document.getElementById('check');



function applyTheme(theme) {
	if (theme === 'dark') {
	  checkbox.checked = true;
    box.setAttribute('style','background-color:rgb(255, 255, 255);')
    ball.setAttribute('style','transform:translatex(100%);')
    body.setAttribute('style','background-color:rgb(20, 20, 20); color:rgb(245, 230, 230);')
    navcontainer.setAttribute('style','background-color:rgb(20, 20, 20); color:rgb(245, 230, 230);')
    text.forEach(function(text) {
		text.style.color = "white"; 
	  });
	dropdown.forEach(function(dropdown) {
		dropdown.style.color = "black";
		dropdown.style.backgroundColor = "white" 
	  });
	dropdownchild.forEach(function(dropdownchild) {
		dropdownchild.style.color = "black";
		dropdownchild.style.backgroundColor = "white" 
	  });
	  dropdownchild2.forEach(function(dropdownchild2) {
		dropdownchild2.style.color = "black";
		dropdownchild2.style.backgroundColor = "white" 
	  });
	  dropdownchild3.forEach(function(dropdownchild3) {
		dropdownchild3.style.color = "black";
		dropdownchild3.style.backgroundColor = "white" 
	  });
	   
	} else {
    checkbox.checked = false;
    box.setAttribute('style','background-color:rgb(20, 20, 20); rgb(255, 255, 255);')
    ball.setAttribute('style','transform:translatex(0%);')
    body.setAttribute('style','background-color:rgb(245, 230, 230); color:rgb(20, 20, 20);')
    navcontainer.setAttribute('style','background-color:rgb(245, 230, 230); color:rgb(20, 20, 20;')
    navbar.setAttribute('style','background-color:rgb(0, 0, 0);')
	text.forEach(function(text) {
		text.style.color = "black"; 
	  });
	dropdown.forEach(function(dropdown) {
		dropdown.style.color = "white";
		dropdown.style.backgroundColor = "black" 
	  });
	dropdownchild.forEach(function(dropdownchild) {
		dropdownchild.style.color = "white";
		dropdownchild.style.backgroundColor = "black" 
	  });
	  dropdownchild2.forEach(function(dropdownchild2) {
		dropdownchild2.style.color = "white";
		dropdownchild2.style.backgroundColor = "black" 
	  });
	  dropdownchild3.forEach(function(dropdownchild3) {
		dropdownchild3.style.color = "white";
		dropdownchild3.style.backgroundColor = "black" 
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

