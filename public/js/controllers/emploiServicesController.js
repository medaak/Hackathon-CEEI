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
    color: 'redCard',
    job: 'Caissier Employé Libre Service',
    text: "Souriant(e) et aimant le travail en équipe, le Caissier Employé Libre Service Lidl accueille les clients et répond à leurs demandes. Il assure l'encaissement fiable des produits. Il participe à la bonne gestion du magasin en garantissant le bon approvisionnement des rayons ainsi que la qualité et la fraîcheur des produits.              Il maintient un magasin propre et agréable pour les clients. Evoluant dans une ambiance de travail à la fois professionnelle et conviviale, il applique, au quotidien, le concept commercial de l'enseigne.",
    adresse: '3 Rue Camille Claudel, 28630 Le Coudray, France',
    href: 'http://emplois.lidl.fr/cps/rde/SID-B5E8BBAF-BBFA028F/career_lidl_fr/hs.xsl/1825.htm',
  }, {
    id: '1001',
    color: 'greenCard',
    job: 'Services',
    text: "Souriant(e) et aimant le travail en équipe, le Caissier Employé Libre Service Lidl accueille les clients et répond à leurs demandes. Il assure l'encaissement fiable des produits. Il participe à la bonne gestion du magasin en garantissant le bon approvisionnement des rayons ainsi que la qualité et la fraîcheur des produits.              Il maintient un magasin propre et agréable pour les clients. Evoluant dans une ambiance de travail à la fois professionnelle et conviviale, il applique, au quotidien, le concept commercial de l'enseigne.",
    adresse: '3 Rue Camille Claudel, 28630 Le Coudray, France',
    href: 'https://fr.linkedin.com/in/camfontaine',
  }, {
    id: '1002',
    color: 'redCard',
    job: 'Emploi',
    text: "Souriant(e) et aimant le travail en équipe, le Caissier Employé Libre Service Lidl accueille les clients et répond à leurs demandes. Il assure l'encaissement fiable des produits. Il participe à la bonne gestion du magasin en garantissant le bon approvisionnement des rayons ainsi que la qualité et la fraîcheur des produits.              Il maintient un magasin propre et agréable pour les clients. Evoluant dans une ambiance de travail à la fois professionnelle et conviviale, il applique, au quotidien, le concept commercial de l'enseigne.",
    adresse: '3 Rue Camille Claudel, 28630 Le Coudray, France',
    href: 'https://fr.linkedin.com/in/camfontaine',
  }, {
    id: '1003',
    color: 'greenCard',
    job: 'Services',
    text: "Souriant(e) et aimant le travail en équipe, le Caissier Employé Libre Service Lidl accueille les clients et répond à leurs demandes. Il assure l'encaissement fiable des produits. Il participe à la bonne gestion du magasin en garantissant le bon approvisionnement des rayons ainsi que la qualité et la fraîcheur des produits.              Il maintient un magasin propre et agréable pour les clients. Evoluant dans une ambiance de travail à la fois professionnelle et conviviale, il applique, au quotidien, le concept commercial de l'enseigne.",
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
