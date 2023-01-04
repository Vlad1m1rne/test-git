$(function(){
let btn = document.createElement("button");
$(".m").append(btn);
$("button:first").text("RED");
$("button:first").click(function(){
$(".head").toggleClass("red");
});

let inp = document.createElement("input");
$(".sidebar").prepend(inp);
$("input").attr({"type":"button",
                  "value":"Шрифт",
                  });
$("input").click(function(){
  $(".head").toggleClass("font");
});

$("div.baner").html("<p>Это банер!</p><span>Excepturi sequi, dicta beatae obcaecati quis minima distinctio expedita? Possimus dignissimos velit error laborum et reiciendis iusto vero rerum libero officiis amet saepe placeat, ut quo quasi asperiores, obcaecati eum, earum aut at fugit porro.</span>");

let btn1 = document.createElement("button");
$("div.baner").before(btn1);
$("button").eq(0).text("Slide");
$("button").eq(0).click(function(){
  $("div.baner").slideToggle(2000);
});

let btn2 = document.createElement("button");
$("div.baner").before(btn2);
$("button").eq(1).text("Animate");
$("button").eq(1).click(function(){
  $(".baner").animate({width:"150px",
                       height: "250px",
                       overflow: "auto",
                      fontSize:"0.8em"})
});

let btn3 = document.createElement("button");
$("div.baner").before(btn3);
$("button").eq(2).text("stop!!!");
$("button").eq(2).click(function(){
  $("div.baner").stop();
});

// $("div.file").load("text.txt");
$("div.file").html("<span>Вставка</span>");

$(".m h1").click(function(){
  $(".m h1").animate({
    right : "50px",
    opacity : "0.5",
   fontSize : "2.5em",
   fontFamily : "Arial, Helvetica",
  },1500);
});

let btn5 = document.createElement("button");
$(".m h1").after(btn5);
$("button").eq(0).text("push");
$("button").eq(0).click(function(){
  $(".m h1").toggleClass("z")});





});
