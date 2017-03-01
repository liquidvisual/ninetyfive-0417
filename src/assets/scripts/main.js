/*
    MAIN.JS - Last updated: 06.10.16
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

$(function() {

    //-----------------------------------------------------------------
    // WINDOW LOAD
    //-----------------------------------------------------------------

    $(window).on('load', function() {
        $('html').addClass('has-loaded');
        $('input, textarea').placeholder(); // IE9 Patch
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

//--
});

//==================================================
//
//==================================================