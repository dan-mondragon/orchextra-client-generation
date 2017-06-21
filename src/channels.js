const axios = require('axios');
const api = 'v1/channels';
const channelUtils = require('./fn/channels');

var setUrl = (url) => {
  this.url = url;
};

var setAuthToken = (token) => {
  this.token = token;
}

var getChannels = (w, fields)  => {
  var withString = channelUtils.setWith(w);
  var fieldsString = channelUtils.setFields(fields);

  console.log(withString);
  const channels = axios.get(`${this.url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
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

var getChannel = (idChannel, w, fields) => {
  var withString = channelUtils.setWith(w);
  var fieldsString = channelUtils.setFields(fields);

  const channel = axios.get(`${this.url}/${api}/${idChannel}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
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


var createChannel = (channel) => {
  const add = axios.post(`${this.url}/${api}`, channel, {
    headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
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

var deleteChannel = (channelId) => {
  const del = axios.delete(`${this.url}/${api}/${channelId}`,{
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
};

var updateChannel = (channelId, channel) => {
  const update = axios.patch(`${this.url}/${api}/${channelId}`, channel, {
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

var replaceChannel = (channelId, channel) => {
  const update = axios.put(`${this.url}/${api}/${channelId}`, channel, {
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
  getChannels,
  getChannel,
  createChannel,
  deleteChannel,
  updateChannel,
  replaceChannel,
  setUrl,
  setAuthToken
}
