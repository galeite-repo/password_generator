
let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let passwordElement = document.querySelector('#password');


let containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_'
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;



slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide")
    passwordElement.innerHTML = pass;
    novaSenha = pass

}
function copyPassword (){
    navigator.clipboard.writeText(novaSenha);
    toast('Senha Copiada', 2000)
}

function fillWidth(elem, timer, limit) {
	if (!timer) { timer = 3000; }	
	if (!limit) { limit = 100; }
	var width = 1;
	var id = setInterval(frame, timer / 100);
		function frame() {
		if (width >= limit) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
		}
	}
};

function toast(msg, timer) {
	if (!timer) { timer = 3000; }
	var $elem = $("<div class='toastWrap'><span class='toast'>" + msg + "<b></b><div class='timerWrap'><div class='timer'></div></div></span></div>");
	$("#toast").append($elem); //top = prepend, bottom = append
	$elem.slideToggle(100, function() {
		$('.timerWrap', this).first().outerWidth($elem.find('.toast').first().outerWidth() - 10);
		if (!isNaN(timer)) {
			fillWidth($elem.find('.timer').first()[0], timer);
			setTimeout(function() {
				$elem.fadeOut(function() {
					$(this).remove();
				});
			}, timer);			
		}
	});
}

$("#toast").on("click", "b", function() {
	$(this).closest('.toastWrap').remove();
})