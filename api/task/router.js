const router = require('express').Router();

router.use('*', (req, res) => {
  res.json({ api: 'task router up'})
})

module.exports = router