$(document).ready(function () {

	// magnificPopup img view 
    $('.popup-image').magnificPopup({
        type: 'image',
    });

//     /* magnificPopup video view */
//     $('.popup-video').magnificPopup({
//         type: 'iframe'
//     });

//     //for menu active class
//     $('.portfolio-menu button').on('click', function (event) {
//         $(this).siblings('.active').removeClass('active');
//         $(this).addClass('active');
//         event.preventDefault();
//     });

//     // WOW active
//     new WOW().init();

	// slick slider for banner 
	$('.banner-slider').slick({
	    dots: true,
	    appendDots: $('.banner-slider-dots'),
	    // autoplay: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	});

	$('.slider-6').slick({
		slidesToShow: 6,
		slidesToScroll: 2,
        prevArrow: '<i class="arrows far fa-chevron-left left"></i>',
        nextArrow: '<i class="arrows far fa-chevron-right right"></i>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					autoplay: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true
				}
			}
		]
	});

	$('.slider-4').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
        prevArrow: '<i class="arrows far fa-chevron-left left"></i>',
        nextArrow: '<i class="arrows far fa-chevron-right right"></i>',
        infinite: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					autoplay: true
				}
			}
		]
	});

//     // my code ----------------------------------------------------------------------
//     // preloader
//     $(".preloader").animate({
//         top: -2000000
//     }, 1500);

//     // sticky menu ber and go to top button
//     $(window).scroll(function () {
//         var scrolled = $(window).scrollTop();
//         var topMain = $('main').offset().top - 400;

//         // go to top button
//         if (scrolled > topMain) {
//             $('.go-to-top').addClass('active');
//             $('.nav-outer').addClass('sticky');

//             $('.go-to-top').click(function () {
//                 $(window).scrollTop(0);
//             });
//         } else {
//             $('.go-to-top').removeClass('active');
//             $('.nav-outer').removeClass('sticky')
//         }
//         // console.log(scrolled);
//     });

//     // menu bar open -------------------------
    $('.open-mobile-menu ').click(function () {
        $('.mobile-menu').fadeIn(200);
    });
    // menu bar close -------------------------
    $('.close-mobile-menu').click(function () {
        $('.mobile-menu').fadeOut(200);
    });

	let sliderInput = $('.slider-input');
	let sliderOutput = $('.slider-output .number');

	if (sliderInput[0] && sliderOutput) {
		sliderOutput.text(sliderInput[0].value);

		sliderInput.on('change', function() {
			console.log($(this).value)

			sliderOutput.text($($(this)[0]).val());
		});
	};

	const thumbs = $('.product-thumb');

	$.each(thumbs, (index, item) => {

		$(item).click(function(event) {
			event.preventDefault();

			console.log($(this)[0]);

			$('.product-img img').attr('src', $(item).children('img').attr('src'));
			$('.product-img[data-popup=true] a').attr('href', $('.product-img[data-popup=true] img').attr('src'));
		});
	});	

});
