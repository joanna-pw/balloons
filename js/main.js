$(document).ready(function() {

    $("#slider").ionRangeSlider({
        min: 140,
        max: 220,
        from: 170,
        postfix: "cm"
    });

    function howManyBalloons($sliderValue,$donuts,$elevation) {
        return 20+Math.ceil($sliderValue*$donuts*$elevation*0.04);
    }

    function addBalloon($counter,$colours) {
        $(".balloonGroup").empty();
        for(var i=0; i<$counter; i++) {
            var $newBalloon = $(".balloonPrototype").clone().removeClass("balloonPrototype");
            $(".balloonGroup").append($newBalloon);
        }
        $bgColor = $("."+$colours).css("background-color");
        $("svg>g>g").css("fill",$bgColor);
    }

    function onBalloonComplete() {
        $(".balloonGroup").fadeOut(400);
        $(".playAgain").delay(400).fadeIn(400);
    }

    function onCounterComplete() {
        $(".balloonGroup div").each(function() {
            $(this).animate({
                "top": -1000
            },{
                duration: Math.ceil(Math.random()*1000)+2000,
                easing: 'linear',
                complete: onBalloonComplete
            });
        });
    }

    $("button[type=submit]").click(function() {
        $(".test , header").fadeOut(600);
        $("body").animate({ scrollTop: 0 }, "slow");
        $(".result").delay(600).fadeIn(600);
        $("body").css("overflow","hidden");

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
            },
            complete: onCounterComplete
        });

        addBalloon($counter,$colours);
        return false;
    });

});
