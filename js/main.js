
$(document).ready(function() {
    $('.menu-mobile').click(function(event) {
        event.preventDefault();
        $('.menu-responsive').addClass('active-menu');
        $('.r-overlay').addClass('active-overlay');
    });

    function cerrar_submenu() {
        $('.menu-responsive .u-submenu').stop(false).slideUp();
    }

    function cerrar_nav() {
        $('.menu-responsive').removeClass('active-menu');
        $('.r-overlay').removeClass('active-overlay');
    };
    $('.r-overlay').click(function() {
        cerrar_nav();
        cerrar_submenu();
    });
    $('.close-nav').click(function() {
        cerrar_nav();
        cerrar_submenu();
    });
});