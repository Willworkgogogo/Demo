requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        'app': '../app'
    }
})
requirejs(['jquery/jquery.min', 'app/sub'], function($, sub){
    // $('h2').text('are u kidding me')
    console.log(sub.title)
})