import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { Contact } from 'expo-contacts';

import { NavigatorScreenParams } from '@react-navigation/native';

type TabParamList = {
    DateTimeAndWeather: undefined;
    Contacts: undefined;
    SelectBackgroundImage: undefined;
    VideoPlayer: undefined;
    About: undefined;
}

type BottomTabType = BottomTabNavigationProp<TabParamList>;

type RootStackParamList = {
    BottomTab: NavigatorScreenParams<TabParamList>;
    SingleContact: {
        contact: Contact;
    }
}
