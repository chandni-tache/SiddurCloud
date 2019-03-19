angular.module('app.controllers', [])

    .controller('siddurBlessingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {


        }
    ])

    .controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {

            $scope.reloadState = function() {
                window.location.reload();
            };

        }
    ])

    .controller('siddurCloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {


        }
    ])

    .controller('prayerTimesCtrl', ['$scope', '$stateParams', 'ApiService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams, ApiService,$cordovaGeolocation) {

          $scope.lat='';
          $scope.long='';
          $scope.params = {};

          $scope.prayerCity = '';
          $scope.prayerMode = true;
          $scope.prayerData = {};



          console.log(new Date());
          $scope.prayerDate= new Date();

          var url = "https://wyrezmanim.herokuapp.com/api/zmanim?timezone=America/New_York&latitude=40&longitude=-73&date=4/2/2018&elevation=50&format=json&mode=basic";

          var BASE_URL = "https://wyrezmanim.herokuapp.com/api/zmanim?timezone=America/New_York&elevation=50&format=json";
          var DEFAULT_PARAMS="&latitude=40&longitude=-73&mode=";

          var input = document.getElementById('searchTextField');

          var options = {};

          var autocomplete = new google.maps.places.Autocomplete(input, options);

          google.maps.event.addDomListener(autocomplete, 'place_changed', function() {

              var place = autocomplete.getPlace();
              $scope.lat = place.geometry.location.lat();
              $scope.long = place.geometry.location.lng();
              console.log($scope.lat + ", " + $scope.long);

              $scope.params.lat=$scope.lat;
              $scope.params.long=$scope.long;

          });


            $scope.search = function() {
                console.log($scope.prayerMode);
                console.log($scope.prayerDate);
                console.log($scope.params);
                $scope.params.date = $scope.prayerDate;
                $scope.params.mode= $scope.prayerMode;

                $scope.loadPrayerData($scope.params);


            }

            $scope.clear = function() {
                document.getElementById('searchTextField').value ='';
                $scope.prayerDate = '';
                $scope.prayerMode = true;
                $scope.params={};

                $scope.callService(BASE_URL+DEFAULT_PARAMS);
            }


            $scope.callService = function(url){
              ApiService.getRequest(url).then(function(res) {
                  console.log(res);
                  $scope.prayerData = res;
              }).catch(function(err) {
                  console.log(err);
              })
            }

            $scope.loadPrayerData= function(params){

              console.log(params);
              console.log($scope.prayerMode);
              var mode ="";
              if(params.mode){
                mode="Basic";
              }
              else {
                mode="";
              }
              var PARAMS = "&date="+params.date+"&latitude="+params.lat+"&longitude="+params.long+"&mode="+mode;
              console.log(BASE_URL+PARAMS);
              $scope.callService(BASE_URL+PARAMS);

            }

            $scope.callService(BASE_URL+DEFAULT_PARAMS); //Call API with default parameters

        }
    ])

    .controller('addShulCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {


        }
    ])

    .controller('minyanMapCtrl', ['$scope', '$stateParams', 'ApiService', '$state','PagerService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams, ApiService, $cordovaGeolocation, $state,PagerService) {

          $scope.currentPage=1;

            var Config = {
                BASE_URL: 'https://www.godaven.com/api/V1/shuls/radius-search',
            }


            $scope.shulData = [];
            getDefaultList('40.718106', '-73.8448469');
            //ADDITIONAL_URL="?lat=40.718106&lng=-73.8448469&distance=5&pagenumber=1&nusach=&tefillah=&day=&current_time=13:43&todays_day=3"
            function getDefaultList(lat, lng) {
                var DEFAULT_URL = '?lat=' + lat + '&lng=' + lng + '&distance=5&nusach=&tefillah=&day=&current_time=13:43&todays_day=3'
                ApiService.getRequest(Config.BASE_URL + DEFAULT_URL).then(function(res) {
                    console.log(res.total);
                    $scope.shulData = res;
                }).catch(function(err) {
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

            var options = {};
            var autocomplete = new google.maps.places.Autocomplete(input, options);

            google.maps.event.addDomListener(autocomplete, 'place_changed', function() {

                var place = autocomplete.getPlace();
                var lat = place.geometry.location.lat();
                var long = place.geometry.location.lng();
                console.log(lat + ", " + long);



                initialize(lat, long);
                getDefaultList(lat, long);
            });

            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                var crd = pos.coords;

                initialize(crd.latitude, crd.longitude)
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

                google.maps.event.trigger(autocomplete, 'place_changed', function() {

                    var place = autocomplete.getPlace();
                    var lat = place.geometry.location.lat();
                    var long = place.geometry.location.lng();
                    console.log(lat + ", " + long);



                    initialize(lat, long);

                });

            });


            function initialize(lat, long) {


                var myLatLng = new google.maps.LatLng(lat, long),
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
                moveMarker(map, marker, lat, long);

            }



            function moveMarker(map, marker, lat, long) {

                //delayed so you can see it move
                setTimeout(function() {

                    marker.setPosition(new google.maps.LatLng(lat, long));
                    map.panTo(new google.maps.LatLng(lat, long));

                }, 1500);

            };

            $scope.opencustomurl = function() {

                // cordova.InAppBrowser.open(encodeURI(''), '_blank', 'hideurlbar=yes');
                cordova.InAppBrowser.open(encodeURI('https://www.godaven.com/add-shul'), '_blank', 'zoom=no,hideurlbar=yes,toolbarcolor=#497aa1');

            }

          function createPagination (){

          }



        }
    ])

    .controller('SelectedShulCtrl', ['$scope', '$stateParams', 'ApiService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams, ApiService) {

            console.log($stateParams);

            $scope.opencustomurldetails = function() {


                cordova.InAppBrowser.open(encodeURI($scope.shulDetail.website_url), '_blank', 'zoom=no,hideurlbar=yes,toolbarcolor=#497aa1');

            }

            $scope.openmap = function() {
                var addressLongLat = $scope.shulDetail.lat + ',' + $scope.shulDetail.lng
                window.open("http://maps.google.com/?q=" + addressLongLat, '_system');
            }

            $scope.shareurl = function() {

                var options = {
                    message: $scope.shulDetail.name, // not supported on some apps (Facebook, Instagram)
                    subject: $scope.shulDetail.shul_nusach, // fi. for email

                    url: $scope.shulDetail.website_url,
                    chooserTitle: 'share with' // Android only, you can override the default share sheet title,
                    // Android only, you can provide id of the App you want to share with
                };

                var onSuccess = function(result) {
                    console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
                    console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
                };

                var onError = function(msg) {
                    console.log("Sharing failed with message: " + msg);
                };

                window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);


            }

            console.log($stateParams.id);
            $scope.shulDetail = {};
            $scope.groupedContacts = {};
            $scope.groupedByDayMinyanim = {};

            var URL = "https://www.godaven.com/api/V1/shuls/" + $stateParams.id + "/details";

            ApiService.getRequest(URL).then(function(res) {
                console.log(res);
                $scope.shulDetail = res;
                $scope.groupedContacts = res.groupedContacts;
                $scope.groupedByDayMinyanim = res.groupedByDayMinyanim;
            }).catch(function(err) {
                console.log(err);
            })

        }
    ])

    .controller('sefariaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            var URL = "https://www.godaven.com/api/V1/shuls/298/details";

        }
    ])

    .controller('shacharitCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName


        function($scope, $stateParams) {
            $scope.alert = function() {
                alert("this is a simple test of the function for the alert - perhaps this can work to our benefit?");
            };

            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            };

        }
    ])

    .controller('minchaCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {
            $scope.alert = function() {
                alert("this is a simple test of the function for the alert - perhaps this can work to our benefit?");
            }

            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }
        }
    ])

    .controller('arvitCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {
            $scope.alert = function() {
                alert("this is a simple test of the function for the alert - perhaps this can work to our benefit?");
            }

            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }
        }
    ])

    .controller('mournerSKaddishCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }

        }
    ])

    .controller('washingHandsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }

        }
    ])

    .controller('blessingOverBreadCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }

        }
    ])

    .controller('blessingOverWineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }

        }
    ])

    .controller('blessingOverFruitsOfATreeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }

        }
    ])

    .controller('blessingOverFruitsOfTheGroundCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }

        }
    ])

    .controller('blessingOverOtherFoodsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }

        }
    ])

    .controller('blessingOverFoodGrainsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }

        }
    ])

    .controller('blessingAfterABreadMealCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }



        }
    ])

    .controller('foodBlessingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            //$scope.hands = function(){
            //    alert("Blessing Name: \n\n [Translit] \n\n [English] \n\n [Hebrew]");
            //}

        }
    ])

    .controller('otherBlessingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {
            $scope.activeLanguage = 1;
            $scope.changeLanguage = function(lan) {
                $scope.activeLanguage = lan;
            }


        }
    ])

    .controller('aboutUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {


        }
    ])

    .controller('termsOfUseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {


        }
    ])

    .controller('privacyPolicyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {


        }
    ])
