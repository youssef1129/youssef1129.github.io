$(document).ready(function(){
   $("#me").mouseover(function(){
    $("#me").css("background-color", "gray");
   });
   $("#me").mouseleave(function(){
    $("#me").css("background-color", "black");
   });

   $("#nm").mouseover(function(){
    $("#nm").css("text-shadow","3px 3px gray");
   });
   $("#nm").mouseleave(function(){
    $("#nm").css("text-shadow","0px 0px");
   });

   $(".col").find("h2").mouseover(function(){
    $(this).css({"background-color": "white","color":"black"});
    $(this).animate({width: '0%'},'slow');
   });
   $(".col").find("h2").mouseleave(function(){
    $(this).css({"background-color":"black","color":"white"});
    $(this).animate({width: '100%'});
   });

   $("h3").mouseover(function(){
    $(this).css({"background-color": "white","color":"black"});
   });
   $("h3").mouseleave(function(){
    $(this).css({"background-color":"black","color":"white"});
   });
  
$("h1").mouseover(function(){
   $("#spn").find("img").addClass("aaa");
});
$("h1").mouseleave(function(){
    $("#spn").find("img").removeClass("aaa");
 });

});