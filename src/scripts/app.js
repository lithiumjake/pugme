var request = require('superagent')
var Vue = require('vue')

new Vue (
  {
    el: "#v-app",
    data: {
      pugURL: ""
    },
    methods: {
      getPug: function() {
        var self = this
        request
        .get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22http%3A%2F%2Fpugme.herokuapp.com%2Frandom%22&format=json&callback=")
        .end(function(res) {
          self.pugURL = res.body.query.results.pug
        })
      }
    }
  }
)
