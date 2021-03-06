const routes = ($routeProvider, $httpProvider, $locationProvider) => {
$locationProvider.html5Mode(false).hashPrefix('');
$routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'mainController',
    controllerAs: 'vm'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'loginController',
    controllerAs: 'vm'
  })
  .when('/registration', {
    templateUrl: 'views/registration.html',
    controller: 'loginController',
    controllerAs: 'vm'
  })
  .when('/localisation', {
    templateUrl: 'views/localisation.html',
    controller: 'localisationController',
    controllerAs: 'vm'
  })
  .when('/creationEmploi', {
    templateUrl: 'views/creationEmploi.html',
    controller: 'creationEmploiController',
    controllerAs: 'vm'
  })
  .when('/creationService', {
    templateUrl: 'views/creationService.html',
    controller: 'creationServiceController',
    controllerAs: 'vm'
  })
  .when('/localisation/:id', {
    templateUrl: 'views/emploiServices.html',
    controller: 'emploiServicesController',
    controllerAs: 'vm'
  })
  .when('/credit', {
    templateUrl: 'views/credit.html',
    controller: 'loginController',
    controllerAs: 'vm'
})
.when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'loginController',
    controllerAs: 'vm'
  })
  .otherwise({
    redirectTo: '/'
  })

$httpProvider.interceptors.push(($q, $location, $rootScope, $window, sessionFactory) => {
  return {
    request(config) {

      config.headers = config.headers || {};
      if ($window.localStorage.token) {
        sessionFactory.token = $window.localStorage.token
        sessionFactory.user = JSON.parse($window.localStorage.getItem('currentUser'));
        config.headers.authorization = $window.localStorage.token
      }
      return config
    },
    responseError(response) {
      if (response.status === 401 || response.status === 403) {
        $rootScope.$emit('loginStatusChanged', false);
        $location.path('/login')
      }
      return $q.reject(response)
    }
  }
})

}

const loginStatus = ($rootScope, $window, sessionFactory) => {

  if ($window.localStorage.currentUser) {
    sessionFactory.user = JSON.parse($window.localStorage.getItem('currentUser'));
  }

  $rootScope.$on('loginStatusChanged', (event, isLogged) => {
    $window.localStorage.setItem('currentUser', JSON.stringify(sessionFactory.user));
    $window.localStorage.token = sessionFactory.token;
    sessionFactory.isLogged = isLogged;
  })

}

const checkIsConnected = ($q, $http, $location, $window, $rootScope) => {
  let deferred = $q.defer()

  $http.get('/api/loggedin').then(() => {
    $rootScope.$emit('loginStatusChanged', true);
    // Authenticated
    deferred.resolve()
  }).catch(() => {
    $window.localStorage.removeItem('token');
    $window.localStorage.removeItem('currentUser');
    $rootScope.$emit('loginStatusChanged', false);
    // Not Authenticated
    deferred.reject()
    $location.url('/login')
  })

  return deferred.promise
}
