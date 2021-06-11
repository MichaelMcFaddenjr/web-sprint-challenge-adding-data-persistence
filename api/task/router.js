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

router.post('/', checkTaskPayload, async (req, res, next) => {
  try {
    const newTask = await Tasks.addTask(req.body)
    res.json(newTask)
  } catch (err) {
    next(err)
  }
})

router.use('/', (req, res) => {
  res.json({ api: 'task router up'})
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
      customMessage: 'Something went wrong in tasks router',
      message: err.message,
      stack: err.stack,
  })
})

module.exports = router