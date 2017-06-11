function emploiServicesController($routeParams) {

  this.$routeParams = $routeParams;

  this.switch1 = 1
  this.switch2 = 1

  this.query = $routeParams.query;
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
    type: 1,
    color: 'redCard',
    job: 'Emploi - Cariste',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    adresse: '3 Rue Camille Claudel, 28630 Le Coudray, France',
  }, {
    id: '1001',
    type: 2,
    color: 'greenCard',
    job: 'Services - Co-voiturage',
    text: "En faisant vérifier une pièce d'identité, les covoitureurs peuvent renforcer les liens de confiance au sein de notre communauté.",
    adresse: ' 16 Cloître Notre Dame, 28000 Chartres',
  }, {
    id: '1002',
    type: 1,
    color: 'redCard',
    job: 'Emploi - Garagiste ',
    text: "Comparez les meilleurs garages pour votre entretien auto et obtenez un devis en ligne pour plus de 2000 garages en France. Trouvez le meilleur prix en ligne ...",
    adresse: 'Zone Commerciale de la Torche, 45 Rue des Pierres Missigault, 28630 Barjouville',
  }, {
    id: '1003',
    type: 2,
    color: 'greenCard',
    job: 'Services - Ecole',
    text: "La formation continue à l'École nationale des chartes répond aux attentes des professionnels du patrimoine, des enseignants, des chercheurs et de tout public ...",
    adresse: '3 Impasse Montpensier, 28000 Chartres',
  }];

  this.services = [{
    img: 'service',
    title: 'Assistante maternelle',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    distance: '2 km'
  }, {
    img: 'service',
    title: 'Crèche',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    distance: '7 km'
  }, {
    img: 'service',
    title: 'Co-voiturage',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    distance: '15 km'
  }, {
    img: 'service',
    title: 'Chambre à louer',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    distance: '20 km'
  }];

}
