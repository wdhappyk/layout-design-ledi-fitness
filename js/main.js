$('#burger-menu-open').on('click', openRightMenu);

$('#right-menu a').on('click', closeRightMenu);
$('#burger-menu-close').on('click', closeRightMenu);


function openRightMenu(ev) {
    ev.preventDefault();

    $('#right-menu')
        .removeClass('slideOutRight')
        .addClass(['right-menu', 'animated', 'slideInRight']);
}

function closeRightMenu(ev) {
    ev.preventDefault();

    $('#right-menu')
        .removeClass('slideInRight')
        .addClass('slideOutRight');

    setTimeout(function() {
        $('#right-menu').removeClass(['right-menu', 'animated', 'slideOutRight']);
    }, 1000);
}

$('#datepicker').datepicker();
$('#timepicker').timepicker({});

new WOW().init();

$('.go-to').click(function goToElement(ev) {
    ev.preventDefault();

    var scroll_el = $(this).attr('href');

    if ($(scroll_el).length) $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);

    return false;
});