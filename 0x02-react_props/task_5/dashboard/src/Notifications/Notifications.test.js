import React from 'react';
import Notifications from './Notifications';
import { getLatestNotification } from "../utils";
import NotificationItem from "./NotificationItem";


import { shallow } from 'enzyme';

describe ('Notifications component', () => {
    it ('renders without crashing', () => {
        const notification = shallow(<Notifications />);
        expect(notification).toBeDefined();
    });
    
    

    it ('renders the text "Here is the list of notifications"', () => {
        const notification = shallow(<Notifications  displayDrawer = {true}/>);
        expect(notification.find('NotificationItem')).toHaveLength(3);
        expect(notification.find('.Notifications p').text()).toEqual('Here is the list of notifications');
    });
    //Modify the Notifications.test.js
    it ('check that the menu item is being displayed when displayDrawer is false', () => {
        const notification = shallow(<Notifications  displayDrawer={false} />);
        expect(notification.find('.menuItem')).toHaveLength(1);
    })

    it ('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
        const notification = shallow(<Notifications  displayDrawer={false} />);
        expect(notification.find('.Notifications')).toHaveLength(0);
    })
    
    it ('check that the menu item is being displayed when displayDrawer is true', () => {
        const notification = shallow(<Notifications  displayDrawer={true} />);
        expect(notification.find('.menuItem')).toHaveLength(1);
    })

    it ('check that the div.Notifications is being displayed when displayDrawer is true', () => {
        const notification = shallow(<Notifications  displayDrawer={true} />);
        expect(notification.find('.Notifications')).toHaveLength(1);
    })
    //Further modifications of the Notifications.test.js
    it('renders correctly if listNotifications is empty', () => {
        const notification = shallow(
          <Notifications displayDrawer={true} listNotifications={[]} />
        );
        expect(notification.find('.Notifications p').text()).toEqual(
          'No new notification for now'
        );
      });
    
      it('renders correctly if listNotifications is not passed', () => {
        const notification = shallow(<Notifications displayDrawer={true} />);
        expect(notification.find('.Notifications p').text()).toEqual(
          'No new notification for now'
        );
      });
    
      it('renders the correct number of NotificationItem components when listNotifications is passed', () => {
        const notifications = [
          { id: 1, type: 'default', value: 'Notification 1' },
          { id: 2, type: 'urgent', value: 'Notification 2' },
          { id: 3, type: 'urgent', value: 'Notification 3' },
        ];
        const notification = shallow(
          <Notifications displayDrawer={true} listNotifications={notifications} />
        );
        expect(notification.find('NotificationItem')).toHaveLength(3);
      });
    
      it('renders the correct message when listNotifications is empty', () => {
        const notification = shallow(
          <Notifications displayDrawer={true} listNotifications={[]} />
        );
        expect(notification.find('.Notifications p').text()).toEqual(
          'No new notification for now'
        );
      });
    
      it('does not render the message "Here is the list of notifications" when listNotifications is empty', () => {
        const notification = shallow(
          <Notifications displayDrawer={true} listNotifications={[]} />
        );
        expect(notification.find('.Notifications p').text()).not.Equal(
          'Here is the list of notifications'
        );
      });
    
      it('renders the correct message when listNotifications is not passed', () => {
        const notification = shallow(<Notifications displayDrawer={false} />);
        expect(notification.find('.Notifications p').text()).toEqual(
          'No new notification for now'
        );
      });
    
      it('does not render the message "Here is the list of notifications" when listNotifications is not passed', () => {
        const notification = shallow(<Notifications displayDrawer={true} />);
        expect(notification.find('.Notifications p').text()).not.toEqual(
          'Here is the list of notifications'
        );
      });
});

