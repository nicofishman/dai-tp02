import type { TabParamList } from '../navigators/types';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import React, { FC, useState } from 'react';
import { View, Vibration } from 'react-native';
import { styled } from 'nativewind';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';
import WebView from 'react-native-webview';

import Input from './../components/common/Input';
import Button from './../components/common/Button';

const StyledView = styled(View);

interface VideoPlayerProps extends BottomTabScreenProps<TabParamList, 'VideoPlayer'> {

};

const VideoPlayer: FC<VideoPlayerProps> = () => {
    const [hasGuessedPassword, sethasGuessedPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [isShown, setIsShown] = useState(false);
    const PASSWORD = 'holahola123';

    const guessPassword = () => {
        if (password.toLocaleLowerCase() === PASSWORD) {
            sethasGuessedPassword(true);
            Toast.show({
                type: 'success',
                text1: 'Correct password',
                text2: 'You have unlocked the video',
                visibilityTime: 2000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40,
                position: 'top'
            });
        } else {
            Toast.show({
                type: 'error',
                text1: 'Incorrect password',
                text2: 'Please try again',
                visibilityTime: 2000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40
            });
            Vibration.vibrate(0.2 * 1000);
        }
    };

    return (
        <StyledView className='flex-1 bg-indigo-400 justify-center items-center'>
            {
                hasGuessedPassword
                    ? (
                        <StyledView className='w-80 h-1/2 items justify-center'>
                            <WebView
                                allowsInlineMediaPlayback={true}
                                contentMode='recommended'
                                source={{ uri: 'https://player.vimeo.com/video/298282253?h=6b52545bc7' }}
                                style={{ width: 300, height: 100, backgroundColor: 'transparent' }}
                            />
                        </StyledView>
                    )
                    : (
                        <StyledView className='w-1/2 flex-col'>
                            <Input className="bg-red-200" endDecorator={
                                isShown
                                    ? (
                                        <FA5 color="black" name="eye" size={20} onPress={() => setIsShown(!isShown)} />
                                    )
                                    : (
                                        <FA5 color="black" name="eye-slash" size={20} onPress={() => setIsShown(!isShown)} />
                                    )
                            } placeholder='Password' secureTextEntry={!isShown} value={password} onChangeText={setPassword}/>
                            <Button title='Desbloquear' onPress={() => guessPassword()}/>
                        </StyledView>
                    )
            }
        </StyledView>
    );
};

export default VideoPlayer;

/*
<iframe src="https://player.vimeo.com/video/298282253?h=6b52545bc7" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/298282253">Rick Astley - Never Gonna Give You Up</a> from <a href="https://vimeo.com/user91207399">The Big Jimms</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
*/
