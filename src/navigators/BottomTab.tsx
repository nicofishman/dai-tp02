import type { TabParamList } from './types';

import { StatusBar } from 'react-native';
import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from '../views/Contacts';
import DateTimeAndWeather from '../views/DatetimeAndWeather';
import VideoPlayer from '../views/VideoPlayer';
import SelectBackgroundImage from '../views/SelectBackgroundImage';
import Navbar from '../components/common/Navbar';

interface BottomTabProps {

};

const BottomTab: FC<BottomTabProps> = () => {
    const Tab = createBottomTabNavigator<TabParamList>();

    return (
        <Tab.Navigator
            sceneContainerStyle={{
                paddingTop: StatusBar.currentHeight,
                marginBottom: 12
            }}
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <Navbar {...props} />}>
            <Tab.Screen component={DateTimeAndWeather} name="DateTimeAndWeather" options={{ tabBarLabel: 'Weather' }} />
            <Tab.Screen component={Contacts} name="Contacts" options={{ tabBarLabel: 'Contacts' }} />
            <Tab.Screen component={SelectBackgroundImage} name="SelectBackgroundImage" options={{ tabBarLabel: 'Background' }} />
            <Tab.Screen component={VideoPlayer} name="VideoPlayer" options={{ tabBarLabel: 'Video' }} />
        </Tab.Navigator>
    );
};

export default BottomTab;
