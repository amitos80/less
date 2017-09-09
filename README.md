
## Chrome extension for cleaner Facebook design (*Inspired by Twitter's feed)

- no sidebars
- flat desing (no shadows, no border-radiuses) 
- no ticker
- bigger and centered video player 
- only posts feed
- no list borders
- mobile screen size not supported yet, min width ~700px

## Screenshots 
<img width="1283" alt="screen shot 2017-05-03 at 22 09 33" src="https://cloud.githubusercontent.com/assets/1379356/25677075/3c655ef8-304d-11e7-8536-7039195ee699.png">
<img width="700" alt="screen shot 2017-05-03 at 22 11 18" src="https://cloud.githubusercontent.com/assets/1379356/25677155/8db4569c-304d-11e7-9b6d-8cd4292cd76e.png">
<img width="443" alt="screen shot 2017-05-03 at 22 15 22" src="https://cloud.githubusercontent.com/assets/1379356/25677283/0be5fa34-304e-11e7-82cd-9dd2afe71139.png">
<img width="1221" alt="screen shot 2017-05-03 at 21 58 33" src="https://cloud.githubusercontent.com/assets/1379356/25676900/884d6820-304c-11e7-8172-f4ee6109e064.png">
<img width="1278" alt="screen shot 2017-05-03 at 21 59 54" src="https://cloud.githubusercontent.com/assets/1379356/25676908/8d102db6-304c-11e7-9507-a6652c8f8bdd.png">
<img width="1356" alt="screen shot 2017-05-03 at 22 18 53" src="https://cloud.githubusercontent.com/assets/1379356/25677416/8ed46cdc-304e-11e7-8fc4-6f3256535cc0.png">


## Tech stuff
* Gulp and Webpack build system.
* Crx packaging.
* Live reloading.
* ES6 via Babel.
* Linting via ESLint.

## Dependencies installation

* ```npm install -g gulp webpack```
* ```npm install```

## Starting up

Edit `manifest.json` and update the `name` and `description`. Update your icons in the `src/assets` directory.

The build system generates three files:

* `common.js` - Common code shared across the client script and the background script.
* `client.js` - The client script.
* `background.js` - The background script.

Depending on your extension you might not need both. If this is the case, remove the entry point from `config/webpack.config.js`, the settings from `manifest.json` and the file from `src/js`.

If you need multiple content scripts, add them in `manifest.json`, create a file in `src/js` and add a entry point in `config/webpack.config.js`.

The build system comes with `jQuery` and `lodash` preloaded. If you need more third party scripts, install them via npm and add them to the `ProvidePlugin` options in `config/webpack.config.js`.

## Running

* Run ```gulp```.
* In the Chrome extensions page, click ```Load unpacked extension...``` and select the ```build``` directory.

The extension will automatically reload on code changes.

## Creating a build

* Add your pem as `config/extension.pem`.
* ```gulp build``` will generate a build in ```./dist```.

## License
MIT
