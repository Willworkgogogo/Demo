define(['jquery', 'app/sample'], function($, sample) {
	$('.box').on('click', function(event) {
		$(this).html(sample.color);
	});
})