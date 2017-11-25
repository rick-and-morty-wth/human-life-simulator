## Hidden Statusbar for Apache Cordova

**Cordova / PhoneGap Plugin that hides the statusbar at launch.**

As per [Cordova Plugin Statusbar](https://github.com/apache/cordova-plugin-statusbar) documentation, you can't hide the statusbar via his methods (`StatusBar.hide()`) untile the app is started. You need, in fact to tweak the  the info.plist in order to start the app without statusbar. This plugin just adds those lines for you.

## Install

#### Latest published version on npm (with Cordova CLI >= 5.0.0)

```
cordova plugin add cordova-plugin-hidden-statusbar
```

#### Latest version from GitHub

```
cordova plugin add https://github.com/enricodeleo/cordova-plugin-hidden-statusbar.git
```

## Platforms

Applies to iOS only.

## License

[MIT License](http://ilee.mit-license.org)
