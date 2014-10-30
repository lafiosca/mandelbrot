var express = require('express');
var Pixel = require('./Pixel.js');

var app = express();

app.set('host', 'localhost');
app.set('port', 5017);

app.get('/:ox?/:oy?/:zoom?', function(request, response) {

    var ROWS = 40;
    var COLS = 100;
    var ITERATION_LIMIT = 15;

    var ox, oy, zoom, width, halfWidth, left, top, row, col, nextzoom, pixels, p, it, minIt, maxIt;

    var result = '<html><head></head><body bgcolor="#000000">';

    try {
        ox = parseFloat(request.param('ox', -0.6));
        oy = parseFloat(request.param('oy', 0.0));
        zoom = parseFloat(request.param('zoom', 1.0));
        if (zoom < 1.0) {
            throw true;
        }
    } catch (ex) {
        ox = -0.6;
        oy = 0.0;
        zoom = 1.0;
    }

    width = 2.4 / zoom;
    halfWidth = width / 2.0;
    left = ox - halfWidth;
    top = oy + halfWidth;
    nextzoom = zoom * 1.5;

    pixels = new Array();

    for (row = 0; row < ROWS; ++row) {

        pixels[row] = new Array();

        y = top - width * row / (ROWS - 1);

        for (col = 0; col < COLS; ++col) {

            x = left + width * col / (COLS - 1);

            p = new Pixel(x, y);
            it = p.determine(ITERATION_LIMIT);
            pixels[row][col] = p;
            if (it >= 0) {
                if (minIt === undefined || it < minIt) {
                    minIt = it;
                }
                if (maxIt === undefined || it > maxIt) {
                    maxIt = it;
                }
            }

        }
    }

    for (row = 0; row < ROWS; ++row) {
        for (col = 0; col < COLS; ++col) {
            p = pixels[row][col];
            result += '<a href="/' + p.c.r + '/' + p.c.i + '/' + nextzoom + '"><font color="' + p.getColor(minIt, maxIt) + '" size="-2">o</font></a>';
        }
        result += '<br />';
    }

    result += '<br /><font color="#ffffff" size="-1">Code available at <a href="https://github.com/lafiosca/mandelbrot"><font color="#ffffff">Github</font></a></body></html>';

    response.send(result);

});

app.listen(app.get('port'), app.get('host'), function() {
    console.log("Node app is running at " + app.get('host') + ":" + app.get('port'))
});

