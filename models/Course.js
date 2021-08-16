const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  slug: String,
  school: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['course', 'program']
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 10']
  }
});

module.exports = mongoose.model(Course, CourseSchema);
