function initMap() {
  var uluru = {
    lat: 48.417138,
    lng: 1.490377
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

function emploiServicesController($routeParams) {

  this.$routeParams = $routeParams;

  this.switch1=1
  this.switch2=1

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
    job: 'Emploi - Caissier Employé Libre Service',
    text: "Souriant(e) et aimant le travail en équipe, le Caissier Employé Libre Service Lidl accueille les clients et répond à leurs demandes.",
    adresse: '3 Rue Camille Claudel, 28630 Le Coudray, France',
    href: 'http://emplois.lidl.fr/cps/rde/SID-B5E8BBAF-BBFA028F/career_lidl_fr/hs.xsl/1825.htm',
  }, {
    id: '1001',
    type: 2,
    color: 'greenCard',
    job: 'Services - Co-voiturage',
    text: "En faisant vérifier une pièce d'identité, les covoitureurs peuvent renforcer les liens de confiance au sein de notre communauté.",
    adresse: '3 Rue Camille Claudel, 28630 Le Coudray, France',
    href: 'https://fr.linkedin.com/in/camfontaine',
  }, {
    id: '1002',
    type: 1,
    color: 'redCard',
    job: 'Emploi - Garagiste ',
    text: "Comparez les meilleurs garages pour votre entretien auto et obtenez un devis en ligne pour plus de 2000 garages en France. Trouvez le meilleur prix en ligne ...",
    adresse: '3 Rue Camille Claudel, 28630 Le Coudray, France',
    href: 'https://fr.linkedin.com/in/camfontaine',
  }, {
    id: '1003',
    type: 2,
    color: 'greenCard',
    job: 'Services - Ecole',
    text: "La formation continue à l'École nationale des chartes répond aux attentes des professionnels du patrimoine, des enseignants, des chercheurs et de tout public ...",
    adresse: '3 Rue Camille Claudel, 28630 Le Coudray, France',
    href: 'https://fr.linkedin.com/in/camfontaine',
  }];

  this.services = [{
    img: 'service',
    title: 'Assistante maternelle',
    description: "L'assistante maternelle (ou assistant maternel) est une professionnelle de la petite enfance",
  }, {
    img: 'service',
    title: 'Assistante maternelle',
    description: "L'assistante maternelle (ou assistant maternel) est une professionnelle de la petite enfance",
  }, {
    img: 'service',
    title: 'Assistante maternelle',
    description: "L'assistante maternelle (ou assistant maternel) est une professionnelle de la petite enfance",
  }, {
    img: 'service',
    title: 'Assistante maternelle',
    description: "L'assistante maternelle (ou assistant maternel) est une professionnelle de la petite enfance",
  }];

}
