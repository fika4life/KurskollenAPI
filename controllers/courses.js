// @desc         GET all courses
// @route        GET /courses
// @access        public
exports.getCourses = async (req, res, next) => {
  try {
    const bootcamps = await Course;
  } catch (err) {}

  res.status(200).json({ success: true, msg: 'Show all courses' });
};

// @desc         GET a single course
// @route        GET /courses/:id
// @access        public
exports.getCourse = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get course with id of ${req.params.id}` });
};

// @desc         Create a single course
// @route        POST /courses
// @access       Private
exports.createCourse = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new course' });
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
