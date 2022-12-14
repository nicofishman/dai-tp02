
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import { RootStackParamList } from './src/navigators/types';
import BottomTab from './src/navigators/BottomTab';
import SingleContact from './src/views/SingleContact';
import InfoContextProvider from './src/context/InfoContext';

export default function App () {
    const RootStack = createNativeStackNavigator<RootStackParamList>();

    return (
        <InfoContextProvider>

            <NavigationContainer>
                <RootStack.Navigator initialRouteName='BottomTab'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <RootStack.Screen component={SingleContact} name="SingleContact" />
                    <RootStack.Screen component={BottomTab} name="BottomTab" />
                </RootStack.Navigator>
            </NavigationContainer>
            <Toast />
        </InfoContextProvider>
    );
}
