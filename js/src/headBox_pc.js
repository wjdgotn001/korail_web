// headBox_pc.js

(function($){

  var gnbContent = [
    {'title': {'name':'정보공개', 'link':'natuur.html', 'target':'_blank'},
     'sub':[{'subT': '사전정보공표', 'subLink' : 'natuur.html'},{'subT': '정보목록', 'subLink' : 'natuur.html'}]
    },

    {'title': {'name':'사업분야', 'link':'natuur.html', 'target':'_blank'},
     'sub':[{'subT': '여객사업', 'subLink' : 'natuur.html'},{'subT': '광역철도사업', 'subLink' : 'natuur.html'},
           {'subT': '종합물류사업', 'subLink' : 'natuur.html'},{'subT': '자산개발사업', 'subLink' : 'natuur.html'}]
    },

    {'title': {'name':'열린경영', 'link':'natuur.html', 'target':'_blank'},
     'sub':[{'subT': '지속가능경영', 'subLink' : 'natuur.html'},{'subT': '철도안전', 'subLink' : 'natuur.html'},
           {'subT': '윤리경영', 'subLink' : 'natuur.html'}]
    },

    {'title': {'name':'사이버홍보실', 'link':'natuur.html', 'target':'_blank'},
     'sub':[{'subT': '보도자료', 'subLink' : 'natuur.html'},{'subT': '코레일sns', 'subLink' : 'natuur.html'},
           {'subT': '공지사항', 'subLink' : 'natuur.html'}]
    },

    {'title': {'name':'고객지원', 'link':'natuur.html', 'target':'_blank'},
     'sub':[{'subT': '고객의소리', 'subLink' : 'natuur.html'},{'subT': '고객서비스헌장', 'subLink' : 'natuur.html'}]
    }
  ];

  var gnbConList =  '<li><dl><dt></dt><dd></dd></dl></li>';

  var gnbBox = $('.gnbBox');
  var gnbBoxUl = gnbBox.children('.gnb_list');
  var gnbBoxLi = gnbBoxUl.children('li');
  var gnbconLen = gnbContent.length;
  var gnbDt, gnbDd, subconLen, titleN, subN;
  var i,j;
  

  for(i=0; i<gnbconLen; i+=1){
    gnbBoxUl.append(gnbConList);
    gnbDt = gnbBoxUl.children('li').eq(i).find('dt');
    gnbDd = gnbBoxUl.children('li').eq(i).find('dd');
    titleN = gnbContent[i].title;
    gnbDt.append('<a href="'+titleN.link+'" target="'+titleN.target+'">'+titleN.name+'</a>');

    subconLen = gnbContent[i].sub.length;
  for(j=0; j<subconLen; j+=1){
    subN = gnbContent[i].sub[j];
    gnbDd.append('<a href="'+subN.subLink+'">'+subN.subT+'</a>');
  }
  }//for
  
  // ===============================
  var gnbBoxDt = gnbBox.find('dt');
  var gnbBoxDd = gnbBox.find('dd');
  var gnbBoxDtLink = gnbBoxDt.find('a');
  var gnbBoxDdLink = gnbBoxDd.find('a');
  gnbBoxDd.hide();
  var gnbSlideDown = function(){
    gnbBoxDd.stop().slideDown();
  };
  var gnbSlideUp = function(){
    gnbBoxDd.stop().slideUp();
  };

  gnbBox.on({
    'mouseenter':gnbSlideDown,
    'mouseleave':gnbSlideUp
  });
  
  gnbBoxDtLink.on('focus',gnbSlideDown);
  gnbBoxDdLink.eq(-1).on('blur',gnbSlideUp);


// 상단고정==============================================
var win = $(window);
var gnbBox = $('.gnbBox');
var headBoxWrap = $('.headBox_wrap');
var headDt = gnbBoxUl.find('dt');

// 브라우저 상단에서 떨어져 있는 거리 체크
var gnbOffset = gnbBox.offset().top;
// console.log('offset:',gnbOffset);

win.on('scroll',function(e){

  var winScrollTop = win.scrollTop();
  // console.log(winScrollTop);

  if(winScrollTop >= gnbOffset){
    headBoxWrap.css({'top':-gnbOffset +'px'});
    headDt.css({'color':':#0054a6'});
  }else{
    headBoxWrap.removeAttr('style');
    headDt.removeAttr('style');
  }
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
