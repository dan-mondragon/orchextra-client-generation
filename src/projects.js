const axios = require('axios');
const queryFn = require('./fn/QueryString');

var Base = require('./BaseCRUD');

module.exports=
class Project extends Base {
  get api(){
    return "v1/projects";
  }
}

// module.exports=
// class Project {
//   constructor(url, token, project, count){
//     this.url = url;
//     this.token = token;
//     if(typeof project !== 'undefined'){
//       this.data = project;
//     }
//     if(typeof count !== 'undefined'){
//       this.total_count = count;
//     }
//   }
//
//   getProjects(query){
//     var queryString = queryFn.setQueryString(query);
//     const projects = axios.get(`${this.url}/${api}?${queryString}`, {
//       headers: {'Authorization': 'Bearer ' + this.token}
//     });
//
//     return projects.then((result) => {
//       var Projects = new Array();
//       result.data.forEach(project => {
//         Projects.push(new Project(this.url, this.token, project, result.headers['x-total-count']));
//       });
//       return Projects;
//     })
//     .catch(error => {
//       return Promise.reject({
//         statusCode: error.response.status,
//         errors: error.response.data
//       });
//     });
//   }
//
//   getProject(idProject, query){
//     var queryString = queryFn.setQueryString(query);
//     const project = axios.get(`${this.url}/${api}/${idProject}?${queryString}`, {
//       headers: {'Authorization': 'Bearer ' + this.token}
//     });
//
//     return project.then((result) => {
//       return new Project(this.url, this.token, result.data);
//     })
//     .catch(error => {
//       return Promise.reject({
//         statusCode: error.response.status,
//         errors: error.response.data
//       });
//     });
//   }
//
//   createProject(project){
//     if(typeof project === 'undefined'){
//         project = this.data;
//     }
//     const add = axios.post(`${this.url}/${api}`, project, {
//       headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
//     });
//
//     return add.then(result =>{
//       return new Project(this.url, this.token, result.data);
//     })
//     .catch(error => {
//       return Promise.reject({
//         statusCode: error.response.status,
//         errors: error.response.data
//       });
//     });
//   }
//
//   deleteProject(idProject){
//     if(typeof idProject === 'undefined'){
//       if(typeof this.data !== 'undefined'){
//           idProject = this.data.id;
//       }
//     }
//     const project = axios.delete(`${this.url}/${api}/${idProject}`, {
//       headers: {'Authorization': 'Bearer ' + this.token}
//     });
//
//     return project.then(result => {
//       return result.status;
//     })
//     .catch(error => {
//       return Promise.reject({
//         statusCode: error.response.status,
//         errors: error.response.data
//       });
//     });
//   }
//
//   updateProject(project, idProject){
//     if(typeof idProject === 'undefined'){
//       if(typeof this.data !== 'undefined'){
//           idProject = this.data.id;
//       }
//     }
//     if(typeof project === 'undefined'){
//         project = this.data;
//     }
//     const update = axios.patch(`${this.url}/${api}/${idProject}`, project, {
//       headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
//     });
//
//     return update.then(result => {
//       this.data = result.data;
//       return this;
//     })
//     .catch(error => {
//       return Promise.reject({
//         statusCode: error.response.status,
//         errors: error.response.data
//       });
//     });
//   }
//
//   replaceProject(project, idProject){
//     if(typeof idProject === 'undefined'){
//       if(typeof this.data !== 'undefined'){
//           idProject = this.data.id;
//       }
//     }
//     if(typeof project === 'undefined'){
//         project = this.data;
//     }
//     const update = axios.put(`${this.url}/${api}/${idProject}`, project, {
//       headers: {'Authorization': 'Bearer ' + this.token,'Content-Type': 'application/json'}
//     });
//
//     return update.then(result => {
//       this.data = result.data;
//       return this;
//     })
//     .catch(error => {
//       return Promise.reject({
//         statusCode: error.response.status,
//         errors: error.response.data
//       });
//     });
//   }
// }

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
