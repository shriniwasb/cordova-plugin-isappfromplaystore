package com.laurus.plugins;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.content.pm.PackageManager;

import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

public class IsAppFromPlayStore extends CordovaPlugin {
	public static final String ACTION = "IsAppFromPlayStore";
	@Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		try {
	        if (action.equals("isAppFromPlayStore")) {
	        	PackageManager packageManager = this.cordova.getActivity().getPackageManager();
				String installer = packageManager.getInstallerPackageName(this.cordova.getActivity().getPackageName());
				if ( installer == null ) {
					// not installed via application (like Google Play)
					callbackContext.success("false");
				} else {
					callbackContext.success("true");
				}
		    	return true;
		    }
		    return false;
	    } catch (Exception e) {
	    	callbackContext.success("N/A");
	      	return true;
	    }
	}
		
}