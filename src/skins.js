const axios = require('axios');
var rp = require('request-promise');
var FormData = require('form-data');
const api = 'v1/skins';
const queryFn = require('./fn/QueryString');

module.exports=
class Skin {

  constructor(url, token, skin, count){
    this.url = url;
    this.token = token;
    if(typeof skin !== 'undefined'){
      this.data = skin;
    }
    if(typeof count !== 'undefined'){
      this.total_count = count;
    }
  }

  getSkins(query){
    var queryString = queryFn.setQueryString(query);
    const skins = axios.get(`${this.url}/${api}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return skins.then((result) => {
      var Skins = new Array();
      result.data.forEach(skin => {
        Skins.push(new Skin(this.url, this.token, skin, result.headers['x-total-count']));
      });
      return Skins;
    })
    .catch(error => {
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    });
  }

  getSkin(idSkin, query){
    var queryString = queryFn.setQueryString(query);
    const skin = axios.get(`${this.url}/${api}/${idSkin}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return skin.then((result) => {
      return new Skin(this.url, this.token, result.data);
    })
    .catch(error => {
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    });
  }

  createSkin(skin){
    if(typeof skin === 'undefined'){
        skin = this.data;
    }
    var options = {
      method: 'POST',
      uri: `${this.url}/${api}`,
      formData: {
          name: skin.name,
          projectId: skin.projectId,
          userId: skin.userId,
          headerColor: skin.headerColor,
          logoMode: skin.logoMode,
          skinColorPrimary: skin.skinColorPrimary,
          skinColorSecondary: skin.skinColorSecondary,
          textColorPrimary: skin.textColorPrimary,
          textColorSecondary: skin.textColorSecondary,
          favicon: skin.favicon,
          logo: skin.logo
      },
      json: true,
      headers: {
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
      }
    };
    var inThis = this;
    return rp(options)
      .then(function (body) {
          return new Skin(inThis.url, inThis.token, body);
      })
      .catch(function (err) {
          return Promise.reject({
            statusCode: error.response.status,
            errors: error.response.data
          });
      });
  }

  deleteSkin(idSkin){
    if(typeof idSkin === 'undefined'){
      if(typeof this.data !== 'undefined'){
          idSkin = this.data.id;
      }
    }

    const del = axios.delete(`${this.url}/${api}/${idSkin}`,{
      headers: {'Authorization': 'Bearer ' + this.token}
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

  updateSkin(skin, idSkin){
    if(typeof idSkin === 'undefined'){
      if(typeof this.data !== 'undefined'){
          idSkin = this.data.id;
      }
    }
    if(typeof skin === 'undefined'){
        skin = this.data;
    }
    const update = axios.patch(`${this.url}/${api}/${idSkin}`, skin, {
      headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
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

  replaceSkin(skin, idSkin){
    if(typeof idSkin === 'undefined'){
      if(typeof this.data !== 'undefined'){
          idSkin = this.data.id;
      }
    }
    if(typeof skin === 'undefined'){
        skin = this.data;
    }
    const update = axios.put(`${this.url}/${api}/${idSkin}`, skin, {
      headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
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
  };
}

// module.exports ={
//   getSkins,
//   createSkin,
//   setUrl,
//   getSkin,
//   deleteSkin,
//   updateSkin,
//   replaceSkin,
//   setAuthToken
// }

// var createSkin = (token, url, skin) => {
//
//   let data = new FormData();
//   data.append('name', skin.name);
//   data.append('projectId', skin.projectId);
//   data.append('userId', skin.userId);
//   data.append('headerColor', skin.headerColor);
//   data.append('logoMode', skin.logoMode);
//   data.append('skinColorPrimary', skin.skinColorPrimary);
//   data.append('skinColorSecondary', skin.skinColorSecondary);
//   data.append('textColorPrimary', skin.textColorPrimary);
//   data.append('textColorSecondary', skin.textColorSecondary);
//   // data.append('favicon', skin.favicon);
//   // data.append('logo', skin.logo);
//
//   console.log(skin);
//   const create = axios.post(`${url}/${api}`, data, {
//     headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'},
//     maxRedirects: 0
//   });
//
//   return create.then(result => {
//     return result.data;
//   })
//   .catch(error => {
//     return {
//       error: error,
//       // data: error.config.data
//       // header: error.request.headers,
//       // res: error.request.res,
//       statusCode: error.response.status,
//       errors: error.response.data
//     };
//   });
// };
