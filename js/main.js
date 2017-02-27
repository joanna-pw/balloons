$(document).ready(function() {

$("#slider").ionRangeSlider({
    min: 140,
    max: 220,
    from: 150,
    postfix: "cm"
});

$("button[type=submit]").click(function() {
    var $donuts = $("input#donuts").val();
    var $height = $("input[name='height']:checked").val();
    var $colours = $("input[name='colours']:checked").val();
    var $sliderValue = $("#slider").prop("value");

    console.log($sliderValue + " " +$donuts +  " " + $height + " " + $colours);
    return false;
});

});
