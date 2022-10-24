import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface DateTimeProps {

};

const DateTime: FC<DateTimeProps> = () => {
    return (
        <StyledView>
            <StyledText>DateTime</StyledText>
        </StyledView>
    );
};

export default DateTime;
