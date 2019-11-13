$('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
})

// sticky navbar less paddin

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 710){
        $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
    }
    else{
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('navbar-background');
    }
})

// smooth scroll

$('.nav-item a,.header-link, #back-to-top').click(function(link){
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top - 25
    },3000);
})

// back to top

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 710){
        $('#back-to-top').addClass('scrollTop');
    }
    else{
        $('#back-to-top').removeClass('scrollTop');
    }
})






$(document).ready(function(){
// ripples 
    $("#header, .info").ripples({
        dropRadius: 25,
        perturbance: 0.6,
      });

// maginific popup

$('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options

    gallery: {
        enabled: true
    }
  });

});