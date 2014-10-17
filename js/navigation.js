/*
File name:
    navigation.js

Description:
    Make Navigation Clickable to Display Sub-navs except for
    single main navs like "Homeschooling" on http://www.simplyfun.com/
*/

// Anonymous function
(function() {

// jQuery Document ready
$(function() {


    $("#mainnav").on("click", "li", function(event) {
        event.preventDefault();
        // Make top level nav items  href="#"
        $(this).children("a").attr("href", "#");

        // Click main nav to make sub-navs appear
        // BUG: Can't make drop-down toggle on the same main nav when clicking it repeatedly
        $("li.activenav").removeClass("activenav").children("ul").slideUp();
        $(this).addClass("activenav").children("ul").slideToggle();
    });

});

})();