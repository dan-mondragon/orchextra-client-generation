const axios = require('axios');
var rp = require('request-promise');
var FormData = require('form-data');
const api = 'v1/projects';
const projectUtils = require('./fn/projects');


var getProjects = (token, url, w, fields)  => {
  var withString = projectUtils.setWith(w);
  var fieldsString = projectUtils.setFields(fields);

  const projects = axios.get(`${url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return projects.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};

var getProject = (token, url, idProject, w, fields)  => {
  var withString = projectUtils.setWith(w);
  var fieldsString = projectUtils.setFields(fields);
  const project = axios.get(`${url}/${api}/${idProject}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return project.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};

var createProject = (token, url, project) => {
  const add = axios.post(`${url}/${api}`, project, {
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

var deleteProject = (token, url, idProject)  => {
  const project = axios.delete(`${url}/${api}/${idProject}`, {
    headers: {'Authorization': 'Bearer ' + token}
  });

  return project.then((result) => {
    return result.data;
  })
  .catch(error => {
    return {
      statusCode: error.response.status,
      errors: error.response.data
    };
  });
};

var updateProject = (token, url, projectlId, project) => {
  const update = axios.patch(`${url}/${api}/${projectlId}`, project, {
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

var replaceProject = (token, url, projectlId, project) => {
  const update = axios.put(`${url}/${api}/${projectlId}`, project, {
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
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
  replaceProject
};
