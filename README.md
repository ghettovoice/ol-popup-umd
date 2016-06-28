[![view on npm](http://img.shields.io/npm/v/ol3-popup-umd.svg)](https://www.npmjs.org/package/ol3-popup-umd)

# ol3-popup-umd

Basic popup for an OpenLayers 3 map. By default the map is centered so that the popup is entirely visible.
This project originally forked from [ol3-popup](https://github.com/walkermatt/ol3-popup) by Matt Walker.

## Installation

Install it thought NPM:

```shell
npm install ol3-popup-umd
```

Or download the latest version archive and add it with script tag:

```html
<script src="ol3-popup-umd/dist/bundle.min.js"></script>
```

## Usage

Plugin is packed into UMD wrapper, import it with CommonJS or ES6:

```js
import PopupOverlay from 'ol3-popup-umd';
const PopupOverlay = require('ol3-popup-umd');
```

In Browser environment it is available as `ol.PopupOverlay`.

## Demo

Clone or download the repository and open html files from `examples` directory in a browser.
Click on the map to display a popup, click close to the edge of the map to see it pan into view.

## Credit

Based on [ol3-popup](https://github.com/walkermatt/ol3-popup) by Matt Walker and
an example by [Tim Schaub](https://github.com/tschaub) posted on the [OL3-Dev list](https://groups.google.com/forum/#!forum/ol3-dev).

## API Reference


## License

MIT 2016 (c) Matt Walker, Vladimir Vershinin
