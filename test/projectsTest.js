const idUser = '5942fdfb3157b629aab3eae8';
const idCampaign = '5941b6323157b629aab3eabb';
const id = '595bb14af3eae769b1d69408';

var Project = require('../src/projects');
var project = new Project('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');

var query = {
  _with: ['users.projects', 'users.clients'],
  fields: ['description', 'name'],
  filter: {
    description: 'Test Project description 2.2',
    name: 'Test Project Description 1.2'
  },
  page: 1,
  perPage: 3
};

var projectModel = {
  name: 'Test Project name new',
  description: 'Test Project description 2.2',
  domains: [{ url: 'http://www.urlurl.com' }]
};

project.all(query).then(projects => {
  projects.forEach((project) => console.log(project.data));
})
  .catch(error => {
    console.log(error);
  });

// project.get(id).then(projectReturned => {
//   console.log(project);
//   projectReturned.delete().then(project => {
//     console.log(project);
//   }).catch(error => {
//     console.log(error);
//   });

//   // projectReturned.replaceProject(projectModel).then(project => {
//   //   console.log(project);
//   // }).catch(error => {
//   //   console.log(error);
//   // });
// })
// .catch(error => {
//   console.log(error);
// });

// project.create(projectModel).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });

// var projectTemp = new Project('https://generation-api-coupons.s.gigigoapps.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjU5NTQzNWRlZjNlYWU3NjliMWQ2OTNjZSIsIm5hbWUiOiJEYXNoYm9hcmQiLCJ0eXBlIjoiZ2VuZXJhdGlvbiIsImxhc3RSZXF1ZXN0IjoiMjAxNy0wNi0yOVQxNDoyNzoxMy42NzVaIiwiaWF0IjoxNDk4NzQ2NDMzfQ.FKLIBDx5REmnplIvFD5AfsB9ofXrdidP9ApSkqhMBXo');
// projectTemp.data = {
//   name: 'Test Project name new2',
//   description: 'Test Project description 2.2.2',
//   domains: [{ url: 'http://www.urlurl2s.com' }]
// };
// projectTemp.create().then(user => {
//   console.log(user);
// }).catch(error => {
//   console.log(error);
// });

// project.delete(id).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });

// project.update(projectModel, id).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });

// project.replace(projectModel, id).then(project => {
//   console.log(project);
// }).catch(error => {
//   console.log(error);
// });
