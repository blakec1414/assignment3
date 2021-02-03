console.log("hello");



var $one = $("#j1");
var $two = $("#a1");
var $three = $("#j2");
var $four = $("#a2");
var $five = $("#j3");
var $six = $("#a3");

$one.on("click", function() {
	$(this).hide();
	$two.show();
	$("body").css("background-color", "#7209B7");
});

$two.on("click", function() {
	$(this).hide();
	$three.show();
	$("body").css("background-color", "#3A0CA3");
});

$three.on("click", function() {
	$(this).hide();
	$four.show();
	$("body").css("background-color", "#4361EE");
});

$four.on("click", function() {
	$(this).hide();
	$five.show();
	$("body").css("background-color", "#F05365");
});

$five.on("click", function() {
	$(this).hide();
	$six.show();
	$("body").css("background-color", "#FABC2A");
});

$six.on("click", function() {
	$(this).hide();
	$one.show();
	$("body").css("background-color", "#F72585");
});