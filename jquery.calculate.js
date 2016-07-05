;(function($){
  $.extend({
  "addNum":function(p1,p2){
    var result = 0;
    p1 = (p1 == undefined)? 0:p1;
    p2 = (p2 == undefined)? 0:p2;
    result = p1 + p2;
    return result;
  },
 "subNum":function(p1,p2){
    var result = 0;
    p1 = (p1 == undefined)? 0:p1;
    p2 = (p2 == undefined)? 0:p2;
    result = p1 - p2;
    return result;
  }
  })
})(jQuery);
