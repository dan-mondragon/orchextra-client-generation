const projectsApi = require('../src/projects');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNVQyMjowODoxMS44MzdaIiwiaWF0IjoxNDk3NTY0NDkxfQ.__5ToBfxjkKY06p08dsBGt1w7y3S1sU8ZfuU5Li2_0Q';
var url = 'https://generation-api-coupons.s.gigigoapps.com';
const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const idProject = '594993a53157b629aab3eb25';
const fs = require('fs');

var _with = {
  users: ['projects']
};

var fields = ['description'];

// projectsApi.getProjects(token, url, _with, fields).then(projects => {
//   projects.forEach((project) => console.log(project));
// })
// .catch(error => {
//   console.log(error);
// });

// projectsApi.getProject(token, url, idProject, undefined, undefined).then(project => {
//   console.log(project);
// })
// .catch(error => {
//   console.log(error);
// });

var project = {
  name: 'Test Project Description 1.3',
  description: 'Test Project description 2',
  url: 'http://www.url2.com'
};
//
// projectsApi.createProject(token, url, project).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });

// projectsApi.createProject(token, url, project).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });


// projectsApi.deleteProject(token, url, idProject).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });

projectsApi.updateProject(token, url, idProject, project).then(project => {
  console.log(project);
}).catch(error => {
  console.log(error);
});

// projectsApi.replaceProject(token, url, idProject, project).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });
