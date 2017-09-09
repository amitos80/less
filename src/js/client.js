'use strict';

class ExtensionClient {
  constructor() {

    document.addEventListener('DOMContentLoaded', function(){
        console.log('DOMContentLoaded...');
    });
  }
}

new ExtensionClient();
