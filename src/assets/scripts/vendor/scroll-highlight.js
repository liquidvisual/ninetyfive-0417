/*
    SCROLL-HIGHLIGHT.JS - Last updated: 02.03.17

    - Notes: http://jsfiddle.net/mekwall/up4nu/
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

	var lastId;
	var topMenu = $('[data-scroll-highlight]');
	var topMenuHeight = topMenu.outerHeight();
	var menuItems = topMenu.find("a");

	//-----------------------------------------------------------------
	// MAP MENU TARGET
	//-----------------------------------------------------------------

	var scrollItems = menuItems.map(function(){
		if ($(this).attr('href') == '#')
			return null;
			var item = $($(this).attr('href'));
			if (item.length) return item;
		});

	 //-----------------------------------------------------------------
	 // CLICK
	 //-----------------------------------------------------------------

	 menuItems.click(function(e){
	   var href = $(this).attr("href"),
	       o = href === "#" ? 0 : $(href).offset().top-topMenuHeight+15;
	   $('html, body').stop().animate({
	       scrollTop: o
	   }, 800);
	   e.preventDefault();
	 });

	 //-----------------------------------------------------------------
	 // BIND SCROLL
	 //-----------------------------------------------------------------

	$(window).scroll(function(){

		var fromTop = $(this).scrollTop()+topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
			return this;
		});

		// Get the id of the current element
		cur = cur[cur.length-1];

		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			menuItems
			.parent().removeClass('active')
			.end().filter('[href="#'+id+'"]').parent().addClass('active');
		}

		// Bit hacky - activate on scroll bottom
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			menuItems.parent().removeClass('active').find('[href="#contact-us"]').parent().addClass('active');
		}
	});
//--
}(jQuery));

//==================================================
//
//==================================================
//==================================================
//
//==================================================