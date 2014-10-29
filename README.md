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

