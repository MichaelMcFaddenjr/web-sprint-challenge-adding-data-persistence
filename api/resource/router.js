const router = require('express').Router();

router.use('*', (req, res) => {
  res.json({ api: 'resources router up'})
})

module.exports = router