import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('When isHeader is true', () => {
    it('renders a row with one cell with colSpan="2"', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').prop('colSpan')).toEqual(2);
    });

    it('renders correctly two td elements within a tr element', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test1" textSecondtCell="test2" />);
        expect(wrapper.find('td')).toHaveLength(2);
        expect(wrapper.find('td').at(0).text()).toEqual("test1");
        expect(wrapper.find('td').at(1).text()).toEqual("");
        
    });
});
