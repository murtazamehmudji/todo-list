// Check off specific todos by clicking
$("li").click(function () {
    $(this).toggleClass("completed");
})

//click on X to delete todo
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

// $("ul").click(function(){
//     alert("Clicked on ul");
// })

// $("#container").click(function(){
//     alert("Clicked on container");
// })

// $("body").click(function(){
//     alert("Clicked on body");
// })