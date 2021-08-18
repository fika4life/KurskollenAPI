const Course = require('../models/Course');
// @desc         GET all courses
// @route        GET /courses
// @access        public
exports.getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res
      .status(200)
      .json({ success: true, count: courses.length, data: courses });
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
exports.updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!course) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: course });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc         Delete course
// @route        DELETE /courses/:id
// @access       Private
exports.deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
