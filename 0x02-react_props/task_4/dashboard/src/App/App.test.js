// src/App/App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('check that CourseList is not displayed', () => {
    const wrapper = shallow(<App isLoggedIn={false}/>);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });
});

describe('App function Component', () => {
  it('verify that the Login component is not included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it('verify that the CourseList component is included', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });
});
