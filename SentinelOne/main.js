/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
        /* Main Navigation*/
        $(document).ready(function() {
            // Mobile drop down menu
            (function() {
                // "use strict";
                var toggles = document.querySelectorAll(".cmn-toggle-switch");

                function toggleHandler(toggle) {
                    toggle.addEventListener( "click", function(e) {
                    e.preventDefault();
                    active = (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
                    });
                }
                for (var i = toggles.length - 1; i >= 0; i--) {
                    var toggle = toggles[i];
                    toggleHandler(toggle);
                }
            })();
            // Mobile menu button animation
            $("#flip").click(function(){
                $("#mobile-menu").slideToggle("slow");
            });
            $('.main').click(function(){
            	if ($('#mobile-menu').is(':visible')){
            		$("#mobile-menu").slideToggle("slow");
            		$('#flip').removeClass('active');
            	}
            });
        });

        // Accordion active header class
          $('#accordion1 .panel-heading a').click(function() {
            $('#accordion1 .panel-heading').removeClass('actives');
            $(this).parents('#accordion1 .panel-heading').addClass('actives');
          });
          $('#accordion2 .panel-heading a').click(function() {
            $('#accordion2 .panel-heading').removeClass('actives');
            $(this).parents('#accordion2 .panel-heading').addClass('actives');
          });
  
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
      // JavaScript to be fired on the home page
        // Feature tabs
        $('.continue').click(function(){
          $('.nav-tabs > .active').next('li').find('a').trigger('click');
        });
        $('.back').click(function(){
          $('.nav-tabs > .active').prev('li').find('a').trigger('click');
        });

        // Hero video
        function isIE () {
          var myNav = navigator.userAgent.toLowerCase();
          return (myNav.indexOf('msie') !== -1) ? parseInt(myNav.split('msie')[1]) : false;
          }

          window.isIEOld = isIE() && isIE() < 9;
          window.isiPad = navigator.userAgent.match(/iPad/i);
          window.isSafari = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;

          var img = $('.video').data('placeholder'),
          video = $('.video').data('video'),
          noVideo = $('.video').data('src'),
          el = '';

          if($(window).width() > 768 && !isIEOld && !isiPad && !isSafari ) {
            el +=   '<video autoplay loop poster="' + img + '">';
            el +=       '<source src="' + video + '" type="video/mp4">';
            el +=   '</video>';
          } else {
            el = '<div class="video-element" style="background-image: url(' + noVideo + ')"></div>';
          }

          $('.video').prepend(el);
    
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);


})(jQuery); // Fully reference jQuery after this point.
