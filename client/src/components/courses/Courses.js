import React from 'react';

function Courses() {
  //retrieve all courses
  const getCourses = async () => {
    try {
      const response = await fetch('http://localhost:5000/courses');
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  getCourses();
  return <div>Hello from Courses!</div>;
}

export default Courses;
