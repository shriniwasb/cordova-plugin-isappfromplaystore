"use strict";
var getPromisedCordovaExec = function (command, success, fail) {
  var toReturn, deferred, injector, $q;
  if (success === undefined) {
    if (window.jQuery) {
      deferred = jQuery.Deferred();
      success = deferred.resolve;
      fail = deferred.reject;
      toReturn = deferred;
    } else if (window.angular) {
      injector = angular.injector(["ng"]);
      $q = injector.get("$q");
      deferred = $q.defer();
      success = deferred.resolve;
      fail = deferred.reject;
      toReturn = deferred.promise;
    } else if (window.when && window.when.promise) {
      deferred = when.defer();
      success = deferred.resolve;
      fail = deferred.reject;
      toReturn = deferred.promise;
    } else if (window.Promise) {
      toReturn = new Promise(function(c, e) {
        success = c;
        fail = e;
      });
    } else if (window.WinJS && window.WinJS.Promise) {
      toReturn = new WinJS.Promise(function(c, e) {
        success = c;
        fail = e;
      });
    } else {
      return console.error('IsAppFromPlayStore either needs a success callback, or jQuery/AngularJS/Promise/WinJS.Promise defined for using promises');
    }
  }
  // 5th param is NOT optional. must be at least empty array
  cordova.exec(success, fail, "IsAppFromPlayStore", command, []);
  return toReturn;
};

var isAppFromPlayStore = function (success, fail) {
  return getPromisedCordovaExec('isAppFromPlayStore', success, fail);
};


isAppFromPlayStore.isTrue = function (success, fail) {
  console.log("Plugin Call");
  return getPromisedCordovaExec('isAppFromPlayStore', success, fail);
};

module.exports = isAppFromPlayStore;
