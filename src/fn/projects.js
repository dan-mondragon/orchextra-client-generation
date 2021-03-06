var setWith = (w) => {

  var withString = "";

  if(typeof w === 'undefined')
  {
    w = {};
  }

  if(typeof w.users !== 'undefined'){
    withString += "users";
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
