$(document).ready(function () {
  if (/Edge\/\d./i.test(navigator.userAgent)) {
    jQuery('html').addClass('ie');
  };
});

$(window).load(function () {
  objectFitImages();
});

$(".menu-btn").click(function () {
  $(this).toggleClass("active");
  $("body").toggleClass("menu-open");
  $("#main-navigation").slideToggle();
});



$('.carousel1').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 300,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  mouseDrag: false,
  touchDrag: false
})

$('.carousel2').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' + '<path d="M4.22,9.28l-4-4L.207,5.267.2,5.261.194,5.254.187,5.246.182,5.24.174,5.231l0,0-.008-.01,0,0L.151,5.2l0,0L.14,5.186l0,0L.13,5.172l0,0L.12,5.157l0-.006L.111,5.142l0-.007,0-.008L.1,5.118l0-.006L.087,5.1l0,0A.751.751,0,0,1,.235,4.2L4.22.22A.75.75,0,0,1,5.28,1.281L2.561,4H14.75a.75.75,0,0,1,0,1.5H2.561L5.28,8.22A.75.75,0,1,1,4.22,9.28Z" transform="translate(4.25 7.25)" fill="#5178e1"/>' + '</svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' + '<path d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z" transform="translate(4.25 7.25)" fill="#5178e1"/>' + '</svg>'],
  dots: true,
  items: 1
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("body").addClass("scrolled");
  }
  else {
    $("body").removeClass("scrolled");
  }
});

$("#scroll-down").click(function () {
  $('html, body').animate({
    scrollTop: $("#content").offset().top
  }, 400);
});