import type { TabParamList } from '../navigators/types';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface VideoPlayerProps extends BottomTabScreenProps<TabParamList, 'VideoPlayer'> {

};

const VideoPlayer: FC<VideoPlayerProps> = () => {
    return (
        <StyledView>
            <StyledText>VideoPlayer</StyledText>
        </StyledView>
    );
};

export default VideoPlayer;
