import type { TabParamList } from '../navigators/types';

import React, { FC, useEffect, useState } from 'react';
import { Text, View, Image, Button, Linking } from 'react-native';
import { styled } from 'nativewind';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import { getWeather } from '../services/WeatherService';

import { WeatherApi } from './../../interfaces';
import { useInfoContext } from './../context/InfoContext';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledButton = styled(Button);

interface DatetimeAndWeatherProps extends BottomTabScreenProps<TabParamList, 'DateTimeAndWeather'> {

};

const DatetimeAndWeather: FC<DatetimeAndWeatherProps> = () => {
    const [time, setTime] = useState(format(new Date(), 'HH:mm:ss'));
    const [userWeather, setUserWeather] = useState<WeatherApi | null>(null);
    const { numeroEmergencia } = useInfoContext();

    const text = 'Hola, fuiste seleccionado para ser mi contacto de emergencia, por favor comunicate conmigo lo antes posible. 💋';

    setInterval(() => {
        setTime(format(new Date(), 'HH:mm:ss'));
    }, 1000);

    const locationService = async () => {
        const weather = await getWeather();

        setUserWeather(weather);
    };

    const sendEmergency = () => {
        for (const number of numeroEmergencia) {
            const lastDigits = number.split('11')[1];
            const url = `whatsapp://send?text=${text}&phone=+54911${lastDigits}`;

            Linking.openURL(url);
        }
    };

    useEffect(() => {
        console.log('asdasd');

        locationService();
    }, []);

    return (
        <StyledView className='flex-1 bg-red-400 justify-center items-center gap-8'>
            <StyledText>{format(new Date(), 'dd / MMMM / yyyy', { locale: es })} {time}</StyledText>

            <StyledView className='items-center flex-col gap-2 w-full justify-center'>
                <StyledText>{userWeather?.name}</StyledText>
                <StyledText>{userWeather?.weather[0].description}</StyledText>
                <StyledImage className='w-10 h-10' source={{
                    uri: `http://openweathermap.org/img/w/${userWeather?.weather[0].icon}.png`
                }}/>
                <StyledButton title='MENSAJE DE EMERGENCIA A LOS CONTACTOS' onPress={sendEmergency}/>
            </StyledView>
        </StyledView>
    );
};

export default DatetimeAndWeather;
