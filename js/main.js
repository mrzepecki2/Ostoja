
$(document).ready(function(){
	lid_roll();
	bx_inicjal ();
	mobile_menu();
	fixed_menu();
	
	jQuery('.colorbox-1').colorbox({rel:'gal', maxWidth:'90%', maxHeight:'90%'});
	
	window.onscroll = function() {
		fixed_menu();
	};
	
});


function mobile_menu()
{
	$("#mobile-menu-ico").click(function(){
		$(".main-menu-mobile").stop().slideToggle("slow");
	})
	$(".nextlevel-mobile").click(function(){
		$(this).find(".main-menu-mobile-level").stop().slideToggle("slow");
		console.log("a");
	})
}

 function fixed_menu()
 {
		var menu_wys = 67;
		if ($(window).scrollTop() > menu_wys)
		{	
			$('#page_wrapper').css('margin-top',menu_wys)
			$("header").addClass("fixed_menu");
		}
		else
		{
			$('#page_wrapper').css('margin-top',0)
			$("header").removeClass("fixed_menu");
		}
 }

function bx_inicjal ()
{
	$('.bxslider').bxSlider({
		slideWidth: 500,
		minSlides: 2,
		maxSlides: 4,
		slideMargin: 20,
		pager: false,
		onSliderLoad: function(){
			$('.galeria1 .obrazek').each(function(){
				$(this).addClass("transition_0_5");
			});
		  },
	});
	
	$('.bxslider-main').bxSlider({
		pager: false,
	});

}

function lid_roll()
{
	$( ".lid" )
  .mouseup(function() {
    $( this ).stop().animate({top: '-160px'}).animate({top: '-150px'},function() {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
  })
  .mousedown(function() {
    $( this ).stop().animate({top: '-100px'});
  });
}


