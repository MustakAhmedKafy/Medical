$(document).ready(function(){
    $('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
    
    
    
    
  var $grid = $('.grid').isotope({
  itemSelector: '.element-items',
  layoutMode: 'fitRows'
});
var filterFns = {
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) >250;
  },
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
    
    
    
    
    
    
    
    
    
    
    
});

