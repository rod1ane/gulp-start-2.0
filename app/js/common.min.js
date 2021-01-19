$(function () {
	// Custom JS
	jQuery('.equalH4__js h4').matchHeight({
		property: 'min-height'
	});

	//PARALLAX
	// if ($(".rellax").length) {
	// 	var rellaxBanner = new Rellax('.rellax', {
	// 		speed: -6,
	// 		center: false,
	// 		wrapper: null,
	// 		round: true,
	// 		vertical: true,
	// 		horizontal: false
	// 	});
	// }




	//TABS
	// $('.member-tab').click(function (e) {
	// 	e.preventDefault();
	// 	var tab_id = $(this).attr('data-tab');

	// 	$('.member-tab').removeClass('is-active');
	// 	$('.new-member-form-content').removeClass('is-active');

	// 	$(this).addClass('is-active');
	// 	$("#" + tab_id).addClass('is-active');
	// })

	// new Swiper('.swiper-container', {
	// 	loop: true,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 	},
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	scrollbar: {
	// 		el: '.swiper-scrollbar',
	// 	},
	// });

	// $('#my-menu').mmenu({
	// 	'navbar': {
	// 		'title': "Menu"
	// 	},
	// 	extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black', 'fx-listitems-slide'],
	// 	offCanvas: {
	// 		position: 'right'
	// 	}
	// }, {
	// 	clone: true
	// });

	// var api = jQuery('#mm-my-menu').data('mmenu');
	// api.bind('opened', function () {
	// 	jQuery('.hamburger').addClass('is-active');
	// }).bind('closed', function () {
	// 	jQuery('.hamburger').removeClass('is-active');
	// });
	// jQuery(".hamburger-close").click(function () {
	// 	api.close();
	// });

	//DOUBLE TAP
	// $('#my-menu').doubleTapToGo();

	// https://github.com/jellekralt/Responsive-Tabs
	// $('#responsiveTabsDemo').responsiveTabs({
	//     startCollapsed: 'accordion'
	// });

	// $(document).keyup(function(e) { 
	//        if (e.keyCode == 27) { 
	//           $(".search__panel").removeClass('is-active');
	//         $(".search-btn").removeClass('is-active');
	//        }
	//    });
});