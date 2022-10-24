import type { TabParamList } from './types';

import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from '../views/Contacts';
import DateTimeAndWeather from '../views/DatetimeAndWeather';
import VideoPlayer from '../views/VideoPlayer';
import SelectBackgroundImage from '../views/SelectBackgroundImage';

interface BottomTabProps {

};

const BottomTab: FC<BottomTabProps> = () => {
    const Tab = createBottomTabNavigator<TabParamList>();

    return (
        <Tab.Navigator>
            <Tab.Screen component={DateTimeAndWeather} name="DateTimeAndWeather" />
            <Tab.Screen component={Contacts} name="Contacts" />
            <Tab.Screen component={SelectBackgroundImage} name="SelectBackgroundImage" />
            <Tab.Screen component={VideoPlayer} name="VideoPlayer" />
        </Tab.Navigator>
    );
};

export default BottomTab;
