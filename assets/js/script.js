var offset = $("#first").offset();
$("#heading").css("margin-left", offset.left);
$("#heading").css("margin-right", offset.left);
$("#links").css("margin-left", offset.left);
$("#links").css("margin-right", offset.left);

$(window).on('resize', function(){
    var offset = $("#first").offset();
    $("#heading").css("margin-left", offset.left);
    $("#heading").css("margin-right", offset.left);
    $("#links").css("margin-left", offset.left);
    $("#links").css("margin-right", offset.left);
});
