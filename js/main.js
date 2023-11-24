$(function(){
	//Паралакс
	$(window).bind('scroll', function(e){
		parallaxScroll();
	});

	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('#credo').css('top',(0-(scrolled*0.5))+'px');
	};
	
	//Слайдер на странице gallery
	$(document).ready(function(){
  		$('.big-slider').slick({
  			dots: true,
  			prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
  			nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  		});
	});

	//Карта на странице конатакты
	 ymaps.ready(init);
    var myMap, 
        myPlacemark;

    function init(){ 
        myMap = new ymaps.Map("map", {
            center: [55.61494462, 37.62157966],
            zoom: 16
        }); 
        
        myPlacemark = new ymaps.Placemark([55.61494462, 37.62157966], {
            hintContent: 'Мы здесь!',
            balloonContent: 'SC Comandante'
        });
        
        myMap.geoObjects.add(myPlacemark);
    }

    //Отображение услуг на странице услуги
    $('a.car-body-polishing').click(function(e){
      if($('div.subcategory').hasClass('car-body-polishing'))
        $('div.subcategory').removeClass('d-block').removeClass('d-none').addClass('d-none')
        $('div.car-body-polishing').removeClass('d-block').removeClass('d-none').addClass('d-block')
    })

    $('a.Off-road-training').click(function(e){
      if($('div.subcategory').hasClass('Off-road-training'))
        $('div.subcategory').removeClass('d-block').removeClass('d-none').addClass('d-none')
        $('div.Off-road-training').removeClass('d-block').removeClass('d-none').addClass('d-block')
    })

    $('a.body-repair-painting').click(function(e){
      if($('div.subcategory').hasClass('body-repair-painting'))
        $('div.subcategory').removeClass('d-block').removeClass('d-none').addClass('d-none')
        $('div.body-repair-painting').removeClass('d-block').removeClass('d-none').addClass('d-block')
    })

    $('a.3D-collapsing').click(function(e){
      if($('div.subcategory').hasClass('3D-collapsing'))
        $('div.subcategory').removeClass('d-block').removeClass('d-none').addClass('d-none')
        $('div.3D-collapsing').removeClass('d-block').removeClass('d-none').addClass('d-block')
    })

     $('a.vibro-noise-isolation').click(function(e){
      if($('div.subcategory').hasClass('vibro-noise-isolation'))
        $('div.subcategory').removeClass('d-block').removeClass('d-none').addClass('d-none')
        $('div.vibro-noise-isolation').removeClass('d-block').removeClass('d-none').addClass('d-block')
    })

      $('a.anticorrosion-treatment').click(function(e){
      if($('div.subcategory').hasClass('anticorrosion-treatment'))
        $('div.subcategory').removeClass('d-block').removeClass('d-none').addClass('d-none')
        $('div.anticorrosion-treatment').removeClass('d-block').removeClass('d-none').addClass('d-block')
    })

     $('a.Electrical-work').click(function(e){
      if($('div.subcategory').hasClass('Electrical-work'))
        $('div.subcategory').removeClass('d-block').removeClass('d-none').addClass('d-none')
        $('div.Electrical-work').removeClass('d-block').removeClass('d-none').addClass('d-block')
    })

     $('a.Repair-chassis-engines').click(function(e){
      if($('div.subcategory').hasClass('Repair-chassis-engines'))
        $('div.subcategory').removeClass('d-block').removeClass('d-none').addClass('d-none')
        $('div.Repair-chassis-engines').removeClass('d-block').removeClass('d-none').addClass('d-block')
    })
});


