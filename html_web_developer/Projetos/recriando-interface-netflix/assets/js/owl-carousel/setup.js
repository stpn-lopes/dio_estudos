var owl = $('.owl-carousel');

owl.owlCarousel ({
    items: 4,
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    touchDrag: true,
    stagePadding: 10,
    responsive:{
        0: {
            items:1
        },
        250: {
            items:2
        },
        400: {
            items:3
        },
        600: {
            items:4
        },            
        880:{
            items:5
        },
        1200:{
            items:6
        }
    }
});