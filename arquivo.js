$(document).ready(function(){
$('.navbar-toggler').click(function(){
    $('.navbar-collapse').toggle()
 })

})


$(document).ready(function(){
    $('.img-fluid').on( "click", function() {
        $(this).toggleClass('maxSize')
    });
});
