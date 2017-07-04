const axios = require('axios');
const api = 'v1/channels';
const queryFn = require('./fn/QueryString');

module.exports=
class Channel {
  constructor(url, token, channel, count){
    this.url = url;
    this.token = token;
    if(typeof channel !== 'undefined'){
      this.data = channel;
    }
    if(typeof count !== 'undefined'){
      this.total_count = count;
    }
  }

  getChannels(query){
    var queryString = queryFn.setQueryString(query);
    const channels = axios.get(`${this.url}/${api}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return channels.then((result) => {
      var Channels = new Array();
      result.data.forEach(channel => {
        Channels.push(new Channel(this.url, this.token, channel, result.headers['x-total-count']));
      });
      return Channels;
    })
    .catch(error => {
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    });
  }

  getChannel(idChannel, query){
    var queryString = queryFn.setQueryString(query);
    const channel = axios.get(`${this.url}/${api}/${idChannel}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return channel.then((result) => {
      return new Channel(this.url, this.token, result.data);
    })
    .catch(error => {
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    });
  }


  createChannel(channel){
    if(typeof channel === 'undefined'){
        channel = this.data;
    }
    const add = axios.post(`${this.url}/${api}`, channel, {
      headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
    });

    return add.then(result =>{
      return new Channel(this.url, this.token, result.data);
    })
    .catch(error => {
      return Promise.reject({
        statusCode: error.response.status,
        errors: error.response.data
      });
    });
  }

  deleteChannel(channelId){
    if(typeof channelId === 'undefined'){
      if(typeof this.data !== 'undefined'){
          channelId = this.data.id;
      }
    }
    const del = axios.delete(`${this.url}/${api}/${channelId}`,{
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

  updateChannel(channel, channelId){
    if(typeof channelId === 'undefined'){
      if(typeof this.data !== 'undefined'){
          channelId = this.data.id;
      }
    }
    if(typeof channel === 'undefined'){
        channel = this.data;
    }
    const update = axios.patch(`${this.url}/${api}/${channelId}`, channel, {
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

  replaceChannel(channel, channelId){
    if(typeof channelId === 'undefined'){
      if(typeof this.data !== 'undefined'){
          channelId = this.data.id;
      }
    }
    if(typeof channel === 'undefined'){
        channel = this.data;
    }
    const update = axios.put(`${this.url}/${api}/${channelId}`, channel, {
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
}

// module.exports = {
//   getChannels,
//   getChannel,
//   createChannel,
//   deleteChannel,
//   updateChannel,
//   replaceChannel,
//   setUrl,
//   setAuthToken
// }
