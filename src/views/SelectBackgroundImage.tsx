import type { TabParamList } from '../navigators/types';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface SelectBackgroundImageProps extends BottomTabScreenProps<TabParamList, 'SelectBackgroundImage'> {

};

const SelectBackgroundImage: FC<SelectBackgroundImageProps> = () => {
    return (
        <StyledView>
            <StyledText>SelectBackgroundImage</StyledText>
        </StyledView>
    );
};

export default SelectBackgroundImage;
