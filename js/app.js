/****************/
/*Все переменные*/
/************** */
const tabs = document.querySelectorAll(".first_nav");
const contents = document.querySelectorAll(".info");
const btnActive = document.getElementsByClassName("nav_link");

const search = document.querySelector('#searchInpt');
const allLinks = document.querySelectorAll('.tab');
const notAll = document.querySelector(".not")

let splashInput = document.querySelector(".custom-counter-input");
 
//Переменные формы
const form_a = document.querySelector('#form-entr');
const form_b = document.querySelector('#form');
//Переменные авторизация и регистрация
const toformReg = document.querySelector('#form1');
const toformEntr = document.querySelector('#form2');
 
/*Все функции*/ 
/*Функция смены табов формы регистрации */
function changeForm() {
	document.querySelector('.form.active').classList.remove('active');
	this.closest('.form').classList.add('active');	
}
/*Функция поиска товаров*/
function SearchFunc() {
	onkeyup = function (event) {
	    const regex = new RegExp(event.target.value.toLowerCase());
	    allLinks.forEach(element => {
	        if (regex.test(element.textContent.toLowerCase())) {
	            element.style.display = '';
	        } else {
	            element.style.display = 'none';
	        }
	    })
	}
}
/*Управление вкладками*/
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {
 
		//удаляем активный класс с вкладок
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("tab_active");
		}
		// добавляем активный класс
		tabs[i].classList.add("tab_active");
		//удаляем активный класс с блоков содержимого
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("content_active");
		}
		// добавляем активный класс
		contents[i].classList.add("content_active");
 
	});
}
/*Функция раскрытия саб-меню */
function myFunction() {
    let x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}


let splashVal = parseFloat(splashInput.value);
document.querySelector(".js-counter-input-appl__plus").onclick = function() {
  splashInput.value = ++splashVal;
}
document.querySelector(".js-counter-input-appl__minus").onclick = function() {
  if (splashVal > 1) {
    splashInput.value = --splashVal;
  } 
} 

