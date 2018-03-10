angular.module('mm', ['ionic', 'ngCordova', 'angular-md5', 'pascalprecht.translate', 'ngAria', 'oc.lazyLoad', 'ckeditor',
            'ngMessages', 'ngAnimate'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
            window.cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
