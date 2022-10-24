import type { TabParamList } from '../navigators/types';

import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

const StyledView = styled(View);
const StyledText = styled(Text);

interface DatetimeAndWeatherProps extends BottomTabScreenProps<TabParamList, 'DateTimeAndWeather'> {

};

const DatetimeAndWeather: FC<DatetimeAndWeatherProps> = () => {
    return (
        <StyledView>
            <StyledText>DatetimeAndWeather</StyledText>
        </StyledView>
    );
};

export default DatetimeAndWeather;
