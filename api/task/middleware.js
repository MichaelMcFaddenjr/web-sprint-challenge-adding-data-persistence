function checkTaskPayload(req, res, next) {
  const { task_description } = req.body
  if(!task_description) {
    res.status(400).json({
      message: "Task description is required"
    })
  } else {next()}
}

module.exports = { checkTaskPayload }