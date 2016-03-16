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
	
	//gallery
	$(".fancybox").fancybox();
	
	
});

