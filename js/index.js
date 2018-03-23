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
});
