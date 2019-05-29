$(".side-bar > a").siblings().hide();

$(".side-bar > a").click(function() {

  $(this).siblings().toggle();


  $(this).toggleClass("open");
//off
$(".back1").css("background-image","url("+  backgrounds[0]  + ")" );
$(".back2").css("background-image","url("+  backgrounds[1]  + ")" );
$(".back3").css("background-image","url("+  backgrounds[2]  + ")" );
$(".back4").css("background-image","url("+  backgrounds[3]  + ")" );

if($(this).hasClass("open")) {
  $(".side-bar").animate({
    width:"40%"
  },500,function() {
    $(".side-bar > a").text("Close");

});

} else {

  $(".side-bar").animate({
    width:"12%"
  },1000,function(){
    $(".side-bar > a").text("Open");


  });

} 

});

var backgrounds = ["qww.jpg","yaya.jpg","hhh.jpg","haha.jpg"];

$(".newBackgrounds > div").click(function() {

  $(this).toggleClass("addBorder");
  $(this).siblings().removeClass("addBorder");




});


 

$("#updateButton").click(function() {

  var newIntroText  = $("#introText").val();
  var newIntroTextColor  =  $("#introTextColor").val();
  var JobTitleText= $("#jobTitle").val();
  var JobTitleTextColor=$("#jobTitleColor").val();



  console.log(newIntroText);
  console.log(newIntroTextColor);
  $(".hero-container > p").text(newIntroText);
  $(".hero-container > p").css("color",newIntroTextColor);
  $(".hero-container > h1").text(JobTitleText);
  $(".hero-container > h1").css("color",JobTitleTextColor);

  if($(".back1").hasClass("addBorder")  ) {

    $("header").css("background-image","url("  + backgrounds[0] + ")");
   

    }else if($(".back2").hasClass("addBorder") ){

      $("header").css("background-image","url("  + backgrounds[1] + ")");

    }else if($(".back3").hasClass("addBorder") ){

      $("header").css("background-image","url("  + backgrounds[2] + ")");


    }else if($(".back4").hasClass("addBorder") ){

      $("header").css("background-image","url("  + backgrounds[3] + ")");


    }





  });