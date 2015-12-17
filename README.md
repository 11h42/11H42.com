# 11h42.com

## Install

    npm install
    
N.B.: [`csscritic`](https://github.com/cburgmer/csscritic) require `libcairo-dev` and its dependencies (see following issues [libjpeg-dev][libjpeg-dev], [libgif-dev][libgif-dev], [node-canvas][node-canvas]).

[libjpeg-dev]: https://github.com/cburgmer/csscritic/issues/70
[libgif-dev]: https://github.com/cburgmer/csscritic/issues/69
[node-canvas]: https://github.com/Automattic/node-canvas/issues/415#issuecomment-144279224

## Tests

### Visual regression testing (`csscritic`) 

0. be sure to [install dependencies](#install) ;
1. open _[tests/visual-regression.html][1]_ in your browser
    * you can specify `prod` or `dev` as a query string parameter in the URL ;
2. wait… as screenshots are taken ;
3. accept images as references if correct.

## Deploy
 
### Take screenshots (`pageres`)

0. be sure to [install dependencies](#install) ;
1. run:

    ```
    npm run screenshot
    ```
2. send file store in _tests/screenshots/_ directory.

## License

> The MIT License (MIT)
> 
> Copyright (c) 2014 11h42.com
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.


[1]: localhost:5000/tests/visual-regression.html?mode=dev