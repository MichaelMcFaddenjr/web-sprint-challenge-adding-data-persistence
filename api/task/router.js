const router = require('express').Router();
const Tasks = require('./model')
const { checkTaskPayload } = require('./middleware')

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Tasks.getAllTasks()
    res.json(tasks)
  } catch (err) {
    next(err)
  }
})



router.use('/', (req, res) => {
  res.json({ api: 'task router up'})
})

module.exports = router