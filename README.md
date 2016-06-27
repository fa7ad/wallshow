# Wallshow
---
Randomly switch between all the pictures in a folder(recursive) and set them as wallpapers for a given interval (default: 15s).

## Usage:
**CLI:**
```bash
wallshow <DIRECTORY> [<INTERVAL>]
```

**Module:**
```javascript
const wallshow = require('wallshow');
let interval = 30; // 30 seconds

wallshow('/le/path/to/wallpapers', interval);
```

## License: MIT

Wallshow - Random wallpaper slideshow using node.
Copyright © 2016 Fahad Hossain <oneloopone@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

