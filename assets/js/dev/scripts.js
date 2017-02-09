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

    //$(".snipcart-summary").css('display', 'none');
    // Snipcart.subscribe('item.added', function (item) {
    //     console.log("added");
    //     $(".snipcart-summary").css('display', 'block');
    // });
    // Snipcart.subscribe('cart.ready', function (data) {
    //     if(data.order !== undefined) {
    //         console.log(data.order);
    //         if (data.order.items.length != 0) {
    //         //console.log('yes');
    //             $(".snipcart-summary").css('display', 'block');
    //         } else {
    //         //console.log('no');
    //             $(".snipcart-summary").css('display', 'none');
    //         }
    //     }
    // });

    // Snipcart.execute('bind', 'order.completed', function(order) {
    //     var url = '/thankyou?order=' + order.token;
    //     window.location.href = url;
    // });

    // window.addEventListener("beforeunload", function () {
    //     document.desktop-right.classList.add("animate-out");
    // });

});
