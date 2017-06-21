var setWith = (w) => {

  var withString = "";
  if(typeof w === 'undefined')
  {
    w = {};
  }

  if(typeof w.client !== 'undefined'){
    withString += "client";
    if(w.client.length > 0){
      w.client.forEach(param => {
        withString += `.${param}`;
      });
      withString += ",";
    }
    else{
      withString += ",";
    }
  }

  if(typeof w.campaign !== 'undefined'){
    withString += "campaign";
    if(w.campaign.length > 0){
      w.campaign.forEach(param => {
        withString += `.${param}`;
      });
      withString += ",";
    }
    else{
      withString += ",";
    }
  }

  return withString;
};


var setFields = (fields) => {
  var fieldsString = "";
  if(typeof fields === 'undefined')
  {
    fields = [];
  }

  fields.forEach(field => {
    fieldsString += `${field},`;
  });
  fieldsString = fieldsString.slice(0,-1);

  return fieldsString;
};

module.exports = {
  setWith,
  setFields
};
