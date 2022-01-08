var width = 0
var height = 0

// output targets (cells in a table)
var bodyWidth = document.querySelector('.body-width')
var bodyHeight = document.querySelector('.body-height')
var fontSize = document.querySelector('.font-size');
var h1Width = document.querySelector('.h1-box-width');

var onresize = function () {
    width = document.body.clientWidth;
    height = document.body.clientHeight;
    bodyWidth.innerHTML = width
    bodyHeight.innerHTML = height

    var el = document.querySelector('.section-h1');

    // get & output h1 font-size
    var styleFZ = window.getComputedStyle(el, null).getPropertyValue('font-size');
    // var getFontSize = parseFloat(styleFZ);
    fontSize.innerHTML = styleFZ;
    //  end

    // get & output h1 width integer
    var styleBW = window.getComputedStyle(el, null).getPropertyValue('width');
    var regExp = /\d+/g;
    var match = styleBW.match(regExp);
    // console.log(match[0] + 'px')
    h1Width.innerHTML = match[0] + 'px'
    //  end

    // h1Width.innerHTML = Math.floor(ParseInt(styleBW));
    // h1Width.innerHTML = styleBW;
}
window.addEventListener("resize", onresize);




// now you have a proper float for the font size (yes, it can be a float, not just an integer)
// el.style.fontSize = (fontSize + 1) + 'px';
