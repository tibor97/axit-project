var hamburgerMenu = document.querySelector('.c-hamburger-menu');
var nav = document.querySelector('nav');
var navbarList = document.querySelector('.c-navbar-list');
var navbarListItems = document.querySelectorAll('.c-navbar-link');

hamburgerMenu.onclick = function() {
    navbarList.classList.toggle('active');
    // navbarList.classList.add('transition');
    hamburgerMenu.classList.toggle('c-hamburger-menu--toggle');
}

nav.ontransitionend = function() {
    // navbarList.classList.remove('transition');
}

navbarListItems.forEach(function(navItems) {
	navItems.onclick = function(){
		if(event.target.matches('.c-navbar-link')){
			navbarList.classList.remove('active');
    		hamburgerMenu.classList.toggle('c-hamburger-menu--toggle');
		}
	}
});


var modalWrapper = document.querySelector('.c-modal-wrapper');
var buttonModal = document.querySelector('#c-button--modal');
var buttonClose = document.querySelector('.c-button--close');

buttonModal.onclick = function() {
	modalWrapper.classList.add('c-modal-active');
}

window.onclick = function() {
	if (event.target == modalWrapper) {
    	modalWrapper.classList.remove('c-modal-active');
	}
}

buttonClose.onclick = function() {
	modalWrapper.classList.remove('c-modal-active');
}

var download = document.querySelector("#c-button-download");

download.onclick = function() {
	var link = document.createElement("a");
    
    link.setAttribute("download", 'index.html');
    link.href = 'index.html';
    document.body.appendChild(link);
    link.click();
}