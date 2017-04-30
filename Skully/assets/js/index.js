$(document).ready(function(){

    // Scroll to top after refresh of browser, resets the parallax animations
    $(this).scrollTop(0);

    // Mobile drop down menu
    (function() {
        "use strict";

        var toggles = document.querySelectorAll(".cmn-toggle-switch");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
            });
        }
    })();

    // Mobile menu button animation
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    $('.main').click(function(){
    	if ($('#panel').is(':visible')){
    		$("#panel").slideToggle("slow");
    		$('#flip').removeClass('active');
    	}
    });
});
