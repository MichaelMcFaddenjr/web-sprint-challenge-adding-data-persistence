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

const addProject = (project) => {
  return db('projects')
    .insert(project)
    .then(([project_id]) => {
      return db('projects').where('project_id', project_id).first()
    })
}

module.exports = { getProjects, addProject }