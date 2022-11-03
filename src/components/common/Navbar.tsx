import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { styled } from 'nativewind';
import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { TabParamList } from '../../navigators/types';

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface NavbarProps extends BottomTabBarProps {

};

const routeToIcon: Record<keyof TabParamList, JSX.Element> = {
    Contacts: <AntDesign name='contacts' size={24} />,
    DateTimeAndWeather: <AntDesign name='cloud' size={24} />,
    SelectBackgroundImage: <AntDesign name='picture' size={24} />,
    VideoPlayer: <AntDesign name='play' size={24} />,
    About: <AntDesign name='qrcode' size={24} />
};

const Navbar: FC<NavbarProps> = ({ state, descriptors, navigation }) => {
    // const [weather, setWeather] = useState<WeatherApi | null>(null);

    // useEffect(() => {
    //     (async () => {
    //         const w = await getWeather();

    //         setWeather(w);
    //     })();
    // }, []);

    return (
        <StyledView className='flex-row h-16'>
            {
                state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

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
                            className='flex-1 flex-col justify-center items-center border-r-2 border-gray-300 my-2'
                            testID={options.tabBarTestID}
                            onLongPress={onLongPress}
                            onPress={onPress}
                        >
                            {/* {
                                route.name === 'DateTimeAndWeather' && weather && (
                                    <StyledView>
                                        <StyledImage className='w-8 h-8 -m-2' source={{
                                            uri: `http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`
                                        }}/>

                                    </StyledView>
                                )
                            } */}
                            <>
                                {routeToIcon[route.name as keyof TabParamList]}
                            </>
                        </StyledTouchableOpacity>
                    );
                })}
        </StyledView>
    );
};

export default Navbar;
