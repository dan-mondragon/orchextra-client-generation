var setWith = (w) => {

  var withString = "";
  if(typeof w === 'undefined')
  {
    w = {};
  }

  if(typeof w.users !== 'undefined'){
    withString += "user";
    if(w.users.length > 0){
      w.users.forEach(param => {
        withString += `.${param}`;
      });
      withString += ",";
    }
    else{
      withString += ",";
    }
  }

  if(typeof w.projects !== 'undefined'){
    withString += "project";
    if(w.projects.length > 0){
      w.projects.forEach(param => {
        withString += `.${param}`;
      });
      withString += ",";
    }
    else{
      withString += ",";
    }
  }

  if(typeof w.channels !== 'undefined'){
    withString += "channels";
    if(w.channels.length > 0){
      w.channels.forEach(param => {
        withString += `.${param}`;
      });
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
