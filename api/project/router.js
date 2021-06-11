const router = require('express').Router();
const Projects = require('./model')
const { checkProjectPayload } = require('./middleware')

router.get('/', (req, res, next) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/', checkProjectPayload, (req, res, next) => {
  const project = req.body
  Projects.addProject(project)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
})

router.use('/', (req, res) => {
  res.json({ api: 'project router up'})
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
      customMessage: 'Something went wrong in projects router',
      message: err.message,
      stack: err.stack,
  })
})

module.exports = router