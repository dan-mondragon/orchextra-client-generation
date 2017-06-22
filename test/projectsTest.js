const projectsApi = require('../src/projects');
var Auth = require('orchextra-client')
var auth = new Auth('https://auth-api-coupons.s.gigigoapps.com')

const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const idProject = '594af1753157b629aab3eb54';
const fs = require('fs');

projectsApi.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNVQyMjowODoxMS44MzdaIiwiaWF0IjoxNDk3NTY0NDkxfQ.__5ToBfxjkKY06p08dsBGt1w7y3S1sU8ZfuU5Li2_0Q');
projectsApi.setUrl('https://generation-api-coupons.s.gigigoapps.com');

var _with = {
  users: ['projects']
};

var fields = ['description'];

projectsApi.getProjects(_with, fields).then(projects => {
  projects.forEach((project) => console.log(project));
})
.catch(error => {
  console.log(error);
});

// projectsApi.getProject(idProject, _with, fields).then(project => {
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

// projectsApi.createProject(project).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });

// projectsApi.createProject(project).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });


// projectsApi.deleteProject(idProject).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });

projectsApi.updateProject(idProject, project).then(project => {
  console.log(project);
}).catch(error => {
  console.log(error);
});

projectsApi.replaceProject(idProject, project).then(project => {
  console.log(project);
}).catch(error => {
  console.log(error);
});
