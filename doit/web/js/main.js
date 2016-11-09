require.config({
	baseUrl: 'js/lib',
	paths: {
		app: '../app'
	}
});

require(['jquery-1.10.1.min.js', 'app/live.js'], function($, live) {
	setTimeout(live, 2000);
});