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
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});