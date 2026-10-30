HTML Mandelbrot Generator
=========================

This is simply a cute, little static web page for generating a view of the Mandelbrot set using a grid of hyperlinked "o" pixels. You can click any of the pixels to zoom in.

Running
-------

The app is a static page with no build step or server. Open `index.html` in a browser, or serve the directory with any static file server. The view is controlled by the `ox`, `oy`, and `zoom` query parameters.

A demo is available at: [lafiosca.github.io/mandelbrot](https://lafiosca.github.io/mandelbrot/)

Background
----------

I originally wrote this application in C and compiled it into my cgi-bin directory. I have the original binary, which still works (with a little effort), but the source code has seemingly been lost to the ages. I decided it would be fun to rewrite it from memory in JavaScript as my first Node.js project.

I had also hoped to upgrade it to support arbitrary precision zooming. The original app had the problem that after zooming in about 6-8 times, everything just turned blobby. At first I attempted to write this new version using [bignumber.js](http://mikemcl.github.io/bignumber.js/), but my initial effort was rendering way too slowly. I decided to just get the original functionality reimplemented and worry about the precision experiments later.

In 2026 the Express server was dropped in favor of rendering the same output in the browser, so it can be hosted on GitHub Pages.

As of version 0.1.1, this application produces HTML version 3 output, i.e. font tags with color attributes. This method is actually no longer supported by HTML5, and as such the code should probably be revised to use CSS. Then again, part of the charm is how rough-hewn it is.

License
-------

Mandelbrot HTML Generator
Copyright (C) 2014, 2026  Joe Lafiosca <joe@lafiosca.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
