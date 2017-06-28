const axios = require('axios');
const api = 'v1/campaigns';
var rp = require('request-promise');
const queryFn = require('./fn/QueryString');

module.exports=
class Campaign {
  constructor(url, token, campaign){
    this.url = url;
    this.token = token;
    if(typeof campaign !== 'undefined'){
      this.data = campaign;
    }
  }

  getCampaigns(query){
    var queryString = queryFn.setQueryString(query);
    const campaigns = axios.get(`${this.url}/${api}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return campaigns.then((result) => {
      var Campaigns = new Array();
      result.data.forEach(campaign => {
        Campaigns.push(new Campaign(this.url, this.token, campaign));
      });
      return Campaigns;
    })
    .catch(error => {
      return error.code;
    });
  }

  getCampaign(idCampaign, query){
    var queryString = queryFn.setQueryString(query);
    const campaign = axios.get(`${this.url}/${api}/${idCampaign}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return campaign.then((result) => {
      return new Campaign(this.url, this.token, result.data);
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }


  createCampaign(campaign){
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
    var inThis = this;
    return rp(options)
      .then(function (body) {
        console.log(inThis);
          return new Campaign(inThis.url, inThis.token, body);
      })
      .catch(function (err) {
        console.log(err);
          return {
            statusCode: err.statusCode,
            errors: err.error.errors
          };
      });
  }


  deleteCampaign(idCampaign){
    if(typeof idCampaign === 'undefined'){
        idCampaign = this.data.id;
    }
    const del = axios.delete(`${this.url}/${api}/${idCampaign}`,{
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return del.then(result => {
      return result.status;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }


  updateCampaign(campaign, campaignId){
    if(typeof campaignId === 'undefined'){
        campaignId = this.data.id;
    }
    const update = axios.patch(`${this.url}/${api}/${campaignId}`, campaign, {
      headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
    });

    return update.then(result => {
      this.data = result.data;
      return this;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  replaceCampaign(campaign, campaignId){
    if(typeof campaignId === 'undefined'){
        campaignId = this.data.id;
    }
    // console.log(campaign);
    // console.log(campaignId);
    const update = axios.put(`${this.url}/${api}/${campaignId}`, campaign, {
      headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
    });
    return update.then(result => {
      this.data = result.data;
      return this;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }
}


// module.exports = {
//   getCampaigns,
//   getCampaign,
//   deleteCampaign,
//   createCampaign,
//   setUrl,
//   setAuthToken,
//   updateCampaign,
//   replaceCampaign
// };
