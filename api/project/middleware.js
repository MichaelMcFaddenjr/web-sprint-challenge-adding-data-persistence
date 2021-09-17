function checkProjectPayload(req, res, next) {
  const { project_name } = req.body
  if(!project_name) {
    res.status(400).json({
      message: "Projects must have name"
    })
  } else {next()}
}

module.exports = { checkProjectPayload }