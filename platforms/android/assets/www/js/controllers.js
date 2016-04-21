angular.module('app.controllers', [])
  
.controller('bancoFormatosAtlasSeguridadCtrl', function($scope) {

})
   
.controller('formulariosCtrl', function($scope) {

})
   
.controller('parqueaderosCtrl', function($scope, $cordovaCamera) {

$scope.takePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
})
   
.controller('entradaYSalidaVehiculosCtrl', function($scope) {

})
   
.controller('controlVisitantesCtrl', function($scope) {

})
   
.controller('calidadCtrl', function($scope) {

})
   
.controller('novedadesDelincuencialesCtrl', function($scope) {

})
 
 .controller("ExampleController", function ($scope, $cordovaCamera) {
 
                
                    });
                