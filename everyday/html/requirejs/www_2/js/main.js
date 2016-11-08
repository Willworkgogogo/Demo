require.config({
	baseUrl: 'js/lib',
	paths: {
		app: '../app'
	}
})

require(['jquery', 'app/sample2'], function($, sample2){
	// $('.box').html('hello world');
	$('.box').on('click',sample2); 
})