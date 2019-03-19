angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('cart', {
    url: '/page2',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.accountSetting', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/accountSetting.html',
        controller: 'accountSettingCtrl'
      }
    }
  })

  .state('menu.home', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.list', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/list.html',
        controller: 'listCtrl'
      }
    }
  })

  .state('menu.detail', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu.privacyPolicy', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/privacyPolicy.html',
        controller: 'privacyPolicyCtrl'
      }
    }
  })

  .state('menu.technicalSupport', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/technicalSupport.html',
        controller: 'technicalSupportCtrl'
      }
    }
  })

  .state('login', {
    url: '/page11',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page12',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page5')


});