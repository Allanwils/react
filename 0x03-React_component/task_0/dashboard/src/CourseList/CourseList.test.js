import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';



describe('<CourseList />', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseList')).toBeDefined();
  });

  it('Check that it renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });

  //Modifications
  it('renders correctly with an empty array or no listCourses property', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(1); // Header row
    expect(wrapper.find('tr')).toHaveLength(2); // Header row + empty message row
    expect(wrapper.find('td').text()).toEqual('No course available yet');
  });

  it('renders a list of courses correctly', () => {
    const courses = [
      { id: 1, name: 'Course 1', credit: 3 },
      { id: 2, name: 'Course 2', credit: 4 }
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(3); // Header row + 2 course rows
    expect(wrapper.find('td').at(2).text()).toEqual('Course 1');
    expect(wrapper.find('td').at(3).text()).toEqual('3');
    expect(wrapper.find('td').at(4).text()).toEqual('Course 2');
    expect(wrapper.find('td').at(5).text()).toEqual('4');
  });
});