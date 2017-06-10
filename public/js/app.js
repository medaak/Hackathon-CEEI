angular.module('app', ['ngRoute'])
        .factory('sessionFactory', sessionFactory)
        .service('userService', userService)
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .controller('navbarController', navbarController)
        .controller('loginController', loginController)
        .controller('localisationController', localisationController)
        .controller('emploiServicesController', emploiServicesController)
        .config(routes)
        .run(loginStatus)
        ;
