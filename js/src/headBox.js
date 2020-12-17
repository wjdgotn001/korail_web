//headBox.js


(function($){

//gnbBtn
var gnbWrap = $('.gnbBox_wrap');
var gnbBtn = gnbWrap.children('.gnb_btn');
var gnbBox = gnbWrap.children('.gnbBox');

gnbBtn.on('click',function(e){
    e.preventDefault();

    var gnbDisplay = gnbBox.css('display');

    if(gnbDisplay === 'none'){
        gnbBox.stop().fadeIn();
        gnbBtn.addClass('on');

    }else{
        gnbBox.stop().fadeOut();
        gnbBtn.removeClass('on');
    }

//gnbList
var 


  


});











// unbBox
var unbBox = $('.unbBox');
var unbBoxLan = unbBox.find('.lan');
var unbDt = unbBoxLan.find('dt');
var unbDd = unbBoxLan.find('dd');
var unbbtn = unbDt.children('button');
var unbDdbtnLink = unbDd.children('a');

unbDd.hide();
var unbSlideDown = function(){
  unbDd.stop().slideDown();
};
var unbSlideUp = function(){
  unbDd.stop().slideUp();
};

unbBoxLan.on({
  'mouseenter':unbSlideDown,
  'mouseleave':unbSlideUp
});
unbbtn.on('focus',unbSlideDown);
unbDdbtnLink.eq(-1).on('blur',unbSlideUp);

})(jQuery);