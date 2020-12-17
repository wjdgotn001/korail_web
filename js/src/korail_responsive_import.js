// korail_responsive_import.js

(function($){

  var nowW = deviceSize();

  var deviceType = ['mobile','tablet','pc','pcfull'];

  // 변수
  var headBox = $('#headBox');
  var adverBox = $('#adverBox');
  var iconBox = $('#iconBox');
  var conBox = $('#conBox');
  var reservationBox = $('#reservationBox');
  var newsBox = $('#newsBox');

  // import 
  var headPcImport = function(){
    headBox.append('<script src="../js/src/headBox_pc.js"></script>');
  };
  var headImport = function(){
    headBox.append('<script src="../js/src/headBox.js"></script>');
  };
  var adverImport = function(){
    adverBox.append('<script src="../js/src/adverBox.js"></script>');
  };
  var iconImport = function(){
    iconBox.append();
  };
  var conImport = function(){
    conBox.append('<script src="../js/src/conBox.js"></script>');
  };
  var newsImport = function(){
    newsBox.append();
  };

// ======================================================
if(nowW === deviceType[0]){
  headImport();
  adverImport();
  conImport();

  // viewBox.load( url + '' );
}else if(nowW === deviceType[1]){
  headImport();
  adverImport();
  conImport();

}
else{
  headPcImport();
  adverImport();
  conImport();
  
}

  

})(jQuery);
