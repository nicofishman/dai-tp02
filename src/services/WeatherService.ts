import axios from 'axios';
import * as Location from 'expo-location';

import { WeatherApi } from '../../interfaces';

export const getWeather = async (): Promise<WeatherApi | null> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        console.log('Permission to access location was denied');

        return null;
    }
    const location = await Location.getCurrentPositionAsync();
    const weather = await axios.get<WeatherApi>(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=030aeddb0554b3d3b1fe08ab8879db54&units=metric`);

    return weather.data;
};
