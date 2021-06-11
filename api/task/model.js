const db = require('../../data/dbConfig')

const getAllTasks = async () => {
  const tasks = await db('tasks as t')
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
};

const addTask = async (task) => {
  const [id] = await db('tasks').insert(task, ['task_id']);
  const newTask = await getById(id);
  console.log(newTask)
  return {
    ...newTask,
    task_completed: newTask.task_completed ? true : false //stored an integer 
  }
};

const getById = (task_id) => {
  return db('tasks').where({ task_id }).first();
};

module.exports = { getAllTasks, addTask };