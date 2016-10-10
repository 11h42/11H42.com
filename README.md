# 11h42.com

> Accélérateur de projets près de Bordeaux

## Install

    npm install
    
N.B.: [`csscritic`](https://github.com/cburgmer/csscritic) require `libcairo-dev` and its dependencies (see following issues [libjpeg-dev][libjpeg-dev], [libgif-dev][libgif-dev], [node-canvas][node-canvas]).

[libjpeg-dev]: https://github.com/cburgmer/csscritic/issues/70
[libgif-dev]: https://github.com/cburgmer/csscritic/issues/69
[node-canvas]: https://github.com/Automattic/node-canvas/issues/415#issuecomment-144279224

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

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


[1]: localhost:5000/tests/visual-regression.html?mode=dev