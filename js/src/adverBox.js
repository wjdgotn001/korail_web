// adverBox.js

(function($){

  // indicator
  var adverBox = $('#adverBox');
  var indiUl = adverBox.find('ul');
  var indiLi = indiUl.children('li');
  var adverLink = indiLi.children('a');
  // adver
  var adverArea = $('.adver_area');
  var adverUl = adverArea.children('ul');
  var adverLi = adverUl.children('li');
  var adverAction = adverArea.find('.action');

  // 공통변수
  var slideN = 0; //슬라이동 이동할 때 변경되는 값
  var permission = true; //해당기능이 수행되는 동안 다른기능이 재수행되지 않도록 하는 변수
  var timed = 3000;

  //마지막 요소 복제 후 li개수 재파악
  var adverLi_clone = adverLi.eq(-1).clone(true);
  adverUl.prepend(adverLi_clone);
  var adverLi_after = adverUl.children('li');

  //ul,li가로값 변경
  adverUl.css({'width':adverLi_after.length * 100 + '%', 'position':'relative', 'left':-100 + '%' });
  adverLi_after.css({'width':100/adverLi_after + '%' });



  // 인디케이터 클릭시 슬라이드 이동==============================================================
  indiLi.children('a').on('click',function(e){
    e.preventDefault();

    var it = $(this);
    slideN = it.parent('li').index();

    if(slideN !== adverAction.index()-1 ){
      indiLi.eq(slideN).addClass('action');
      indiLi.eq(slideN).siblings().removeClass('action');
      adverAction = adverUl.children('.action');

      adverLi.eq(slideN).addClass('action');
      adverLi.eq(slideN).siblings().removeClass('action');
      adverUl.animate({'marginLeft':slideN * -100 + '%'});

    }//indiLi   
  });



})(jQuery);
