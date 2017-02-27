$(document).ready(function() {

$("#slider").ionRangeSlider({
    min: 140,
    max: 220,
    from: 150,
    postfix: "cm"
});

function howManyBalloons($sliderValue,$donuts,$elevation) {
    return 10+Math.ceil($sliderValue*$donuts*$elevation*0.1);
}

function addBalloon($counter,$colours) {
    $(".balloonGroup").empty();
    for(var i=0; i<$counter; i++) {
        var $newBalloon = $(".balloonPrototype svg").clone();
        $(".balloonGroup").append($newBalloon);
        
    }
    $bgColor = $("."+$colours).css("background-color");
    $("svg>g>g").css("fill",$bgColor);
}

$("button[type=submit]").click(function() {
    $(".test").fadeOut(600);
    $(".result").delay(600).fadeIn(600);
    var $sliderValue = $("#slider").prop("value");
    var $donuts = $("input#donuts").val();
    var $elevation = $("input[name='height']:checked").val();
    var $colours = $("input[name='colours']:checked").val();

    var $counter = howManyBalloons($sliderValue,$donuts,$elevation);
    $("#balloon-color").text($colours).addClass($colours);
    $("#counter").prop("counter",0).animate({
        "counter": $counter
    },{
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

    addBalloon($counter,$colours);
    
    return false;
});

});
