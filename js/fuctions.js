function getElementPosition(elemId)
{
    var elem = document.getElementById(elemId);
  
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;
  
    var l = 0;
    var t = 0;
  
    while (elem)
    {
        l += elem.offsetLeft;
        t += elem.offsetTop;
        elem = elem.offsetParent;
    }

    return {"left":l, "top":t, "width": w, "height":h};
}