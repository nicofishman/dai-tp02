import React, { FC } from 'react';
import { Text, TouchableHighlightProps, TextProps, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface ButtonProps extends TouchableHighlightProps {
    title: string;
    textStyle?: TextProps;
}

const Button: FC<ButtonProps> = ({ title, textStyle, style, ...props }) => {
    return (
        <StyledTouchableOpacity className='w-full justify-center items-center rounded-sm bg-cyan-500' style={style} {...props}>
            <StyledText className='p-5 text-lg text-white' style={[textStyle]}>{title}</StyledText>
        </StyledTouchableOpacity>
    );
};

export default Button;
