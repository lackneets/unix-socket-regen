# unix-socket-regen

There is an issue that I have to remove old socket file after server crashed, chmod new socket file after server started manually.

This tool try to remove existed unix socket file and fix permission to ``0666`` after it generated, so that can be proxied via Apache.


## Usage
````
npm install unix-socket-regen --save
````


````js
require('unix-socket-regen')();
````
