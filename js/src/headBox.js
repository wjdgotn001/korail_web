//headBox.js


(function($){


//gnbBtn
var gnbWrap = $('.gnbBox_wrap');
var gnbBtn = gnbWrap.children('.gnb_btn');
var gnbBox = gnbWrap.children('.gnbBox');

gnbBox.hide();
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
  });

  
//gnbList
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

var gnbConList =  '<li><dl><dt><span></span></dt><dd></dd></dl></li>';
var gnbBoxUl = gnbBox.children('.gnb_list');
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

// accordion
var gnbBoxLi = gnbBoxUl.children('li');
var gnbBoxDl = gnbBoxLi.children('dl');
var gnbBoxDt = gnbBoxDl.children('dt');
var gnbBoxDd = gnbBoxDl.children('dd');

// console.log(gnbBoxDt);
gnbBoxDt.on('click', ['a'], function(e){
  e.preventDefault();
  
  var it = $(this);
  console.log(it.parents().index());

  it.siblings('dd').stop().slideToggle(function(){
    var ddDisplay = it.siblings('dd').css('display') === 'none';
    
      if(ddDisplay){
        //none
        it.removeClass('action');
        it.children('span').addClass('hidden_context');
        it.children('span').text('열기');
        
    
      }else{
        //block
        it.addClass('action');
        it.children('span').addClass('hidden_context');
        it.parents('li').siblings().find('dt').removeClass('action');
        it.children('span').text('닫기');
      }
    });
    
    it.parents('li').siblings().find('dd').stop().slideUp();
});//gnbBoxDt.on




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
