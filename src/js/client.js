'use strict';

import '../css/client.css'

class ExtensionClient {
  constructor() {

    document.addEventListener('DOMContentLoaded', function(){
        console.log('DOMContentLoaded...');
    });
  }
}

new ExtensionClient();
