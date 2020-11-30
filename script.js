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

// var tab = document.querySelectorAll(".c-tab");

// tab.forEach(function(tab) {
// 	tab.onclick = function(e){
// 		e.preventDefault();
//   		const active = document.querySelector('.c-tab--active');

//   		if(active){
//     		active.classList.remove('c-tab--active');
//   		}
//   		e.currentTarget.classList.add('c-tab--active');
// 	};
// });


// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("c-tabs__content-wrapper");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("c-tab");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" c-tab--active", "");
//   }

//   document.getElementById(tabName).style.display = "flex";
//   evt.currentTarget.className += "  c-tab--active";

// }

// document.getElementById("defaultOpen").click();

const tabs = document.querySelectorAll(".c-tabs-wrapper");
const tab = document.querySelectorAll(".c-tab");
const tabContent = document.querySelectorAll(".c-tabs__content");

function onTabClick(event) {

  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("c-tab--active");
  }

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("c-tabs__content--active");
  }

  event.target.classList.add('c-tab--active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  document.getElementById('c-tabs__content-wrapper').getElementsByClassName(classString)[0].classList.add("c-tabs__content--active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', onTabClick, false);
}