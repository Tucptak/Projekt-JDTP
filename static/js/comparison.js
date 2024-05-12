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
	
	$.ajax(get_types).done(function (response) {
		response.forEach(element => {
			$('#type_select_1').append(`<option value="${element}">${element}</option>`);
		});
	});
});


$("#make_select_2").change(function () {
	
	$.ajax(get_types).done(function (response) {
		response.forEach(element => {
			$('#type_select_2').append(`<option value="${element}">${element}</option>`);
		});
	});
});

$("#type_select_1").change(function () {
	
	$.ajax(get_years).done(function (response) {
		response = response.sort(function(a, b){return b - a});
		response.forEach(element => {
			$('#year_select_1').append(`<option value="${element}">${element}</option>`);
		});
	});
});


$("#type_select_2").change(function () {
	
	$.ajax(get_years).done(function (response) {
		response = response.sort(function(a, b){return b - a});
		response.forEach(element => {
			$('#year_select_2').append(`<option value="${element}">${element}</option>`);
		});
	});
});


$("#year_select_1").change(function () {
	
	$.ajax(get_models).done(function (response) {
		response.forEach(element => {
			$('#model_select_1').append(`<option value="${element}">${element}</option>`);
		});
	});
});


$("#year_select_2").change(function () {
	
	$.ajax(get_models).done(function (response) {
		response.forEach(element => {
			$('#model_select_2').append(`<option value="${element}">${element}</option>`);
		});
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