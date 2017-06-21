const axios = require('axios');
var rp = require('request-promise');
var FormData = require('form-data');
const api = 'v1/channels';
const channelUtils = require('./fn/channels');

var getChannels = (token, url, w, fields)  => {
  var withString = channelUtils.setWith(w);
  var fieldsString = channelUtils.setFields(fields);

  console.log(withString);
  const channels = axios.get(`${url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return channels.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};

var getChannel = (token, url, idChannel, w, fields) => {
  var withString = channelUtils.setWith(w);
  var fieldsString = channelUtils.setFields(fields);

  const channel = axios.get(`${url}/${api}/${idChannel}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return channel.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};


var createChannel = (token, url, channel) => {
  const add = axios.post(`${url}/${api}`, channel, {
    headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
  });

  return add.then(result =>{
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};

var deleteChannel = (token, url, channelId) => {
  const del = axios.delete(`${url}/${api}/${channelId}`,{
    headers: {'Authorization': 'Bearer ' + token}
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
};

var updateChannel = (token, url, channelId, channel) => {
  const update = axios.patch(`${url}/${api}/${channelId}`, channel, {
    headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
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

var replaceChannel = (token, url, channelId, channel) => {
  const update = axios.put(`${url}/${api}/${channelId}`, channel, {
    headers: {'Authorization': 'Bearer ' + token,'Content-Type': 'application/json'}
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
  getChannels,
  getChannel,
  createChannel,
  deleteChannel,
  updateChannel,
  replaceChannel
}
