(function($) {
	$.fn.myPlugin = function() {
		this.fadeIn(400, function() {
			console.log("i\'m at $ :"+this);
		});
	}
})(jQuery)

$('.element').myPlugin();