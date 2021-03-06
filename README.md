v-experiment
============

An experiment with video.js.

Installation
------------

    npm install
    npm install wzrd -g

Usage
-----

    make run    

Or run [wzrd](https://github.com/maxogden/wzrd) directly:

    wzrd index.js

Then, wzrd will say something like:

    wzrd index.js
    server started at http://localhost:9966

You can open your browser to that.

Debugging video.js
------------------

In order to step into unminified video.js source, you need to do the following:

- Clone the [video.js repo](https://github.com/videojs/video.js).
- Build it:
  - **Switch to Node v0.12.7** if you are using Node v4.0.0. It doesn't build in v4 yet.
  - `npm install`
  - `grunt dist`
  - `npm link`
- In v-experiment's directory, run `npm link video.js` to make Browserify use your local (unminified) copy of video.js. When you launch with `make run`, you'll be able to step into video.js source.

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 President and Fellows of Harvard College

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
