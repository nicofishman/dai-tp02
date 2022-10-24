import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface WeatherProps {

};

const Weather: FC<WeatherProps> = () => {
    return (
        <StyledView>
            <StyledText>Weather</StyledText>
        </StyledView>
    );
};

export default Weather;
