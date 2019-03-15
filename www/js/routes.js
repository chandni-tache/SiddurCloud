angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('siddurCloud.siddurBlessings', {
    url: '/Siddur_Menu',
    views: {
      'side-menu21': {
        templateUrl: 'templates/siddurBlessings.html',
        controller: 'siddurBlessingsCtrl'
      }
    }
  })

  .state('siddurCloud.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('siddurCloud', {
    url: '/side-menu21',
    templateUrl: 'templates/siddurCloud.html',
    controller: 'siddurCloudCtrl'
  })

  .state('siddurCloud.prayerTimes', {
    url: '/zmanim',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prayerTimes.html',
        controller: 'prayerTimesCtrl'
      }
    }
  })

  .state('addShul', {
    url: '/addShulPage',
    templateUrl: 'templates/addShul.html',
    controller: 'addShulCtrl'
  })

  .state('siddurCloud.minyanMap', {
    url: '/minyanim',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minyanMap.html',
        controller: 'minyanMapCtrl'
      }
    }
  })

  .state('shulDetail', {
    url: '/shulDetail/:id',
    templateUrl: 'templates/SelectedShul.html',
    controller: 'SelectedShulCtrl',
    params: {
      id: null
    }}
  )

  .state('siddurCloud.sefaria', {
    url: '/sefaria',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sefaria.html',
        controller: 'sefariaCtrl'
      }
    }
  })

  .state('siddurCloud.shacharit', {
    url: '/Shacharit',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shacharit.html',
        controller: 'shacharitCtrl'
      }
    }
  })

  .state('siddurCloud.mincha', {
    url: '/mincha',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mincha.html',
        controller: 'minchaCtrl'
      }
    }
  })

  .state('siddurCloud.arvit', {
    url: '/arvit',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arvit.html',
        controller: 'arvitCtrl'
      }
    }
  })

  .state('mournerSKaddish', {
    url: '/mkaddish',
    templateUrl: 'templates/mournerSKaddish.html',
    controller: 'mournerSKaddishCtrl'
  })

  .state('siddurCloud.washingHands', {
    url: '/hands',
    views: {
      'side-menu21': {
        templateUrl: 'templates/washingHands.html',
        controller: 'washingHandsCtrl'
      }
    }
  })

  .state('siddurCloud.blessingOverBread', {
    url: '/bread',
    views: {
      'side-menu21': {
        templateUrl: 'templates/blessingOverBread.html',
        controller: 'blessingOverBreadCtrl'
      }
    }
  })

  .state('siddurCloud.blessingOverWine', {
    url: '/wine',
    views: {
      'side-menu21': {
        templateUrl: 'templates/blessingOverWine.html',
        controller: 'blessingOverWineCtrl'
      }
    }
  })

  .state('siddurCloud.blessingOverFruitsOfATree', {
    url: '/fruitsTree',
    views: {
      'side-menu21': {
        templateUrl: 'templates/blessingOverFruitsOfATree.html',
        controller: 'blessingOverFruitsOfATreeCtrl'
      }
    }
  })

  .state('siddurCloud.blessingOverFruitsOfTheGround', {
    url: '/fruitsGround',
    views: {
      'side-menu21': {
        templateUrl: 'templates/blessingOverFruitsOfTheGround.html',
        controller: 'blessingOverFruitsOfTheGroundCtrl'
      }
    }
  })

  .state('siddurCloud.blessingOverOtherFoods', {
    url: '/otherFoods',
    views: {
      'side-menu21': {
        templateUrl: 'templates/blessingOverOtherFoods.html',
        controller: 'blessingOverOtherFoodsCtrl'
      }
    }
  })

  .state('siddurCloud.blessingOverFoodGrains', {
    url: '/foodGrains',
    views: {
      'side-menu21': {
        templateUrl: 'templates/blessingOverFoodGrains.html',
        controller: 'blessingOverFoodGrainsCtrl'
      }
    }
  })

  .state('siddurCloud.blessingAfterABreadMeal', {
    url: '/birkatHamazon',
    views: {
      'side-menu21': {
        templateUrl: 'templates/blessingAfterABreadMeal.html',
        controller: 'blessingAfterABreadMealCtrl'
      }
    }
  })

  .state('siddurCloud.foodBlessings', {
    url: '/food_blessings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/foodBlessings.html',
        controller: 'foodBlessingsCtrl'
      }
    }
  })

  .state('siddurCloud.otherBlessings', {
    url: '/other_blessings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/otherBlessings.html',
        controller: 'otherBlessingsCtrl'
      }
    }
  })

  .state('siddurCloud.aboutUs', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('siddurCloud.termsOfUse', {
    url: '/terms',
    views: {
      'side-menu21': {
        templateUrl: 'templates/termsOfUse.html',
        controller: 'termsOfUseCtrl'
      }
    }
  })

  .state('siddurCloud.privacyPolicy', {
    url: '/privacy_policy',
    views: {
      'side-menu21': {
        templateUrl: 'templates/privacyPolicy.html',
        controller: 'privacyPolicyCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/Siddur_Menu')


});
