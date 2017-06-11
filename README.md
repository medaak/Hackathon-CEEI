# [MEAN](http://mean.io/) Starter kit

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

## Copyright © 2017 -  all rights reserved:

-   [Camille Antoine Fontaine](https://www.linkedin.com/in/camfontaine/)
-   [Kevin Poyer](https://www.linkedin.com/in/kevin-poyer/)
-   [Johan Helias](https://www.linkedin.com/in/johan-helias/)
- [Pascale Barboteau](https://www.linkedin.com/in/pascale-barboteau-4a0409a5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_all_connections%3BCgNgam%2BrTBiDp8tBZ5zU9w%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base_all_connections-profile_link)


## MongoDB Express Angular NodeJS

Backend : Babel es2015

Frontend : es2015 native


### Requirements

-   [Node](https://doc.ubuntu-fr.org/nodejs#depuis_un_ppa)
-   [MongoDB](https://doc.ubuntu-fr.org/mongodb#installation)
-   [Nodemon](http://nodemon.io/)
-   [Bower](https://bower.io/)

### Auto-install

[Bash script for Ubuntu & OSX](https://gist.github.com/JbPasquier/4857fd80af2d7ae2f987754db5887969)

### Execution

#### Installation

```bash
git clone git@github.com:JbPasquier/mean-starter-es6.git
cd mean-starter-es6
npm install
bower install
```

#### Development

```bash
nodemon --exec npm start
```

#### Production

```bash
SECRET_TOKEN='secretToken' MONGODB_URI='mongodb://localhost:27017/mean-starter-es6' npm start
```
