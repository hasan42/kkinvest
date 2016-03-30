$(function() {
	
	//servicess on index hide-show
	$('.services-element').mouseenter(function() {
		$('.services-element .info').show();
		$('.services-element .contacts').hide();
		$(this).children('.info').hide();
		$(this).children('.contacts').fadeIn(200);
	});
	$('.services-element').mouseleave(function() {
		$('.services-element .contacts').hide();
		$('.services-element .info').fadeIn(200);
	});
	
	//partners on index hide-show
	$('.partners-element').mouseenter(function() {
		$('.partners-element .no-color').show();
		$('.partners-element .color').hide();
		$(this).children('a').children('.no-color').hide();
		$(this).children('a').children('.color').fadeIn(200);
	});
	$('.partners-element').mouseleave(function() {
		$('.partners-element .color').hide();
		$('.partners-element .no-color').fadeIn(200);
	});
	
	//menu
	$('ul.menu li').hover(function () {
		clearTimeout($.data(this,'timer'));
		$('ul',this).stop(true,true).slideDown(200);
	}, function () {
		$.data(this,'timer', setTimeout($.proxy(function() {
			$('ul',this).stop(true,true).slideUp(200);
		}, this), 100));
	});
	
	$("#show-menu").click(function() {
		if( $("ul.menu").is(':hidden')){
			$("ul.menu").slideDown(200);
		}else{
			$("ul.menu").slideUp(200);
		}
	});
	

	//vacancies show
	$(".vac-block h2 > a").click(function() {
		if( $(this).parents('.vac-block').hasClass('active') ) {
			e.preventDefault();
		}else{
			$('.vac-block > .vac-info').slideUp(100);
			$('.vac-block').removeClass('active');
			$(this).closest('.vac-block').addClass('active');
			$('.vac-block.active .vac-info').slideDown(200);
		}
	});
	
	$("#scroll-top").click(function() {
		$('html, body').animate({scrollTop:0},1000);return false;
	});
	$(window).scroll(function(){
		var nowHeightDoc = $(document).height();
		var nowHeightWin = $(window).height();
		var nowScrollTopD = $(document).scrollTop();
		//console.log( nowHeightDoc );
		//console.log( nowHeightWin );
		console.log( nowHeightWin - nowScrollTopD  );
		if( nowHeightWin - nowScrollTopD > 100 ){
			$("#scroll-top").fadeOut("slow")
		}else{
			$("#scroll-top").fadeIn("slow")
		}
	});
	
});


$(document).ready(function(){
	
	//slider index
	$('.media-wrap').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '.media-wrap-button .slick-prev',
        nextArrow: '.media-wrap-button .slick-next',
	});
	
	//partners index
	$('.partners-block').slick({
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 7
			  }
			},
			{
			  breakpoint: 668,
			  settings: {
				slidesToShow: 6
			  }
			},
			{
			  breakpoint: 568,
			  settings: {
				slidesToShow: 5
			  }
			},
			{
			  breakpoint: 468,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
			  breakpoint: 400,
			  settings: {
				slidesToShow: 2
			  }
			}
		  ]
	});
	
	//actions index
	$('.actions-block').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true
	});
	
	//gallery
	$(".fancybox").fancybox();
	
	//slider image
	$('.slider-big-image').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.slider-big-list'
	});
	$('.slider-big-list').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-big-image',
		responsive: [
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 2
			  }
			}
		  ]
	});
	
	
});

