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
});