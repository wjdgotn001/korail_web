// conBox.js

var win = $(window);
var conBox = $('#conBox');
var conP = conBox.find('.korail_p');
var conImg = conBox.find('.korail_img');

var winH = win.outerHeight() / 3; //브라우저 높이값(3분의 1)
var conBoxOffset = conBox.offset().top;

// console.log(conBoxOffset);

win.on('scroll',function(e){
  var getScroll = win.scrollTop() + winH;

  if(getScroll >= conBoxOffset){
    conP.addClass('action');
    conImg.addClass('action');

  }else{
    conP.removeClass('action');
    conImg.removeClass('action');
  }




});