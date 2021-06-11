const db = require('../../data/dbConfig');

const getProjects = async () => {
  const projects = await db('projects')
  const projectsUpdate = projects.map(project => {
    if (project.project_completed === 0) {
      return {
        ...project, 
        project_completed: false
      }
    } else {
      return {
        ...project,
        project_completed: true
      }
    }
  })
  return projectsUpdate
}
//the completion status is stored as an integer, before returning the data to client 
//it must be switched to a boolean.

const getProjectById = async (project_id) => {
  const project = await db('projects')
    .where('project_id', project_id)
    .first()
  project.project_completed === 0 ?
  project.project_completed = false :
  project.project_completed = true;

  return project
}
//the completion status is stored as an integer, before returning the data to client 
//it must be switched to a boolean.

const addProject = (project) => {
  return db('projects')
    .insert(project)
    .then(project_id => {
      return getProjectById(project_id[0])
    })
}

module.exports = { getProjects, getProjectById, addProject }