(($) => {
    $('.hamburger').click(() => {
        $('.hamburger').toggleClass('change');
        $('nav.ana-menu').toggleClass('ac');
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("header").addClass("bg-color");
        }else{
            $("header").removeClass("bg-color");
        }
    });
    $('[data-toggle="tooltip"]').tooltip(); 
})(jQuery);