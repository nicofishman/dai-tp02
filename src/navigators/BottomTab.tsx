import type { TabParamList } from './types';

import { StatusBar } from 'react-native';
import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from '../views/Contacts';
import DateTimeAndWeather from '../views/DatetimeAndWeather';
import VideoPlayer from '../views/VideoPlayer';
import SelectBackgroundImage from '../views/SelectBackgroundImage';
import Navbar from '../components/common/Navbar';
import About from '../views/About';

interface BottomTabProps {

};

const BottomTab: FC<BottomTabProps> = () => {
    const Tab = createBottomTabNavigator<TabParamList>();

    return (
        <Tab.Navigator
            sceneContainerStyle={{
                flex: 1,
                paddingTop: StatusBar.currentHeight
            }}
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <Navbar {...props} />}>
            <Tab.Screen component={DateTimeAndWeather} name="DateTimeAndWeather" options={{ tabBarLabel: 'Weather' }} />
            <Tab.Screen component={Contacts} name="Contacts" options={{ tabBarLabel: 'Contacts' }} />
            <Tab.Screen component={SelectBackgroundImage} name="SelectBackgroundImage" options={{ tabBarLabel: 'Background' }} />
            <Tab.Screen component={VideoPlayer} name="VideoPlayer" options={{ tabBarLabel: 'Video' }} />
            <Tab.Screen component={About} name="About" options={{ tabBarLabel: 'About' }} />
        </Tab.Navigator>
    );
};

export default BottomTab;
