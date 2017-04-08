/**
 * Willwang 2017-04-08
 */ 
$(function() {
    var Drag = {
        isNullOrUndefined: function(obj) {
            if (typeof obj == 'undefined' || obj == null) {
                return true;
            }
            return false;
        },
        registerTableDragEvent: function() {

            var dragTH; // 记录拖拽的列
            var th = $("#dragTable th");
            
            // 1. 按下mousedown
            th.mousedown(function(ev) {
                var ev = ev || window.event;
                // ev.offsetX 鼠标相对于事件源元素的X，Y坐标
                // 这个判断了点击的有效范围
                if (ev.offsetX > $(this).innerWidth() - 10 ) {
                    dragTH = $(this);
                    dragTH.mouseDown = true;
                    dragTH.oldX = ev.pageX || ev.clientX;
                    dragTH.oldWidth = dragTH.innerWidth(); // 记录
                }
            })

            // 2. 拖拽
            th.mousemove(function(ev) {
                var ev = ev || window.ev;
                if (ev.offsetX > $(this).innerWidth() - 10) {
                    $(this).css("cursor", "e-resize");
                } else {
                    $(this).css("cursor", "default");
                }

                if (Drag.isNullOrUndefined(dragTH)) {
                    dragTH = $(this);
                }

                if (!Drag.isNullOrUndefined(dragTH.mouseDown) && dragTH.mouseDown == true) {
                    var difference = (ev.pageX - dragTH.oldX) || (ev.clientX - dragTH.oldX); // 鼠标落点和移动后的距离
                    var newWidth   = dragTH.oldWidth + difference;
                    $(this).css("width", newWidth)
                }
            })

            // 3. 释放
            th.mouseup(function(ev) {
                var ev = ev || window.event;
                if (Drag.isNullOrUndefined(dragTH)) {
                    dragTH = $(this);
                }
                dragTH.mouseDown = false;
            })
        }
    }
    Drag.registerTableDragEvent()
})