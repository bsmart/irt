// Windows https://github.com/nick-jonas/nick-jonas.github.com/tree/master/windows
// $(document).ready(function() {

//     $('.window').windows({
//         snapping: true,
//         snapSpeed: 500,
//         snapInterval: 1100,
//         onScroll: function(scrollPos) {
//             // scrollPos:Number
//         },
//         onSnapComplete: function($el) {
//             // after window ($el) snaps into place
//         },
//         onWindowEnter: function($el) {
//             // when new window ($el) enters viewport
//         }
//     })

// });


// $(window).load(function() {
//     $('.flexslider').flexslider({
//         animation: "slide"
//     });
// });
$( '.expand' ).click( function( e ) {
    e.preventDefault();
    $.swipebox( [
        { href:'img/halahanFamily@2x.jpg', title:'Mike with the Boys' },
        { href:'img/gallery/slide1.jpg', title:'Lukas at Whistler' },
        { href:'img/gallery/slide2.jpg', title:'Shane PTAG' },
        { href:'img/gallery/slide3.jpg', title:'Mike with the Boys' },
        { href:'img/gallery/slide4.jpg', title:'Lukas at Whistler' },
        { href:'img/gallery/slide5.jpg', title:'Shane PTAG' },
        { href:'img/gallery/slide6.jpg', title:'Mike with the Boys' },
        { href:'img/gallery/slide7.jpg', title:'Lukas at Whistler' },
        { href:'img/gallery/slide8.jpg', title:'Shane PTAG' },
        { href:'img/gallery/slide9.jpg', title:'Lukas at Whistler' },
        { href:'img/gallery/slide10.jpg', title:'Shane PTAG' },
        { href:'img/gallery/slide11.jpg', title:'Mike with the Boys' },
        { href:'img/gallery/slide12.jpg', title:'Lukas at Whistler' },
        { href:'img/gallery/slide13.jpg', title:'Shane PTAG' },
        { href:'img/gallery/slide14.jpg', title:'Mike with the Boys' },
        { href:'img/gallery/slide15.jpg', title:'Lukas at Whistler' },
        { href:'img/gallery/slide16.jpg', title:'Shane PTAG' },
        { href:'img/gallery/slide17.jpg', title:'Shane PTAG' },

    ] );
} );

  $(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".video-wrapper").fitVids();
  });