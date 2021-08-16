const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all courses' });
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new course' });
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Get course with id of ${req.params.id}` });
});

module.exports = router;
