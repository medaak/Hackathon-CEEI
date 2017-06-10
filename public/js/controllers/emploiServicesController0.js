function emploiServicesController($routeParams) {

  this.$routeParams = $routeParams;

  this.query = $routeParams.query;
console.log(this.$routeParams);
  this.newSearch = (query) => {
      if (query != '') {
          $location.path("/emploiServices/" + query);
      }
  };

     this.newSearch = (query) => {
         if (query != '') {
             $location.path("/emploiServices/" + query);
         }
     };

       this.emploiServices = [{
         id: '1000',
         color: 'redCard',
         job: 'Emploi',
         text: 'Blabla',
         href: 'https://fr.linkedin.com/in/camfontaine',
     }, {
       id: '1001',
       color: 'greenCard',
       job: 'Services',
       text: 'Blabla',
       href: 'https://fr.linkedin.com/in/camfontaine',
     }, {
       id: '1002',
       color: 'redCard',
       job: 'Emploi',
       text: 'Blabla',
       href: 'https://fr.linkedin.com/in/camfontaine',
     }, {
       id: '1003',
       color: 'greenCard',
       job: 'Services',
       text: 'Blabla',
       href: 'https://fr.linkedin.com/in/camfontaine',
     }];

}
