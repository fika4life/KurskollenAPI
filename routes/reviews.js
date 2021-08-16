const express = require('express');

app.get('/courses/:id/reviews', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Get reviews for course with id ${req.params.id}`,
  });
});

app.put('/courses/:courseId/reviews/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Edit review for review with id ${req.params.id}`,
  });
});

app.delete('/courses/:courseId/reviews/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete review with id of ${req.params.id}` });
});
