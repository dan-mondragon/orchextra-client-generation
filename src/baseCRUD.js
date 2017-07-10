const axios = require('axios');
const queryFn = require('./fn/QueryString');
var rp = require('request-promise');

class BaseCRUD {

  constructor(url, token, model, count) {
    this.url = url;
    this.token = token;
    if (typeof model !== 'undefined') {
      this.data = model;
    }
    if (typeof count !== 'undefined') {
      this.total_count = count;
    }
  }

  get api() {
    return "";
  }

  get contentType() {
    return "";
  }

  all(query) {
    var queryString = queryFn.setQueryString(query);
    const entities = axios.get(`${this.url}/${this.api}?${queryString}`, {
      headers: { 'Authorization': 'Bearer ' + this.token }
    });

    return entities.then((result) => {
      var Entities = result.data.map(entity => 
        new this.constructor(this.url, this.token, entity, result.headers['x-total-count'])
      );
      return Entities;
    })
      .catch(error => {
        console.log(error);
        return Promise.reject({
          statusCode: error.response.status,
          errors: error.response.data
        });
      });
  }

  get(id, query) {
    var queryString = queryFn.setQueryString(query);
    const entity = axios.get(`${this.url}/${this.api}/${id}?${queryString}`, {
      headers: { 'Authorization': 'Bearer ' + this.token }
    });
    return entity.then((result) => {
      return new this.constructor(this.url, this.token, result.data);
    })
      .catch(error => {
        return Promise.reject({
          statusCode: error.response.status,
          errors: error.response.data
        });
      })
  }

  create(model) {
    if (typeof model === 'undefined') {
      model = this.data;
    }

    if (this.contentType === 'FormData') {
      var options = {
        method: 'POST',
        uri: `${this.url}/${this.api}`,
        formData: model,
        json: true,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        }
      };
      var inThis = this;
      const add = rp(options);
    }
    else {
      const add = axios.post(`${this.url}/${this.api}`, model, {
        headers: { 'Authorization': 'Bearer ' + this.token }
      });
    }

    return add
      .then(result => {
        return new this.constructor(this.url, this.token, result.data);
      })
        .catch(error => {
          return Promise.reject({
            statusCode: error.response.status,
            errors: error.response.data
          });
        });
  }

  delete(id) {
    if (typeof id === 'undefined') {
      if (typeof this.data !== 'undefined') {
        id = this.data.id;
      }
    }
    const del = axios.delete(`${this.url}/${this.api}/${id}`, {
      headers: { 'Authorization': 'Bearer ' + this.token }
    });

    return del.then(result => {
      return result.status;
    })
      .catch(error => {
        return Promise.reject({
          statusCode: error.response.status,
          errors: error.response.data
        });
      });
  }

  replace(model, id) {
    if (typeof id === 'undefined') {
      if (typeof this.data !== 'undefined') {
        id = this.data.id;
      }
    }
    if (typeof model === 'undefined') {
      model = this.data;
    }

    if (this.contentType === 'FormData') {
      var options = {
        method: 'PUT',
        uri: `${this.url}/${this.api}/${id}`,
        formData: model,
        json: true,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        }
      };
      var inThis = this;
      return rp(options)
        .then(function (body) {
          return new inThis.constructor(inThis.url, inThis.token, body);
        })
        .catch(function (err) {
          return Promise.reject({
            statusCode: err.statusCode,
            errors: err.error.errors
          });
        });
    }
    else{
      const replace = axios.put(`${this.url}/${this.api}/${id}`, model, {
      headers: { 'Authorization': 'Bearer ' + this.token }
    });

    return replace.then(result => {
      this.data = result.data;
      return this;
    })
      .catch(error => {
        return Promise.reject({
          statusCode: error.response.status,
          errors: error.response.data
        });
      });
    }    
  }

  update(model, id) {
    if (typeof id === 'undefined') {
      if (typeof this.data !== 'undefined') {
        id = this.data.id;
      }
    }
    if (typeof model === 'undefined') {
      model = this.data;
    }

    if (this.contentType === 'FormData') {
      var options = {
        method: 'PATCH',
        uri: `${this.url}/${this.api}/${id}`,
        formData: model,
        json: true,
        headers: {
          'Authorization': 'Bearer ' + this.token,
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
        }
      };
      var inThis = this;
      return rp(options)
        .then(function (body) {
          return new inThis.constructor(inThis.url, inThis.token, body);
        })
        .catch(function (err) {
          return Promise.reject({
            statusCode: err.statusCode,
            errors: err.error.errors
          });
        });
    }
    else {
      const update = axios.patch(`${this.url}/${this.api}/${id}`, model, {
        headers: { 'Authorization': 'Bearer ' + this.token }
      });

      return update.then(result => {
        this.data = result.data;
        return this;
      })
        .catch(error => {
          return Promise.reject({
            statusCode: error.response.status,
            errors: error.response.data
          });
        });
    }
  }
}
module.exports = BaseCRUD;
