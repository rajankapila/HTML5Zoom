function HTML5Zoom(playerDOMID, playerContainerDOMID, playerInnerContainerDOMID, zoomInDOMID, zoomOutDOMID) {
    var _this = this;
    var MAX_ZOOM = 3;
    var ZOOM_IN_FACTOR = 1.1;
    var MAX_VIDEO_HEIGHT = null;
    var MAX_VIDEO_WIDTH = null;

    this.playerDOMID = playerDOMID;
    this.playerContainerDOMID = playerContainerDOMID;
    this.playerInnerContainerDOMID = playerInnerContainerDOMID;
    this.zoomInDOMID = zoomInDOMID;
    this.zoomOutDOMID = zoomOutDOMID;

    function zoom (factor, type) {
        var currentWidth  = $("#" + _this.playerDOMID).width();
        var currentHeight = $("#" + _this.playerDOMID).height();
        var playerContainerWidth = $("#" + _this.playerContainerDOMID).width();
        var playerContainerHeight = $("#" + _this.playerContainerDOMID).height();


        if((type == 'IN' && currentWidth < (MAX_ZOOM * VIDEO_WIDTH)) || (type =='OUT' && currentWidth > playerContainerWidth)) {
            var centerX = (-1 * playerContainerWidth) / 2;
            var centerY = (-1 * playerContainerHeight) / 2;
            var x = parseInt($("#" + _this.playerInnerContainerDOMID).css("left").split("px")[0]);
            var y = parseFloat($("#" + _this.playerInnerContainerDOMID).css("top").split("px")[0]);
            var change = null;
            var newWidth = null;
            var newHeight = null;
            var newLeft = null;
            var newTop = null;

            //adjust for axis of middle of player
            x = (x + centerX);
            y = y + centerY;
            //scale
            x = x * factor;
            y = y * factor;
            //re-adjust for translation to axis
            x = x - centerX;
            y = y - centerY;

            change = parseInt(factor * currentWidth);

            newWidth =  change;
            change = parseInt(factor * currentHeight);

            newHeight =  change;


            //check to see how close we are zeroes and original sizes

            if(Math.abs(newWidth - MAX_VIDEO_WIDTH) < 20) {
                newWidth = MAX_VIDEO_WIDTH;
            }
            if(Math.abs(newHeight -  MAX_VIDEO_HEIGHT) < 20) {
                newHeight = MAX_VIDEO_HEIGHT;
            }
            if(Math.abs(y) < 10) {
                y = 0;
            }
            newLeft = x + "px";
            newTop = y + "px";

            $("#" + _this.playerInnerContainerDOMID).css({"left":newLeft});
            $("#" + _this.playerInnerContainerDOMID).css({"top":newTop});

            $("#" + _this.playerDOMID).attr("width",newWidth);
            $("#" + _this.playerDOMID).attr("height",newHeight);
        }
    }

    function initZooming() {
        $("#" + _this.zoomInDOMID).on("click", function(e) {
            if(!IsMobile && e.which != 1)return;
            zoom((1/ZOOM_IN_FACTOR), "OUT");
        });



        $("#" + _this.zoomOutDOMID).on("click", function(e) {
            if(!IsMobile && e.which != 1)return;
            zoom(ZOOM_IN_FACTOR, "IN");
        });


    }
}