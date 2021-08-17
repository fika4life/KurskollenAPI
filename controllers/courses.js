const Course = require('../models/Course');
// @desc         GET all courses
// @route        GET /courses
// @access        public
exports.getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ success: true, data: courses });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc         GET a single course
// @route        GET /courses/:id
// @access        public
exports.getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: course });
  } catch (err) {
    res.status.Course(400).json({ success: false });
  }
};

// @desc         Create a single course
// @route        POST /courses
// @access       Private
exports.createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      success: true,
      data: course
    });
  } catch (err) {
    res.status(400).json({
      success: false
    });
  }
};

// @desc         Update course
// @route        PUT /courses
// @access       Private
exports.updateCourse = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Updated course with id of ${req.params.id}` });
};

// @desc         Delete course
// @route        DELETE /courses/:id
// @access       Private
exports.deleteCourse = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Deleted course with id of ${req.params.id}` });
};
