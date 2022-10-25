import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { styled } from 'nativewind';
import { FC, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import { WeatherApi } from '../../../interfaces';
import { getWeather } from '../../services/WeatherService';

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledImage = styled(Image);

interface NavbarProps extends BottomTabBarProps {

};

const Navbar: FC<NavbarProps> = ({ state, descriptors, navigation }) => {
    const [weather, setWeather] = useState<WeatherApi | null>(null);

    useEffect(() => {
        (async () => {
            const w = await getWeather();

            setWeather(w);
        })();
    }, []);

    return (
        <StyledView className='flex-row h-12'>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress: () => void = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate(route.name, { merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key
                        });
                    };

                    return (
                        <StyledTouchableOpacity
                            key={index}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            className='flex-1 flex-col justify-center items-center'
                            style={{ flex: 1 }}
                            testID={options.tabBarTestID}
                            onLongPress={onLongPress}
                            onPress={onPress}
                        >
                            {
                                route.name === 'DateTimeAndWeather' && weather && (
                                    <StyledView>
                                        <StyledImage className='w-8 h-8 -m-2' source={{
                                            uri: `http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`
                                        }}/>

                                    </StyledView>
                                )
                            }
                            <StyledText style={{ color: isFocused ? '#673ab7' : '#222' }}>
                                {label.toString()}
                            </StyledText>
                        </StyledTouchableOpacity>
                    );
                })}
        </StyledView>
    );
};

export default Navbar;
