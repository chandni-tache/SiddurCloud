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
   
.controller('minyanMapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('SelectedShulCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sefariaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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
 