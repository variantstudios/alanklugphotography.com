$(document).ready(function() {
    // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    }
    // Mobile Menu Funcation
    $(".menu-btn").on('click touch', function() {
        $('.menu').toggleClass('show');
    });

       /* --- SnipCart Funcationality -- */
    Snipcart.execute('registerLocale', 'en', {
        "thankyou_message": "Thanks for your order!"
    });

    // Snipcart.execute('bind', 'order.completed', function(order) {
    //     var url = '/thankyou?order=' + order.token;
    //     window.location.href = url;
    // });

    // window.addEventListener("beforeunload", function () {
    //     document.desktop-right.classList.add("animate-out");
    // });

});
