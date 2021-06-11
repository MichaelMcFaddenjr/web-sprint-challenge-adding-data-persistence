const router = require('express').Router();

router.use('*', (req, res) => {
  res.json({ api: 'project router up'})
})

module.exports = router