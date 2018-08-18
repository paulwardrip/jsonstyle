
var JsonStyle = function () {

    var head = document.getElementsByTagName("head")[0];

    function style(o) {
        var sheet = document.createElement("style");
        sheet.type = "text/css";
        var styles = css(o);
        sheet.appendChild(document.createTextNode(styles));
        head.appendChild(sheet);
    }

    function css(obj) {
        var csstr = "";
        for (var idx in obj) {
            if (obj.hasOwnProperty(idx)) {
                csstr += idx + " " + JSON.stringify(obj[idx], null, 2).replace(/"/g,'').replace(/,/g, ';') + "\n";
            }
        }
        return csstr;
    }

    function googlefont(name, weights, plusItalics) {
        var url = "https://fonts.googleapis.com/css?family=" + name;
        var append = ":";

        if (weights && weights instanceof Array) {
            for (var idx in weights) {
                url += append + weights[idx];
                append = ",";
                if (plusItalics === true) {
                    url += append + weights[idx] + "i";
                }
            }
        }

        var l = document.createElement("link");
        l.rel = "stylesheet";
        l.type = "text/css";
        l.href = url;

        head.appendChild(l);
    }
    
    return {
        style: style,
        googlefont: googlefont
    }
}();
