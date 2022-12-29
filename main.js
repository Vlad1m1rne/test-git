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
})






});