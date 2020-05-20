$(function() {
	// wow js
	// new WOW().init();





	var x, i, j, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  /*for each element, create a new DIV that will act as the selected item:*/
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	  x[i].appendChild(a);
	  /*for each element, create a new DIV that will contain the option list:*/
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	  for (j = 1; j < selElmnt.length; j++) {
	    /*for each option in the original select element,
	    create a new DIV that will act as an option item:*/
	    c = document.createElement("DIV");
	    c.innerHTML = selElmnt.options[j].innerHTML;
	    c.addEventListener("click", function(e) {
	        /*when an item is clicked, update the original select box,
	        and the selected item:*/
	        var y, i, k, s, h;
	        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
	        h = this.parentNode.previousSibling;
	        for (i = 0; i < s.length; i++) {
	          if (s.options[i].innerHTML == this.innerHTML) {
	            s.selectedIndex = i;
	            h.innerHTML = this.innerHTML;
	            y = this.parentNode.getElementsByClassName("same-as-selected");
	            for (k = 0; k < y.length; k++) {
	              y[k].removeAttribute("class");
	            }
	            this.setAttribute("class", "same-as-selected");
	            break;
	          }
	        }
	        h.click();
	    });
	    b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  a.addEventListener("click", function(e) {
	      /*when the select box is clicked, close any other select boxes,
	      and open/close the current select box:*/
	      e.stopPropagation();
	      closeAllSelect(this);
	      this.nextSibling.classList.toggle("select-hide");
	      this.classList.toggle("select-arrow-active");
	    });
	}
	function closeAllSelect(elmnt) {
	  /*a function that will close all select boxes in the document,
	  except the current select box:*/
	  var x, y, i, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  for (i = 0; i < y.length; i++) {
	    if (elmnt == y[i]) {
	      arrNo.push(i)
	    } else {
	      y[i].classList.remove("select-arrow-active");
	  	


	  		// есть выбор - переход на страницу
	  		if($(y[i]).text() == 'Вкладчик') {
	  			// history.pushState(null, null, "");
	  			
	  			setTimeout(function() {
	  			  document.location.href = "investor.html";
	  			}, 500);
	  		}
	  		if($(y[i]).text() == 'Заёмщик') {
	  			setTimeout(function() {
	  			  document.location.href = "borrower.html";
	  			}, 500);
	  		}
	    }
	  }
	  for (i = 0; i < x.length; i++) {
	    if (arrNo.indexOf(i)) {
	      x[i].classList.add("select-hide");
	    }
	  }
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);

	






	// $('.custom-select select').on('change', function(e) {
	// 	alert();
	// 	$(this).hide();
	// });






	// $(".slider2").on("init", function(event, slick){
	//	alert(1);
	// });

	// $(".slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
	//	console.log(currentSlide);
	// });

	// slick pagemain-slider__slider1
	$(".pagemain-slider__slider1").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: true,
		fade: true,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
		//centerMode: true,
		//centerPadding: "60px",
		autoplay: true,
		autoplaySpeed: 3000,

		// непрерывные слайды
		//cssEase: "linear",
		//autoplay: true,
		//autoplaySpeed: 0,
		//speed: 3000,

		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: "40px",
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: "40px",
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider").slick("reinit");
	//$(".slider").slick("slickGoTo", 0);

	/*
	if(currentSlide == 0) {
		$(".slider5 .slick-prev").css("background", "url(../img/slider5-arrow-left-grey.png) 0 0 no-repeat");
	}
	if(currentSlide == slick.slideCount-1) {
		$(".slider5 .slick-next").css("background", "url(../img/slider5-arrow-right-grey.png) 0 0 no-repeat");
	}
	if(currentSlide != 0 && currentSlide != slick.slideCount-1) {
		$(".slider5 .slick-prev").css("background", "url(../img/slider5-arrow-left.png) 0 0 no-repeat");
		$(".slider5 .slick-next").css("background", "url(../img/slider5-arrow-right.png) 0 0 no-repeat");
	}

	console.log($(slick.$slides[currentSlide]));
	console.log($(slick.$slides[nextSlide]));
	console.log(slick.slideCount);

	$(slick.$slides[currentSlide]).hide("slow");
	$(slick.$slides[nextSlide]).show("slow");
	*/








	// $(".slider2").on("init", function(event, slick){
	//	alert(1);
	// });

	// $(".slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
	//	console.log(currentSlide);
	// });

	// slick pagemain-promo2__slider2
	$(".pagemain-promo2__slider2").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
		//centerMode: true,
		//centerPadding: "60px",
		autoplay: true,
		autoplaySpeed: 3000,

		// непрерывные слайды
		//cssEase: "linear",
		//autoplay: true,
		//autoplaySpeed: 0,
		//speed: 3000,

		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: "40px",
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: "40px",
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider").slick("reinit");
	//$(".slider").slick("slickGoTo", 0);

	/*
	if(currentSlide == 0) {
		$(".slider5 .slick-prev").css("background", "url(../img/slider5-arrow-left-grey.png) 0 0 no-repeat");
	}
	if(currentSlide == slick.slideCount-1) {
		$(".slider5 .slick-next").css("background", "url(../img/slider5-arrow-right-grey.png) 0 0 no-repeat");
	}
	if(currentSlide != 0 && currentSlide != slick.slideCount-1) {
		$(".slider5 .slick-prev").css("background", "url(../img/slider5-arrow-left.png) 0 0 no-repeat");
		$(".slider5 .slick-next").css("background", "url(../img/slider5-arrow-right.png) 0 0 no-repeat");
	}

	console.log($(slick.$slides[currentSlide]));
	console.log($(slick.$slides[nextSlide]));
	console.log(slick.slideCount);

	$(slick.$slides[currentSlide]).hide("slow");
	$(slick.$slides[nextSlide]).show("slow");
	*/




	$('.js-lk1').on('click', function(e) {
		e.preventDefault();
		setTimeout(function() {
		  document.location.href = "investor.html";
		}, 500);
	});
	$('.js-lk2').on('click', function(e) {
		e.preventDefault();
		setTimeout(function() {
		  document.location.href = "borrower.html";
		}, 500);
	})





	// $(".slider2").on("init", function(event, slick){
	//	alert(1);
	// });

	// $(".slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
	//	console.log(currentSlide);
	// });

	// slick pagemain-promo4__slider3
	$(".pagemain-promo4__slider3").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: false,
		dots: false,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
		//centerMode: true,
		//centerPadding: "60px",
		autoplay: true,
		autoplaySpeed: 3000,

		// непрерывные слайды
		//cssEase: "linear",
		//autoplay: true,
		//autoplaySpeed: 0,
		//speed: 3000,

		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: "40px",
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: "40px",
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider").slick("reinit");
	//$(".slider").slick("slickGoTo", 0);

	/*
	if(currentSlide == 0) {
		$(".slider5 .slick-prev").css("background", "url(../img/slider5-arrow-left-grey.png) 0 0 no-repeat");
	}
	if(currentSlide == slick.slideCount-1) {
		$(".slider5 .slick-next").css("background", "url(../img/slider5-arrow-right-grey.png) 0 0 no-repeat");
	}
	if(currentSlide != 0 && currentSlide != slick.slideCount-1) {
		$(".slider5 .slick-prev").css("background", "url(../img/slider5-arrow-left.png) 0 0 no-repeat");
		$(".slider5 .slick-next").css("background", "url(../img/slider5-arrow-right.png) 0 0 no-repeat");
	}

	console.log($(slick.$slides[currentSlide]));
	console.log($(slick.$slides[nextSlide]));
	console.log(slick.slideCount);

	$(slick.$slides[currentSlide]).hide("slow");
	$(slick.$slides[nextSlide]).show("slow");
	*/








		// $(".slider2").on("init", function(event, slick){
	//	alert(1);
	// });

	// $(".slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
	//	console.log(currentSlide);
	// });

	// slick pageborrower-promo2__slider3
	$(".pageborrower-promo2__slider3").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
		//centerMode: true,
		//centerPadding: "60px",
		autoplay: true,
		autoplaySpeed: 3000,

		// непрерывные слайды
		//cssEase: "linear",
		//autoplay: true,
		//autoplaySpeed: 0,
		//speed: 3000,

		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: "40px",
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: "40px",
				slidesToShow: 1
			  }
			}
	  ]
	});
	//$(".slider").slick("reinit");
	//$(".slider").slick("slickGoTo", 0);

	/*
	if(currentSlide == 0) {
		$(".slider5 .slick-prev").css("background", "url(../img/slider5-arrow-left-grey.png) 0 0 no-repeat");
	}
	if(currentSlide == slick.slideCount-1) {
		$(".slider5 .slick-next").css("background", "url(../img/slider5-arrow-right-grey.png) 0 0 no-repeat");
	}
	if(currentSlide != 0 && currentSlide != slick.slideCount-1) {
		$(".slider5 .slick-prev").css("background", "url(../img/slider5-arrow-left.png) 0 0 no-repeat");
		$(".slider5 .slick-next").css("background", "url(../img/slider5-arrow-right.png) 0 0 no-repeat");
	}

	console.log($(slick.$slides[currentSlide]));
	console.log($(slick.$slides[nextSlide]));
	console.log(slick.slideCount);

	$(slick.$slides[currentSlide]).hide("slow");
	$(slick.$slides[nextSlide]).show("slow");
	*/




	// accordion jquery
	$('#accordion-js').find('h2').click(function() {
		$(this).next().stop().slideToggle();

		// меняем стрелки
		$(this).toggleClass('h2arrow');
		// $(this).css('background','url(../img/arrow-up.png) 96% 50% no-repeat, linear-gradient(to bottom, #cc1d1c, #ed3d3c, #cc1d1c)');

	}).next().stop().hide();

	// открытие при инициализации аккордеона
	// $('#accordion-js').find('h2').next().stop().slideDown();






	$('.pagepartners-promo7__left-bottom a').on('click', function(e) {
		e.preventDefault();

		var currentQ = 1;
		currentQ = $(this).attr('data-id');

		$('.pagepartners-promo7__right-q').hide('slow');
		$('.pagepartners-promo7__right-q'+currentQ).show('slow');
	});





	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .

		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});

	// onscroll
	window.onscroll = function() {
	  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  // console.log(scrolled);

	  if(scrolled > 700) {
	    // $('.arrow').css('display', 'block');
	    $('.arrow').show('slow', function() {
	      //
	    });
	  }
	  else {
	    // $('.arrow').css('display', 'none');
	    $('.arrow').hide('slow', function() {
	      //
	    });
	  }
	}



	// magnific-popup
	//$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
		type: 'image',
		//delegate: 'a', // child items selector, by clicking on it popup will open, example .parent-container a
		zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
	  // other options
	});



	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // fix popup background to scroll
	  // $('body').addClass('no-scroll');
	  // body.no-scroll {
		//   overflow: hidden;
		//   position: fixed;
		// }

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  // $('.popup .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup').slideDown(600);

	  $('.popup-overlay').fadeIn('slow');
	  // $('.popup-overlay').css('display', 'block');

	  // поиск button close2 popup
	  $('.js-close2-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();

	  	// upfix popup background to scroll
	  	// $('body').removeClass('no-scroll');

			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup').slideUp(600, function() {
				// stop iframe video play after close2 popup
				// var video = $(".popup iframe").attr("src");
				// $(".popup iframe").attr("src", "");
				// $(".popup iframe").attr("src", video);
			});

			$('.popup-overlay').fadeOut('slow');
			// $('.popup-overlay').css('display', 'none');
			// $('.popup').find("input").val(""); // off in wp

			// для wp cf7
			// $("form").trigger("reset");
			// $("form .wpcf7-not-valid-tip").hide();
			// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	  });
	});



	// $('.js-popup2').on('click', function(e) {
	//   e.preventDefault();

	// 	// fix popup background to scroll
	// 	$('body').addClass('no-scroll');
  // body.no-scroll {
	//   overflow: hidden;
	//   position: fixed;
	// }

	//   // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	//   // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	//   // $('.popup2 .main-form input[name="user_data"]').val($(this).attr('data-user'));

	//   // поиск popup и popup-overlay для их открытия
	//   // $('.popup').css('display', 'block');
	//   // $('.popup-overlay').css('display', 'block');
	//   // or
	//   $('.popup2').slideDown();
	//   $('.popup-overlay').css('display', 'block');

	//   // поиск button close2 popup
	//   $('.js-close2-popup, .popup-overlay').on('click', function(e) {
	// 			e.preventDefault();

	// 			// upfix popup background to scroll
	//   		$('body').removeClass('no-scroll');

	// 		// $('.popup').css('display', 'none');
	// 		// $('.popup-overlay').css('display', 'none');
	// 		// or
	// 		$('.popup2').slideUp();
	// 		$('.popup-overlay').css('display', 'none');

	// 		// для wp cf7
	// 		// $("form").trigger("reset");
	// 		// $("form .wpcf7-not-valid-tip").hide();
	// 		// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	//   });
	// });




	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();

		// проверка на стороне клиента формы через js что форма не пустая
		// var name = $('.name1').val();
		// var phone = $('.tel1').val();
		// console.log(name);
		// console.log(phone);



		// $.ajax({
		// 	type: "POST",
		// 	url: "smart.php",	// url: "smart.php", даже если js и php не в одной папке!
		// 	data: $(this).serialize()
		// }).done(function(data) {
		// 	$(this).find("input").val("");

		// 	$("form").trigger("reset");

		// 	$('.popup').slideUp();
		// 	$('.popup-overlay').css('display', 'none');

		// 	//alert("Заявка отправлена!");
		// 	window.location.href = "thanks.html";
		// });



		// del
		// if (name !== '' & phone !== '') {
		// 	$.ajax({
		// 		type: "POST",
		// 		url: "mailer/smart.php",
		// 		data: $(this).serialize()
		// 	}).done(function() {
		// 		$(this).find("input").val("");

		// 		//alert("Заявка отправлена!");
		// 		window.location.href = "../mailer/thanks.html";

		// 		$("form").trigger("reset");

		// 		$('.popup').slideUp();
		// 		$('.popup-overlay').css('display', 'none');
		// 	});
		// } else {
		// 	alert('Данные не заполнены!');
		// }

		return false;
	});

	// email - old
	//$('.main-form').submit(function(event) {
	//	event.preventDefault();
	//	$.ajax({
	//		type: "POST",
	//		url: "mailer/smart.php",
	//		data: $(this).serialize()
	//	}).done(function() {
	//		$(this).find("input").val("");
	//		alert("Сообщение успешно отправлено");
	//		$("form").trigger("reset");
	//
	//		$('.popup').slideUp();
	//		$('.popup-overlay').css('display', 'none');
	//	});
	//	return false;
	//});


});