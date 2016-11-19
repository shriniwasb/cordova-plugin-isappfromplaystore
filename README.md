IsAppFromPlayStore
============
To check android app is installed from google play store or not.

Installation
------------

### For Cordova 3.0.x:

1. To add this plugin just type: `cordova plugin add https://github.com/shriniwasb/cordova-plugin-isappfromplaystore.git` or `phonegap local plugin add https://github.com/shriniwasb/cordova-plugin-isappfromplaystore`
2. To remove this plugin type: `cordova plugin remove cordova-plugin-isappfromplaystore` or `phonegap local plugin remove cordova-plugin-isappfromplaystore`


Usage:
------

Call the `cordova.isAppFromPlayStore.isTrue().then((val)=>{})` method by passing in your success and error callbacks:

### Example
```javascript
function onDeviceReady()
{
	cordova.isAppFromPlayStore.isTrue().then((version)=> {
        console.log(version);
         if(version=="false"){
            console.log("App not install from playstore");
            //check new app version present or not
            this.getAppVersion();
         }else{
            console.log("App install from playstore");
            //do nothing
         }
      });
}
```

## License

The MIT License

Copyright (c) 2016 Shriniwas Bhoybar (http://github.com/shriniwasb)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
