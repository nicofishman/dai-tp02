import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface AboutProps {

};

const About: FC<AboutProps> = () => {
    return (
        <StyledView className='flex flex-1'>
            <StyledText>About</StyledText>
        </StyledView>
    );
};

export default About;
