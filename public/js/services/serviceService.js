function serviceService($http) {

    this.$http = $http;

    this.create = (data) => {
        return this.$http.post('/api/services', {
          title: data.title,
          description: data.description,
          adressLine: data.adressLine,
          city: data.city,
          zipcode: data.zipcode,
          userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User'
          }
        })
    }

    this.getAll = () => {
        return this.$http.get('/api/services')
    }

    this.getOne = (id) => {
        return this.$http.get('/api/services/' + id)
    }

    this.update = (id, data) => {
        return this.$http.put('/api/services/' + id, {
            description: data
        })
    }

    this.delete = (id) => {
        return this.$http.delete('/api/services/' + id)
    }

}
