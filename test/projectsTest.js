const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const idProject = '5949957e3157b629aab3eb28';

var Project = require('../src/projects');
var project = new Project('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5MmVlODQxYjQ2YzJjYmRjMmFjZTU4ZCIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0xNFQyMToxNzowMS44NDdaIiwiaWF0IjoxNDk3NDc1MDIxfQ.VVUEnTb0s0cw-X4hTmOj4t822LkyGnlhAeOUKUBEikI');

var query = {
    _with: ['users.projects', 'users.clients'],
    fields: ['description', 'name'],
    filter: ['description=testing']
};

var projectModel = {
  name: 'Test Project name 2',
  description: 'Test Project description 2.2',
  domains: [{url: 'http://www.url3.com'}]
};

// project.getProjects(query).then(projects => {
//   projects.forEach((project) => console.log(project.data));
// })
// .catch(error => {
//   console.log(error);
// });

// project.getProject(idProject).then(projectReturned => {
//   console.log(project);
//   // projectReturned.deleteProject().then(project => {
//   //   console.log(project);
//   // }).catch(error => {
//   //   console.log(error);
//   // });
//
//   projectReturned.replaceProject(projectModel).then(project => {
//     console.log(project);
//   }).catch(error => {
//     console.log(error);
//   });
// })
// .catch(error => {
//   console.log(error);
// });

project.createProject(projectModel).then(project => {
  console.log(project);
}).catch(error => {
  console.log(error);
});

// project.deleteProject(idProject).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });

// project.updateProject(projectModel, idProject).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });

// project.replaceProject(projectModel, idProject).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });
