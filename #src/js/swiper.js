
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});







const swiper = new Swiper('.image-slider', {
  // Optional parameters
  direction: 'horizontal', // islemsi ucun image-slider--> e hundurluk verilirmelidi, scrollbar,bullet ve s ekranin saginda yerlesecek
  // *  freeMode: true olanda maraqli custom scrool emele gelir
  

  // ! loop:true olarsa scrollbar islemeyecek ona gore true olanda scrollbar-i yigisdirmaq lazimdi, hemcinin --slidesPerColumn-- da islemeyecek
  // ! loop:true olarsa --slidesPerView: auto-- nun duzgun islemesi ucun
  loop: true, // sonsuz tekrarlanma her defe sona catanda yeniden 1 ci slayddan baslayacaq


  // If we need pagination
  pagination: { 
    el: '.swiper-pagination',

	 	// Буллеты
		// type: 'bullets',
		// clickable: true, // click olunanda hemin slayda kecir

		// Динамические буллеты
		// dynamicBullets: true, // aktiv slayd-qiraq noqtelerden boyuk olur

		// Кастомные буллеты, Bullet-in icinde slaydin sira nomresi yazilir
		// *className -- bullet-in standart classi-dir
		// ! eger slider verdiyimiz blokun bacground-color-i ag reng-dirse onda tekce sira nomreleri yazilacaq, basqa reng olsa --> kruq + nomre
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },

		/*-----------------------------------------------------------------------------*/

		// // Фракция 
		// // 1/slaydin-sayi meselen(1/3)
		// type: 'fraction',

		// // Кастомный вывод фракции
		// // * meselen(фото 1 из 3 )
		// renderFraction: function (currentClass, totalClass) {
		// 	return 'Фото <span class="' + currentClass + '"></span>' +
		// 		' из ' +
		// 		'<span class="' + totalClass + '"></span>';
		// },

		// Прогрессбар
		// * progressbar slayderde yuxarida olur
		// type: 'progressbar'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.image-slider__button--next',
    prevEl: '.image-slider__button--prev',
  },

// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true, // * false komp da dartma ile slayd-i deyismeye icaze vermir
	// Чувствительность свайпа
	touchRatio: 1, // * ne qeder yuxari olsa sensetive artacaq, 0-olsa simulateTouch islemeyecek
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true, // * kursoru hand-e cevirir
	
	//  Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true, // * pageUp,pageDown klavisleri
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider" //! coxlu sayda eyni slayder olsa birinde mouse-wheel elesek digerleri de deyisecek
	},

	// Автовысота
	autoHeight: false, // * slayder  hundurluyu muxtelif olan bloklara,sekillere uygun olaraq oz hundurluyunu deyisecek

	// Количество слайдов для показа
	// * slidesPerView: auto ola biler css-de .image-slider .swiper-slide - verilmis parametr slayderin enini bloka,sekile gore uygunlasdiracaq
	// * slideToClickedSlide: true olanda (yeni klik zamani slayd deyisecek) daha orqanik visual olacaq
	slidesPerView: 6, // * autoheight versek onda en hundur bloka,sekile gore slayder uygunlasacaq
	// * burada konkret saydan elave 1.2,2.3 ve s vermek olar
	// * Eger slayd-da gosterilen yuxari parametrden az slayd varsa
	// ! meselen:1 ve ya 2 onda asgidaki overflow ile slaydin islemesini dayandiririq ve ne vaxt ki, slaydlarin sayi slidesPerView: 5 -den cox olduqda slayder yeniden isleyecek onun ucun loop:false olamlidi
	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 10,

	// Количество пролистываемых слайдов
	// * bir defeye ne qeder slayd cevrilecek, meselen: slidesPerGroup: 3 versek onda her swipe-da 3 - 3 deyisecek.
	// * susmaya gore her swipe - da bir-bir slaydlar deyisir.
	//* slidersPerGroup - a 2 versek onda iki-iki slaydlar deyisecek.
	slidesPerGroup: 1,

	// Активный слайд по центру
	// ! effekt slidesPerView:1 olan islemeyecek
	// * slide-lar merkezde olacaq 1 ci slaydin solunda, sonuncu slaydin saginda bos hisse olacaq
	centeredSlides: false,

	// Стартовый слайд.
	//* slayder hansi slayd-dan baslayacagini gosterir
	// ! Burada siralama 0 olanda 1 --> 1 olanda 2 ve s ile olur
	initialSlide: 0,

	// Мультирядность
	// * duzgun islemsi ucun HTML-de --- <div class="image-slider__slide swiper-slide"> --- copy olunmalidi slaydlari artirmaq ucun
	// * slidesPerView: auto , slidesPerColumn: 1, artiq olanda islemeyecek
	// * duzgun islemesi ucun -- autoHeight: false -- olmalidi
	// * swipe elemek ucun -- slidesPerView: 2 --  (ve ya daha artiq olamlidi)
	// * css-de .image-slider -in ve ya image-slider-i ozunde saxlayan bloka mueyyen hundurluk verilmelidi
	// * css-de hemcinin slayd-larin hundurluyu de deyismelidi .image-slider .swiper-slide
	 slidesPerColumn: 1,


	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	// * lent kimi olur
	// * bu halda scroolbar,mouse-ile idare etmek, click ile sayd-in deyismesi organik gorsenir
	freeMode: false,

	// Автопрокрутка
	// * autoplay --freeMode:true-- olanda stopOnLastSlide:true,false islemir
	// autoplay: {
	// 	// Пауза между прокруткой
	// 	delay: 1000,
	// 	// Закончить на последнем слайде
	// 	stopOnLastSlide: true,
	// 	// Отключить после ручного переключения
	// 	disableOnInteraction: false
	// },

	// Скорость
	// * swipe zamani novbeti slaydda kecid sureti(hem mexaniki hem de autoplay swipe zamani)
	speed: 400,

	// Эффекты переключения слайдов.
	// Листание
	// * susmaya gore olan effect
	effect: 'slide',


	//* effect fade -> slayderde 1 slayd olanda yeni --slidesPerView:-- 1 olanda isledilir ve maraqli effect alinir
	/*
	// Эффекты переключения слайдов.
	// Cмена прозрачности
	effect: 'fade',

	// Дополнение к fade
	fadeEffect: {
		// Параллельная
		// смена прозрачности
		crossFade: true
	},
	*/
	//* effect fade------------------------------*/



	//* effect flip -----------------------------*/
	/*
	// Эффекты переключения слайдов.
	// Переворот
	effect: 'flip',

	// Дополнение к flip
	flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},
	*/
	//* effect flip ----------------------------*/



	//* effect cube ----------------------------*/
	// ! effect cube istifade eledikde .image-slider-i enine gore(width) mehdudlasdirilmalidi

	/*
	// Эффекты переключения слайдов.
	// Куб
	 effect: 'cube',

	//  Дополнение к cube
	 cubeEffect: {
	//  Настройки тени
	 	slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	 },
	 */
	
	//* effect cube ----------------------------*/
	

	// * effect coverflow ---------------------*/
	// * daha yaxsi gorsenmesi ucun --slidesPerView: 2,-- ve daha yuxari vermek olar
	/*
	// Эффекты переключения слайдов.
	// Эффект потока
	effect: 'coverflow',

	// Дополнение к coverflow
	coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
	},
	*/
	// * effect coverflow ---------------------*/
	

	// * adaptiv---------------*/
	// * burada prinsip mobile-first-deki kimidir, yeni breakpoint gosterilen qiymetden boyuk olan ekranlarda isleyecek
	// ! bele yazilisda biz swiperin yalniz bezi funksiyalarini deyise bilerik(column elemek olmaz).

	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween:5,
		},
		418:{
			slidesPerView:3,
			spaceBetween:5,
		},
		480: {
			slidesPerView: 3,
		},
		535:{
			slidesPerView:4,
		},
		690:{
			slidesPerView:5,
		},
		992: {
			slidesPerView: 6,
		} 
	},
	// * adaptiv---------------*/

	// * adaptiv viewporta gore deyil ekrana tereflerine gore,yeni hundurluk/en
		/*
	// Брейк поинты (адаптив)
	// Соотношение сторон
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
	*/

	// * adaptiv---------------*/



	// * lazy loading ------------*/
	// * slidePerView:auto yada 1 den boyuk olanda isleyecek
	// * preloadImages:false; dan basqa qalanlarinin true eliyirik
	
	// Отключить предзагрузка картинок, hansi ki, sekilleri avtomatik olaraq yukleyir(gosterir)
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: true,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: true,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},

	// Миниатюры (превью)
	// * slaydin altinda slaydda-ki sekillerin balaca varianti galeriya kimi olacaq
	// ! Html struktur lazimdi esas sliderden sonra yaradilir ve mini slayderde esas sladerde olan qeder slayd yaradilir
	// * css faylda lazimi style-lar var 
	// * html-de .swiper-container -i deyismirik ve js de yeni swiper karkas yaradmiriq
	/*
	thumbs: {
		// Свайпер с мениатюрами
		// и его настройки
		swiper: {
			el: '.image-mini-slider', // * yeni mini slider -in adi yazilir
			slidesPerView: 5,
		}
	},
	*/


	// * iki slayderi bir-birine baglamaq ucun
	// myImageSlider.controller.control = myTextSlider;
	// myTextSlider.controller.control = myImageSlider;

	// * tab ucun slider
	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
	// * tab ucun slider

	
	// * Доступность screen reader ucun
 	/*
	a11y: {

		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'This is the first slide',
		lastSlideMessage: 'This is the last slide',
		paginationBulletMessage: 'Go to slide {{index}}',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},
	*/
	// * Доступность screen reader ucun


	
	// * Запуск автоппрокрутки при наведении
	/*
	let sliderBlock = document.querySelector('.image-slider');

	// myImageSlider  - это переменная которой присвоен слайдер

	sliderBlock.addEventListener("mouseenter", function (e) {
		myImageSlider.params.autoplay.disableOnInteraction = false;
		myImageSlider.params.autoplay.delay = 500;
		myImageSlider.autoplay.start();
	});
	sliderBlock.addEventListener("mouseleave", function (e) {
		myImageSlider.autoplay.stop();
	});

	*/
	// * Запуск автоппрокрутки при наведении



	// * Фракция , hem fraksiya islesin hemde scroolbar
	/*
	let mySliderAllSlides = document.querySelector('.image-slider__total');
	let mySliderCurrentSlide = document.querySelector('.image-slider__current');

	mySliderAllSlides.innerHTML = myImageSlider.slides.length;

	myImageSlider.on('slideChange', function () {
		let currentSlide = ++myImageSlider.realIndex;
		mySliderCurrentSlide.innerHTML = currentSlide;
	});
	*/
	// * Фракция , hem fraksiya islesin hemde scroolbar

	
});

//* paralax ucun slider
/*
// Параллакс слайдер
new Swiper('.parallax-slider', {
	// Включаем параллакс
	parallax: true,
	// скорость переключения
	speed: 2000,
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
*/






