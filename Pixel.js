Complex = require('./Complex.js');

function Pixel(r, i) {
    this.c = new Complex(r, i);
    this.value = this.c;
    this.iterations = 0;
}

Pixel.prototype.iterate = function() {
    this.value = this.value.squared().plus(this.c);
    ++this.iterations;
}

Pixel.prototype.escaped = function() {
    return (this.value.magnitude() >= 2.0);
}

Pixel.prototype.determine = function(maxIterations) {
    while (!this.escaped() && --maxIterations >= 0) {
        this.iterate();
    }

    if (maxIterations < 0) {
        return -1;
    }

    return this.iterations;
}

Pixel.prototype.getColor = function(min, max) {
    if (!this.escaped()) {
        return '#000000';
    }

    var pct = (this.iterations - min) / (max - min);
    var r = 0;
    var g = 0;
    var b = 0;

    if (pct >= 0.5) {
        pct = pct * 2 - 1;
        b = Math.floor(255 * pct);
        r = Math.floor(255 * (1 - pct));
    } else {
        pct = pct * 2;
        r = Math.floor(255 * pct);
        g = Math.floor(255 * (1 - pct));
    }

    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

module.exports = Pixel;
