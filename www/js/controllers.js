angular.module('app.controllers', [])

.controller('siddurBlessingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.reloadState = function() {
        window.location.reload();
    };

}])

.controller('siddurCloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('prayerTimesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('addShulCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('minyanMapCtrl', ['$scope', '$stateParams', 'ApiService','$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ApiService, $cordovaGeolocation, $state) {

var Config = {
    BASE_URL:'https://www.godaven.com/api/V1/shuls/radius-search',
}

$scope.shulData = [];
getDefaultList();
//ADDITIONAL_URL="?lat=28.7040592&lng=77.10249019999992&distance=5&pagenumber=1&nusach=&tefillah=&day=&current_time=13:43&todays_day=3"
function getDefaultList(){
  var DEFAULT_URL = '?lat=40.718106&lng=-73.8448469&&distance=5&nusach=&tefillah=&day=&current_time=13:43&todays_day=3'
  ApiService.getRequest(Config.BASE_URL+DEFAULT_URL).then(function(res) {
    console.log(res);
    $scope.shulData = res;
  }).catch(function(err){
    console.log(err);
  })

}


}])

.controller('SelectedShulCtrl', ['$scope', '$stateParams','ApiService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ApiService) {

  console.log($stateParams.id);
  $scope.shulDetail ={};

  var URL = "https://www.godaven.com/api/V1/shuls/298/details";

  ApiService.getRequest(URL).then(function(res) {
    console.log(res);
    $scope.shulDetail = res;
    console.log($scope.shulDetail.name);
  }).catch(function(err){
    console.log(err);
  })


}])

.controller('sefariaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  var URL = "https://www.godaven.com/api/V1/shuls/298/details";

}])

.controller('shacharitCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName


function ($scope, $stateParams) {
    $scope.alert = function(){
        alert("this is a simple test of the function for the alert - perhaps this can work to our benefit?");
    };

    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    };

}])

.controller('minchaCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    $scope.alert = function(){
        alert("this is a simple test of the function for the alert - perhaps this can work to our benefit?");
    }

    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }
}])

.controller('arvitCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    $scope.alert = function(){
        alert("this is a simple test of the function for the alert - perhaps this can work to our benefit?");
    }

    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }
}])

.controller('mournerSKaddishCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }

}])

.controller('washingHandsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }

}])

.controller('blessingOverBreadCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }

}])

.controller('blessingOverWineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }

}])

.controller('blessingOverFruitsOfATreeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }

}])

.controller('blessingOverFruitsOfTheGroundCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }

}])

.controller('blessingOverOtherFoodsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }

}])

.controller('blessingOverFoodGrainsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }

}])

.controller('blessingAfterABreadMealCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }



}])

.controller('foodBlessingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    //$scope.hands = function(){
    //    alert("Blessing Name: \n\n [Translit] \n\n [English] \n\n [Hebrew]");
    //}

}])

.controller('otherBlessingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.activeLanguage = 1;
    $scope.changeLanguage = function(lan){
        $scope.activeLanguage = lan;
    }


}])

.controller('aboutUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('termsOfUseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('privacyPolicyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
