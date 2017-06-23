const axios = require('axios');
const campaignUtils = require('./fn/campaigns');
const api = 'v1/campaigns';
var rp = require('request-promise');

var setUrl = (url) => {
  this.url = url;
};

var setAuthToken = (token) => {
  this.token = token;
}

var getCampaigns = (w, fields)  => {
  var withString = campaignUtils.setWith(w);
  var fieldsString = campaignUtils.setFields(fields);

  const campaigns = axios.get(`${this.url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return campaigns.then((result) => {
    return result.data;
  })
  .catch(error => {
    return error.code;
  });
};

var getCampaign = (idCampaign, w, fields)  => {
  var withString = campaignUtils.setWith(w);
  var fieldsString = campaignUtils.setFields(fields);

  const campaign = axios.get(`${this.url}/${api}/${idCampaign}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
  });

  return campaign.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};


var createCampaign = (campaign) => {
  var options = {
    method: 'POST',
    uri: `${this.url}/${api}`,
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
      'Authorization': 'Bearer ' + this.token,
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


var deleteCampaign = (idCampaign) => {
  const del = axios.delete(`${this.url}/${api}/${idCampaign}`,{
    headers: {'Authorization': 'Bearer ' + this.token}
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


var updateCampaign = (campaignId, campaign) => {
  const update = axios.patch(`${this.url}/${api}/${campaignId}`, campaign, {
    headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
  });

  return update.then(result => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};

var replaceCampaign = (campaignId, campaign) => {
  const update = axios.put(`${this.url}/${api}/${campaignId}`, campaign, {
    headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
  });

  return update.then(result => {
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
  createCampaign,
  setUrl,
  setAuthToken,
  updateCampaign,
  replaceCampaign
};
