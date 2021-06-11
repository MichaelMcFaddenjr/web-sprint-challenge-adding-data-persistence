const db = require('../../data/dbConfig')

const getTasks = async () => {
  const tasks = await BroadcastChannel('tasks as t')
    .column(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
    .join('projects as p', 't.project_id', 'p.project_id')

  return tasks.map(task => {
    return {
      ...task,
    task_completed: task.task_completed ? true : false
    }
  })
}

const getTaskById = async (task_id) => {
  const task = await db('tasks')
    .where('task_id', task_id)
    .first()
  task.task_completed === 0 ?
  task.task_completed = false :
  task.task_completed = true

  return task
}

const addTask = (task) => {
  return db('tasks')
    .insert(task)
    .then(tasks_id => {
      return getTaskById(tasks_id[0])
    })
}

module.exports = { getTasks, getTaskById, addTask }