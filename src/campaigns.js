const axios = require('axios');
const campaignUtils = require('./fn/campaigns');
const api = 'v1/campaigns';
var rp = require('request-promise');

// var getCampaigns = (token, url, w)  => {
//
//   var withString = "";
//   console.log(w);
//   if(typeof w === 'undefined'){
//     w = [];
//   }
//   w.forEach(value => {
//     withString += `${value},`;
//   });
//   withString = withString.slice(0,-1);
//
//   const campaigns = axios.get(`${url}/${api}?with=${withString}`, {
//     headers: {'Authorization': 'Bearer ' + token}
//   });
//
//   return campaigns.then((result) => {
//     return result.data;
//   })
//   .catch(error => {
//     return error.code;
//   });
// };

var getCampaigns = (token, url, w, fields)  => {
  var withString = campaignUtils.setWith(w);
  var fieldsString = campaignUtils.setFields(fields);

  console.log(withString);
  const campaigns = axios.get(`${url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return campaigns.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.code;
  });
};

var getCampaign = (token, url, idCampaign, w, fields)  => {
  var withString = campaignUtils.setWith(w);
  var fieldsString = campaignUtils.setFields(fields);

  console.log(withString);
  const campaign = axios.get(`${url}/${api}/${idCampaign}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return campaign.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.code;
  });
};


var createCampaign = (token, url, campaign) => {
  var options = {
    method: 'POST',
    uri: `${url}/${api}`,
    formData: {
        type: campaign.type,
        name: campaign.name,
        legals: campaign.legals,
        description: campaign.description,
        active: campaign.active,
        expirationDate: campaign.expirationDate,
        startDate: campaign.startDate,
        projectId: campaign.projectId,
        image: campaign.image
    },
    json: true,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    }
  };

 // console.log(options);
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


var deleteCampaign = (token, url, idCampaign) => {
  const del = axios.delete(`${url}/${api}/${idCampaign}`,{
    headers: {'Authorization': 'Bearer ' + token}
  });

  return del.then(result => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};


module.exports = {
  getCampaigns,
  getCampaign,
  deleteCampaign,
  createCampaign
};
