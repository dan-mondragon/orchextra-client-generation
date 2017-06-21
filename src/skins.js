const axios = require('axios');
var rp = require('request-promise');
var FormData = require('form-data');
const api = 'v1/skins';


var getSkins = (token, url)  => {
  const skins = axios.get(`${url}/${api}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return skins.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.code;
  });
};



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


var createSkin = (token, url, skin) => {
  var options = {
    method: 'POST',
    uri: `${url}/${api}`,
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
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    }
  };

  return rp(options)
    .then(function (body) {
        return body;
    })
    .catch(function (err) {
        return {
          statusCode: err.statusCode,
          errors: err.error.errors
        };
    });
};



module.exports ={
  getSkins,
  createSkin
}
