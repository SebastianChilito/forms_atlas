angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('bancoFormatosAtlasSeguridad', {
    url: '/page1',
    templateUrl: 'templates/bancoFormatosAtlasSeguridad.html',
    controller: 'bancoFormatosAtlasSeguridadCtrl'
  })

  .state('formularios', {
    url: '/page2',
    templateUrl: 'templates/formularios.html',
    controller: 'formulariosCtrl'
  })

  .state('parqueaderos', {
    url: '/page4',
    templateUrl: 'templates/parqueaderos.html',
    controller: 'parqueaderosCtrl'
  })

  .state('entradaYSalidaVehiculos', {
    url: '/page5',
    templateUrl: 'templates/entradaYSalidaVehiculos.html',
    controller: 'entradaYSalidaVehiculosCtrl'
  })

  .state('controlVisitantes', {
    url: '/page6',
    templateUrl: 'templates/controlVisitantes.html',
    controller: 'controlVisitantesCtrl'
  })

  .state('calidad', {
    url: '/page8',
    templateUrl: 'templates/calidad.html',
    controller: 'calidadCtrl'
  })

  .state('novedadesDelincuenciales', {
    url: '/page9',
    templateUrl: 'templates/novedadesDelincuenciales.html',
    controller: 'novedadesDelincuencialesCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});