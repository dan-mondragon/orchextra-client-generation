const axios = require('axios');
const api = 'v1/projects';
const projectUtils = require('./fn/projects');

var setUrl = (url) => {
  this.url = url;
};

var setAuthToken = (token) => {
  this.token = token;
}

var getProjects = (w, fields)  => {
  var withString = projectUtils.setWith(w);
  var fieldsString = projectUtils.setFields(fields);

  const projects = axios.get(`${this.url}/${api}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
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

var getProject = (idProject, w, fields)  => {
  var withString = projectUtils.setWith(w);
  var fieldsString = projectUtils.setFields(fields);
  const project = axios.get(`${this.url}/${api}/${idProject}?with=${withString}&fields=${fieldsString}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
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

var createProject = (project) => {
  const add = axios.post(`${this.url}/${api}`, project, {
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

var deleteProject = (idProject)  => {
  const project = axios.delete(`${this.url}/${api}/${idProject}`, {
    headers: {'Authorization': 'Bearer ' + this.token}
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

var updateProject = (projectlId, project) => {
  const update = axios.patch(`${this.url}/${api}/${projectlId}`, project, {
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

var replaceProject = (projectlId, project) => {
  const update = axios.put(`${this.url}/${api}/${projectlId}`, project, {
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
  getProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
  replaceProject,
  setUrl,
  setAuthToken
};
