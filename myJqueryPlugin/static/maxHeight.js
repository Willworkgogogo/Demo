// (function($) {
// 	$.fn.maxHeight = function() {
// 		var max = 0;

// 		this.each(function(index, el) {
// 			max = Math.max(max, $(this).height());
// 		});

// 		return max;
// 	} 
// })(jQuery)

// var tallest = $('div').maxHeight();
// console.log(tallest);



// 2
(function ($) {
	$.fn.lockDimensions = function(type) {

		return this.each(function(index, el) {
			var $this = $(this);
			if (type == 'width') {
				$this.width(600)
			}
			if (type == 'height') {
				$this.height($this.height())
			}
		});
	}
})(jQuery)

$('div').lockDimensions('width').css('background', 'pink');