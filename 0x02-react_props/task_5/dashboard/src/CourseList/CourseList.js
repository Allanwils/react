import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types'
import CourseShape from './CourseShape';

const CourseList = ({listCourses}) => {
  return (
    <table id CourseList>
        <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
        {listCourses.length === 0 ? (
          <tr>
            <td colSpan="2">No course available yet</td>
          </tr>
        ) : (  
          listCourses.map(course => (
         <CourseListRow 
                            key={course.id}
                            isHeader={false} 
                            textFirstCell={course.name}
                            textSecondCell={course.credit.toString()}/>
                            )))}
            
        </tbody>
    </table>
  )
}

CourseList.propTypes = {
  listCourses:PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses:[]
};

export default CourseList;