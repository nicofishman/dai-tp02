import React, { FC } from 'react';
import { Text, TouchableHighlightProps, TextProps, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import clsx from 'clsx';

const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface ButtonProps extends TouchableHighlightProps {
    title: string;
    textStyle?: TextProps;
    className?: string;
}

const Button: FC<ButtonProps> = ({ title, textStyle, style, className, ...props }) => {
    return (
        <StyledTouchableOpacity className={clsx('w-full justify-center items-center rounded-sm bg-cyan-500 p-5', className)} style={style} {...props}>
            <StyledText className='text-lg text-white' style={[textStyle]}>{title}</StyledText>
        </StyledTouchableOpacity>
    );
};

export default Button;
