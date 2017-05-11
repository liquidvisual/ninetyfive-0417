/*
    MAIN.JS - Last updated: 11.05.17
*/
//-----------------------------------------------------------------
// WINDOW LOAD
//-----------------------------------------------------------------

$(window).on('load', function() {
    $('html').addClass('has-loaded');
});

//-----------------------------------------------------------------
// LAUNCH MANAGE ON KEYPRESS
//-----------------------------------------------------------------

key('⌘+shift+m, ctrl+shift+m', function(){
  window.location = '/manage/';
});

//-----------------------------------------------------------------
// HEADROOM.js
//-----------------------------------------------------------------

$(".global-header").headroom({
    // vertical offset in px before element is first unpinned
    offset : 60,
    // scroll tolerance in px before state changes
    tolerance : 0,
    // or you can specify tolerance individually for up/down scroll
    tolerance : {
        up : 5,
        down : 0
    },
    // css classes to apply
    classes : {
        // when element is initialised
        initial : "headroom",
        // when scrolling up
        pinned : "headroom--pinned",
        // when scrolling down
        unpinned : "headroom--unpinned",
        // when above offset
        top : "headroom--top",
        // when below offset
        notTop : "headroom--not-top",
        // when at bottom of scoll area
        bottom : "headroom--bottom",
        // when not at bottom of scroll area
        notBottom : "headroom--not-bottom"
    },
    // element to listen to scroll events on, defaults to `window`
    // scroller : someElement,
    // callback when pinned, `this` is headroom object
    onPin : function() {},
    // callback when unpinned, `this` is headroom object
    onUnpin : function() {},
    // callback when above offset, `this` is headroom object
    onTop : function() {},
    // callback when below offset, `this` is headroom object
    onNotTop : function() {},
    // callback when at bottom of page, `this` is headroom object
    onBottom : function() {},
    // callback when moving away from bottom of page, `this` is headroom object
    onNotBottom : function() {}
});

//-----------------------------------------------------------------
// PARALLAX
//-----------------------------------------------------------------

// .parallax(xPosition, speedFactor, outerHeight) options:
// xPosition - Horizontal position of the element
// inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling,
// 2 is twice the speed of scrolling
// outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

function parallax(){
    $('.lv-hero-item').parallax("50%", 0.1);
}

// $(window).on('resize', function(){
//     if (($(window).width() >= 1260)) {
//         parallax();
//     } else {
//         parallax.destroy();
//     }
// });

if (($(window).width() >= 1260)) {
    parallax();
}

// parallax();

//-----------------------------------------------------------------
// SCROLLTO ANYTHING WITH AN ID
// USAGE:
// pass #id as target - window will scroll to it
//-----------------------------------------------------------------

function scrollTo(target) {
    var href = target,
        offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 800);
    return false;
}

//==================================================
// PLACE ON CLICKS
//==================================================

$('a[href*="#"]:not([href="#"])').click(function(event) {
    event.preventDefault();
    scrollTo($(this).attr('href'));
});

//==================================================
//
//==================================================