$(document).ready(function () {
    // Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: false
    });

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
    // $('.logo-slider').slick({
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     autoplay:true,
    //     autoplayspeed:1500,
    //     arrows:false,
    //     dots: false,
    //     pauseOnHover:false,
    //     responsive:[
    //
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 520,
    //             settings: {
    //                 slidesToShow: 3,
    //
    //             }
    //         }
    //
    //     ]
    // });
});
