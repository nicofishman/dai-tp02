import React, { FC } from 'react';
import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { NavigationProp } from '@react-navigation/native';
import { styled } from 'nativewind';

interface GoBackProps {
    navigation: NavigationProp<any>;
}

const StyledView = styled(View);

const GoBack: FC<GoBackProps> = ({ navigation }) => {
    return (
        <StyledView className='relative left-0 z-10' style={{ top: StatusBar.currentHeight }}>
            <Icon name={'chevron-left'} size={30} onPress={() => navigation.goBack()} />
        </StyledView>
    );
};

export default GoBack;
