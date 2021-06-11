const router = require('express').Router();
const Tasks = require('./model')
const checkTaskPayload = require('./middleware')



router.use('*', (req, res) => {
  res.json({ api: 'task router up'})
})

module.exports = router