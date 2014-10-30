HTML Mandelbrot Generator
=========================

This is simply a cute, little Node.js Express app for generating a view of the Mandelbrot set using a grid of hyperlinked "o" pixels. You can click any of the pixels to zoom in.

Running
-------

The app requires node and npm to be installed. Simply clone this repository and run "npm install" in its directory, followed by "npm start" to make it listen on localhost:5017. Tweak the parameters in index.js if you want it to listen elsewhere.

A demo is available at: [mandelbrot.lafiosca.com](http://mandelbrot.lafiosca.com/)

Background
----------

I originally wrote this application in C and compiled it into my cgi-bin directory. I have the original binary, which still works (with a little effort), but the source code has seemingly been lost to the ages. I decided it would be fun to rewrite it from memory in JavaScript as my first Node.js project.

I had also hoped to upgrade it to support arbitrary precision zooming. The original app had the problem that after zooming in about 6-8 times, everything just turned blobby. At first I attempted to write this new version using [bignumber.js](http://mikemcl.github.io/bignumber.js/), but my initial effort was rendering way too slowly. I decided to just get the original functionality reimplemented and worry about the precision experiments later.

As of version 0.1.1, this application produces HTML version 3 output, i.e. font tags with color attributes. This method is actually no longer supported by HTML5, and as such the code should probably be revised to use CSS. Then again, part of the charm is how rough-hewn it is.

License
-------

Mandelbrot HTML Generator
Copyright (C) 2014  Joe Lafiosca <joe@lafiosca.com>

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
