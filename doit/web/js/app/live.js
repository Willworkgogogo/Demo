define(['jquery-1.10.1.min.js'], function() {
	$(".demo").slideDown(400, function() {
		alert(new Date());
	})
});