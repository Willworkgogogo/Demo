(function(){
  var drag=function(dom,parent,text){
        var success =false
        var dragging = false; 
        var iX, iY; 
    this.Do=function(){
            $(dom).mousedown(function(e) { 
                dragging = true; 
                iX = e.clientX - this.offsetLeft; 
                iY = e.clientY - this.offsetTop; 
                this.setCapture && this.setCapture(); 
                return false; 
            }); 
            document.onmousemove = function(e) { 
                if (dragging) { 
                var e = e || window.event; 
                var oX = e.clientX - iX; 
                var oY = e.clientY - iY; 
                if(oX>=220){
                    $(parent).addClass("captcha_active")
                    $(dom).addClass("slide_active")
                    $(dom).css({"left":"220px"}); 
                    $(dom).unbind("mousedown")
                    $(text).text("验证成功！")
                    $(text).css({"color":"#fff"})
                    success=true
                }else if(oX<=2){
                    console.log("should be down too")
                }else{
                    $(dom).css({"left":oX + "px"}); 
                }
                
                return false; 
                } 
            }; 
            $(document).mouseup(function(e) { 
                dragging = false; 
                $(dom)[0].releaseCapture && $(dom)[0].releaseCapture(); 
                e.cancelBubble = true; 
                if($(dom).position().left<215&&!success){
                    $(dom).css({"left":"0px"}); 
                }else{
                    $(dom).css({"left":"220px"}); 
                    $(dom).unbind("mousedown")
                    $(text).text("验证通过")
                    $(text).css({"color":"#fff"})            
                }
            })
    }
    this.reset =function(){
          $(parent).removeClass("captcha_active")
            $(dom).removeClass("slide_active")
            $(dom).css({"left":"0px"}); 
            $(text).text("拖动滑块验证")
            $(text).css({"color":"#cbcbcb"}) 
            drag()
    }
  }
    window.drag =drag
})()