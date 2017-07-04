var setWith = (w) => {

  var withString = "";
  if(typeof w === 'undefined')
  {
    w = {};
  }

  if(typeof w.project !== 'undefined'){
    withString += "project";
    if(w.project.length > 0){
      w.project.forEach(param => {
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
