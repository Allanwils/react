import React from 'react';
import Notifications from './Notifications';

import { shallow } from 'enzyme';

describe ('Notifications component', () => {
    it ('renders without crashing', () => {
        const notification = shallow(<Notifications />);
        expect(notification).toBeDefined();
    });
    it('renders three NotificationItem components', () => {
      const notification = shallow(<Notifications />);
      expect(notification.find('NotificationItem')).toHaveLength(3);
    });
    it ('renders the text "Here is the list of notifications"', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('.Notifications p')).toHaveLength(1);
        expect(notification.find('.Notifications p').text()).toEqual('Here is the list of notifications');
    });
    
});