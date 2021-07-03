let body = document.querySelector('body');
let w = body.clientWidth;

//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let sliderMoreAbout = new Swiper('.index-more-about__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 20,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	lazy: true,
	// Dotts
	pagination: {
		el: '.index-more-about__pagging',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.index-more-about__slider-next',
		prevEl: '.index-more-about__slider-prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

var teacherInfoSlider = new Swiper('.teacher-slider__info-slider', {
	effect: 'fade',
	/*
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	// observer: true,
	// observeParents: true,
	slidesPerView: 1,
	// spaceBetween: 0,
	autoHeight: true,
	// speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	// loop: true,
	//preloadImages: false,
	// lazy: true,
	// Dotts
	// pagination: {
	// 	el: '.teacher-slider__pagging',
	// 	clickable: true,
	// },
	// Arrows
	// navigation: {
	// 	nextEl: '.teacher-slider__slider-next',
	// 	prevEl: '.teacher-slider__slider-prev',
	// },
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// }
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let teacherPhotoSlider = new Swiper('.teacher-slider__photo-slider', {
	effect: 'fade',
	/*
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	thumbs: {
		swiper: teacherInfoSlider,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	lazy: true,
	// Dotts
	pagination: {
		el: '.teacher-slider__pagging',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.teacher-slider__slider-next',
		prevEl: '.teacher-slider__slider-prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
		slideChange: function () {
			let activeIndex = this.activeIndex + 1;

			let activeSlide = document.querySelector(`.teacher-slider__info-slider .swiper-slide:nth-child(${activeIndex})`);
			let nextSlide = document.querySelector(`.teacher-slider__info-slider .swiper-slide:nth-child(${activeIndex + 1})`);
			let prevSlide = document.querySelector(`.teacher-slider__info-slider .swiper-slide:nth-child(${activeIndex - 1})`);

			if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slideNext()
			} else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
				this.thumbs.swiper.slidePrev()
			}
		}
	},

	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

//reviews aliser
let sliderReviews = new Swiper('.reviews__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	// lazy: true,
	// Dotts
	pagination: {
		el: '.reviews-slider__pagging',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.reviews-slider__slider-next',
		prevEl: '.reviews-slider__slider-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
			slidesPerGroup: 1,
		},
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		992: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

//articles-category-list__item-slider


console.log(w);
if (w > 767) {
	let categorySliderConts = document.querySelectorAll('.articles-category-list__item-slider-cont');
	if (categorySliderConts.length > 0) {
		for (let index = 0; index < categorySliderConts.length; index++) {
			const categorySliderCont = categorySliderConts[index];
			let categorySliderBlock = categorySliderCont.querySelector('.articles-category-list__item-slider');
			let btnNext = categorySliderCont.querySelector('.articles-category-list__item-slider-next');
			let btnPrev = categorySliderCont.querySelector('.articles-category-list__item-slider-prev');
			console.log(btnNext);
			console.log(btnPrev);
			let categorySlider = new Swiper(categorySliderBlock, {
				observer: true,
				observeParents: true,
				slidesPerView: 3,
				spaceBetween: 30,
				autoHeight: true,
				speed: 800,
				loop: true,
				// Arrows
				navigation: {
					nextEl: btnNext,
					prevEl: btnPrev,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
						autoHeight: true,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
				},

				on: {
					lazyImageReady: function () {
						ibg();
					},
				}
			});
		}
	}
}



