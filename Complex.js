function Complex(r, i) {
    this.r = r;
    this.i = i;
}

Complex.prototype.plus = function(x) {
    return new Complex(this.r + x.r, this.i + x.i);
}

Complex.prototype.minus = function(x) {
    return new Complex(this.r - x.r, this.i - x.i);
}

Complex.prototype.times = function(x) {
    return new Complex(this.r * x.r - this.i * x.i, this.r * x.i + this.i * x.r);
}

Complex.prototype.squared = function() {
    return this.times(this);
}

Complex.prototype.toString = function() {
    return '(' + this.r + ', ' + this.i + ')';
}

Complex.prototype.magnitude = function() {
    return Math.sqrt(this.r * this.r + this.i * this.i);
}

module.exports = Complex;
