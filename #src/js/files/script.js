//header-logo color
let wrapperBody = document.querySelector('.wrapper');
let headerLogo = document.querySelector('.header__logo');
let headerLogoImg = headerLogo.querySelector('img');
let headerLogoImgSourse = headerLogo.querySelector('source');
headerLogoImgSourse.remove();

if (wrapperBody.classList.contains('_dark-header')) {
	changeHeaderLogo();
}
function changeHeaderLogo() {
	let dataAlt = headerLogoImg.getAttribute('src');
	headerLogoImg.setAttribute('src', headerLogoImg.getAttribute('data-alt'));
	headerLogoImg.setAttribute('data-alt', dataAlt);
}
/* SLIDE UP */
let slideUp = (target, duration = 500) => {

	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.boxSizing = 'border-box';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		//alert("!");
	}, duration);
}

/* SLIDE DOWN */
let slideDown = (target, duration = 500) => {

	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none') display = 'block';
	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = 'border-box';
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
	}, duration);
}

/* TOOGLE */
var slideToggle = (target, duration = 500) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
}

// FAQ
let faqBtns = document.querySelectorAll('.faq__item-btn');
if (faqBtns.length > 0) {
	for (let index = 0; index < faqBtns.length; index++) {
		const faqBtn = faqBtns[index];
		const faqItem = faqBtn.closest('.faq__item');
		const answerItem = faqItem.querySelector('.faq__answer');
		faqBtn.addEventListener("click", function (e) {
			faqItem.classList.toggle('_active');
			slideToggle(answerItem, 500);
		});
	}
}

//req btn
let reqBtn = document.querySelector('.requisites__btn');
if (reqBtn) {
	let reqBody = document.querySelector('.requisites__body');
	reqBtn.addEventListener("click", function (e) {
		reqBody.classList.toggle('_active');
		reqBtn.classList.toggle('_active');
		slideToggle(reqBody, 100);
	});
}

//payment change
let cartBtn = document.querySelector('.payment__type-item_cart');
let cartForm = document.querySelector('.payment__form-1');
let cartBtnBody = document.querySelector('.payment__type-item-cont_cart');
// let cartFormCont = document.querySelector('.payment__data-cart-cont');

let sberBtn = document.querySelector('.payment__type-item_sber');
let sberForm = document.querySelector('.payment__form-2');
let sberBtnBody = document.querySelector('.payment__type-item-cont_sber');
// let sberFormCont = document.querySelector('.payment__data-sber-cont');

// let cartSumForm = document.querySelector('.sum-form_1');
// let sberSumForm = document.querySelector('.sum-form_2');

if (cartBtn) {
	cartBtn.addEventListener("click", function (e) {
		cartBtnBody.classList.add('_active');
		cartForm.classList.add('_active');
		sberBtnBody.classList.remove('_active');
		sberForm.classList.remove('_active');
		// cartFormCont.classList.add('_active');
		// cartSumForm.classList.add('_active');

		// sberFormCont.classList.remove('_active');
		// sberSumForm.classList.remove('_active');
	});
}
if (sberBtn) {
	sberBtn.addEventListener("click", function (e) {
		cartBtnBody.classList.remove('_active');
		cartForm.classList.remove('_active');
		sberBtnBody.classList.add('_active');
		sberForm.classList.add('_active');
		// cartFormCont.classList.remove('_active');
		// cartSumForm.classList.remove('_active');
		// sberFormCont.classList.add('_active');
		// sberSumForm.classList.add('_active');
	});
}

// payment sum
let paymentBtns = document.querySelectorAll('.sum-form__item');
if (paymentBtns.length > 0) {
	for (let index = 0; index < paymentBtns.length; index++) {
		const paymentBtn = paymentBtns[index];
		paymentBtn.addEventListener("click", function (e) {
			for (let index = 0; index < paymentBtns.length; index++) {
				const paymentBtn = paymentBtns[index];
				paymentBtn.classList.remove('_active');
			}
			paymentBtn.classList.add('_active');
		});
	}
}
/*
let paymentChildBtns = document.querySelectorAll('.sum-form__item_children');
if (paymentChildBtns.length > 0) {
	for (let index = 0; index < paymentChildBtns.length; index++) {
		const paymentChildBtn = paymentChildBtns[index];
		paymentChildBtn.addEventListener("click", function (e) {
			for (let index = 0; index < paymentChildBtns.length; index++) {
				const paymentChildBtn = paymentChildBtns[index];
				paymentChildBtn.classList.remove('_active');
			}
			paymentChildBtn.classList.add('_active');
		});
	}
}
*/
// menu__arrow
let menuArrows = document.querySelectorAll('.menu__arrow');
if (menuArrows.length > 0) {
	for (let index = 0; index < menuArrows.length; index++) {
		const menuArrow = menuArrows[index];
		const menuItem = menuArrow.closest('li');
		const subMenuItem = menuItem.querySelector('.menu__sub-list');
		menuArrow.addEventListener("click", function (e) {
			menuItem.classList.toggle('_active');
			slideToggle(subMenuItem, 400);
		});
	}
}

//y_map
let map_container = document.getElementById('map-container');
let options_map = {
	once: true,
	passive: true,
	capture: true
};
if (map_container) {
	map_container.addEventListener('click', start_lazy_map, options_map);
	map_container.addEventListener('mouseover', start_lazy_map, options_map);
	map_container.addEventListener('touchstart', start_lazy_map, options_map);
	map_container.addEventListener('touchmove', start_lazy_map, options_map);
	let map_loaded = false;
	function start_lazy_map() {
		if (!map_loaded) {
			let map_block = document.getElementById('ymap_lazy');
			map_loaded = true;
			map_block.setAttribute('src', map_block.getAttribute('data-src'));
			map_block.removeAttribute('data-src');
			console.log('YMAP LOADED');
		}
	}
}

//franchise video
let vidPlayBtn = document.querySelector('.franchise-video__play-button');
if (vidPlayBtn) {
	let video = document.querySelector('.franchise-video__video');
	let videoOverlay = document.querySelector('.franchise-video__overlay');
	vidPlayBtn.addEventListener("click", function (e) {
		videoOverlay.classList.add('_hide');
		video.play();
	});
}
//article video
let articleVidPlayBtn = document.querySelector('.article-video__play-button');
if (articleVidPlayBtn) {
	let video = document.querySelector('.article-video__video');
	let videoOverlay = document.querySelector('.article-video__overlay');
	articleVidPlayBtn.addEventListener("click", function (e) {
		videoOverlay.classList.add('_hide');
		video.play();
	});
}

//simple bar
let reviewTexts = document.querySelectorAll('.reviews-item__text-cont');
if (reviewTexts.length > 0) {
	for (let index = 0; index < reviewTexts.length; index++) {
		const reviewText = reviewTexts[index];
		new SimpleBar(reviewText);
	}
}

// articles-category-list__item adapt

let articleCategoryListItems = document.querySelectorAll('.articles-category-list__item');

if (w < 768) {
	if (articleCategoryListItems.length > 0) {
		for (let index = 0; index < articleCategoryListItems.length; index++) {
			const articleCategoryListItem = articleCategoryListItems[index];
			let articleCategoryListItemLink = articleCategoryListItem.querySelector('.articles-category-list__item-link');
			articleCategoryListItem.append(articleCategoryListItemLink);
		}
	}
}
