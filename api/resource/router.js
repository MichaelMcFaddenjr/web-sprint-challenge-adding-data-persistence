const router = require('express').Router();
const Resource = require('./model')

router.get('/', (req, res, next) => {
  Resource.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  const resource = req.body
  Resource.addResource(resource)
  .then(resource => {
    res.status(201).json(resource)
  })
  .catch(next)
})

router.use('/', (req, res) => {
  res.json({ api: 'resources router up'})
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
      customMessage: 'Something went wrong in resources router',
      message: err.message,
      stack: err.stack,
  })
})

module.exports = router