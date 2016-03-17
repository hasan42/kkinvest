$(function() {
	

});

//find-block hide if miss
$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".options-element__select"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		&& div.has(e.target).length === 0) { // и не по его дочерним элементам
		div.hide(); // скрываем его
	}
});

/*$(document).click( function(event){
  if( $(event.target).closest(".options-element__select").length ) return;
	  $(".options-element__select").hide();
  event.stopPropagation();
});*/

$(document).ready(function(){
	
	//slider index
	$('.media-wrap').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});
	
	//partners index
	$('.partners-block').slick({
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1
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
	
	
});

