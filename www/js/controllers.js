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
getDefaultList('40.718106','-73.8448469');
//ADDITIONAL_URL="?lat=40.718106&lng=-73.8448469&distance=5&pagenumber=1&nusach=&tefillah=&day=&current_time=13:43&todays_day=3"
function getDefaultList(lat,lng){
  var DEFAULT_URL = '?lat='+lat+'&lng='+lng+'&distance=5&nusach=&tefillah=&day=&current_time=13:43&todays_day=3'
  ApiService.getRequest(Config.BASE_URL+DEFAULT_URL).then(function(res) {
    console.log(res.total);
    $scope.shulData = res;
  }).catch(function(err){
    console.log(err);
  })

}

var input = document.getElementById('searchTextField');

var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(-33.8902, 151.1759),
  new google.maps.LatLng(-33.8474, 151.2631));


// var options = {
//   // bounds: defaultBounds,
//   types: ['establishment']
// };

// autocomplete = new google.maps.places.Autocomplete(input, options);

var options={};
var autocomplete = new google.maps.places.Autocomplete(input, options);

 google.maps.event.addDomListener(autocomplete, 'place_changed', function () {

    var place = autocomplete.getPlace();
    var lat = place.geometry.location.lat();
    var long = place.geometry.location.lng();
   console.log(lat + ", " + long);



initialize(lat,long);
getDefaultList(lat,long);
});

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

initialize(crd.latitude,crd.longitude)
  // console.log('Your current position is:');
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);
  // console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
google.maps.event.addDomListener(document.getElementById("searchTextField"), 'blur', function() {

 google.maps.event.trigger(autocomplete, 'place_changed', function () {

    var place = autocomplete.getPlace();
    var lat = place.geometry.location.lat();
    var long = place.geometry.location.lng();
   console.log(lat + ", " + long);



initialize(lat,long);

});

});


    function initialize(lat,long) {


    var myLatLng = new google.maps.LatLng(lat,long),
        myOptions = {

              zoom: 16,
      center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
      panControl: false,
      zoomControl: false,
      scaleControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      defaultStyle: true
        },
        map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
        marker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });

    marker.setMap(map);
    moveMarker(map, marker,lat,long);

}



function moveMarker(map, marker,lat,long) {

    //delayed so you can see it move
    setTimeout(function () {

        marker.setPosition(new google.maps.LatLng(lat, long));
        map.panTo(new google.maps.LatLng(lat, long));

    }, 1500);

};

$scope.opencustomurl= function(){

    // cordova.InAppBrowser.open(encodeURI(''), '_blank', 'hideurlbar=yes');
    cordova.InAppBrowser.open(encodeURI('https://www.godaven.com/add-shul'), '_blank', 'zoom=no,hideurlbar=yes,toolbarcolor=#497aa1');

}








}])

.controller('SelectedShulCtrl', ['$scope', '$stateParams','ApiService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ApiService) {

  console.log($stateParams.id);
  $scope.shulDetail ={};
  $scope.groupedContacts ={};
  $scope.groupedByDayMinyanim={};

  var URL = "https://www.godaven.com/api/V1/shuls/564/details";

  ApiService.getRequest(URL).then(function(res) {
    console.log(res);
    $scope.shulDetail = res;
    $scope.groupedContacts = res.groupedContacts;
    $scope.groupedByDayMinyanim = res.groupedByDayMinyanim;
    console.log($scope.groupedByDayMinyanim.sun);
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
