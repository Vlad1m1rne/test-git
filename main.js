$(function(){
let btn = document.createElement("button");
$(".m").append(btn);
$("button:first").text("Кнопка");
$("button:first").click(function(){console.log(this);
$(".head").css("background-color","red");
});

})