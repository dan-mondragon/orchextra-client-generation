const axios = require('axios');
const api = 'v1/projects';
const queryFn = require('./fn/QueryString');

module.exports=
class Project {
  constructor(url, token, project){
    this.url = url;
    this.token = token;
    if(typeof project !== 'undefined'){
      this.data = project;
    }
  }

  getProjects(query){
    var queryString = queryFn.setQueryString(query);
    const projects = axios.get(`${this.url}/${api}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return projects.then((result) => {
      var Projects = new Array();
      result.data.forEach(project => {
        Projects.push(new Project(this.url, this.token, project));
      });
      return Projects;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  getProject(idProject, query){
    var queryString = queryFn.setQueryString(query);
    const project = axios.get(`${this.url}/${api}/${idProject}?${queryString}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return project.then((result) => {
      return new Project(this.url, this.token, result.data);
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  createProject(project){
    const add = axios.post(`${this.url}/${api}`, project, {
      headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
    });

    return add.then(result =>{
      return new Project(this.url, this.token, result.data);
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  deleteProject(idProject){
    if(typeof idProject === 'undefined'){
        idProject = this.data.id;
    }
    const project = axios.delete(`${this.url}/${api}/${idProject}`, {
      headers: {'Authorization': 'Bearer ' + this.token}
    });

    return project.then(result => {
      return result.status;
    })
    .catch(error => {
      return {
        statusCode: error.response.status,
        errors: error.response.data
      };
    });
  }

  updateProject(project, idProject){
    if(typeof idProject === 'undefined'){
        idProject = this.data.id;
    }
    if(typeof project === 'undefined'){
        project = this.data;
    }
    const update = axios.patch(`${this.url}/${api}/${idProject}`, project, {
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

  replaceProject(project, idProject){
    if(typeof idProject === 'undefined'){
        idProject = this.data.id;
    }
    const update = axios.put(`${this.url}/${api}/${idProject}`, project, {
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
//   getProjects,
//   getProject,
//   createProject,
//   deleteProject,
//   updateProject,
//   replaceProject,
//   setUrl,
//   setAuthToken
// };
