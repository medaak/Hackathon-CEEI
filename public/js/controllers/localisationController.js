function localisationController($location) {

  this.$location = $location;

  this.query = "";

  this.searchView = (query) => {
      if (query != '') {
          this.isToggled = false;
          $location.path("/emploiServices/" + query);
          this.query = "";
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
