function initZoomy(options) {

    // Initialising options
    var zZoom,
        zCursor,
        zDirection,
        zImages;
        
    // Setting option values/defaults
    zImages = (options.class) ? document.getElementsByClassName(options.class) : document.getElementsByClassName("zoomy");
    zZoom = (options.zoomFactor) ? options.zoomFactor : 2;
    zCursor = (options.cursor) ? options.cursor : false;
    
    if (options.direction && options.direction == "vertical") {
        zDirection = "vertical";
    } else if (options.direction && options.direction == "horizontal") {
        zDirection = "horizontal";
    } else {
        zDirection = "both";
    }

    // Initialising images with zoomy logic
    if (zImages) {
        for (var i = 0; i < zImages.length; i++) {
            (function (index) {                    
                var el = zImages[index].getElementsByTagName("img")[0];
                // Make sure images are loaded (otherwise container height is returned as 0px)
                el.addEventListener("load", function () {
                    zImages[index].style.height = el.height + "px";
                    if (zCursor) { zImages[index].style.cursor = "crosshair"; }
                    // Get dimensions of image container, init some variables
                    var bounds = zImages[index].getBoundingClientRect(),
                        width = bounds.width,
                        height = bounds.height,
                        x,
                        y,
                        zoomX,
                        zoomY;
                    zImages[index].addEventListener("mousemove", function (e) {
                        // Calculate cursor position within image container and apply image transform
                        x = e.clientX - bounds.left;
                        y = e.clientY - bounds.top;
                        zoomX = -Math.round((x/width - 0.5)*width*(zZoom-1)/zZoom);
                        zoomY = -Math.round((y/height - 0.5)*height*(zZoom-1)/zZoom);
                        el.style.transform = "scale(" + zZoom + ")";
                        if (zDirection == "both" || zDirection == "horizontal") { el.style.transform += "translateX(" + zoomX + "px)"; }
                        if (zDirection == "both" || zDirection == "vertical") { el.style.transform += "translateY(" + zoomY + "px)"; }
                    }, false);
                    zImages[index].addEventListener("mouseout", function () {
                        // Reset image scale and transform
                        el.style.transform = "scale(1)";
                        el.style.transform += "translate(0)";
                    }, false);
                    zImages[index].addEventListener("mousedown", function (e) {
                        // Prevent standard click dragging behaviour on images
                        e.preventDefault();
                    }, false);
                }, false);
            })(i);
        }
    }
}