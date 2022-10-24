
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './src/navigators/types';
import BottomTab from './src/navigators/BottomTab';
import SingleContact from './src/views/SingleContact';

export default function App () {
    const RootStack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen component={SingleContact} name="SingleContact" />
                <RootStack.Screen component={BottomTab} name="BottomTab" />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
