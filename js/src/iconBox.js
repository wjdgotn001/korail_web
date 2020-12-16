// iconBox.js

(function($){
    var iconBox = $('#iconBox');
    var iconArea = iconBox.children('.icon_area');
    var iconAreaUl = iconArea.children('ul');
    var iconAreaLi = iconArea.children('li');

    $(document).ready(function(){

        iconAreaLi.hover(
            function(){
                $(this).animate({
                    marginTop:"-8px"
                },200);
            },

            function(){
                $(this).animate({
                    marginTop:"0%"
                },200);
            }
        )
    });





})(jQuery);
