import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigators/types';

import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import { Contact } from 'expo-contacts';

const StyledView = styled(View);
const StyledText = styled(Text);

interface SingleContactProps extends StackNavigationProp<RootStackParamList, 'SingleContact'> {
    contact: Contact
};

const SingleContact: FC<SingleContactProps> = ({ contact }) => {
    return (
        <StyledView>
            <StyledText>SingleContact</StyledText>
        </StyledView>
    );
};

export default SingleContact;
