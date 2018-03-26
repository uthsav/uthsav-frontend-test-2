$(document).ready(function() {
$("#ABOUT").hide();
$("#about").click(function(){
  $("#ABOUT").show();
  $("#HOME").hide();
});

$("#home").click(function(){
  $("#HOME").show();
  $("#ABOUT").hide();
});

$("#abt").click(function(){
  $("#ABOUT").show();
  $("#HOME").hide();
});
$("#a").click(function(){
	
	$("#HOME").hide();
	$("#ABOUT").show();
});
$("#b").click(function(){
	$("#ABOUT").show();
	$("#HOME").hide();
});
$("#c").click(function(){
	$("#ABOUT").show();
	$("#HOME").hide();
});
});

$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
