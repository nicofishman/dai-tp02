import React, { FC, ReactNode } from 'react';
import { Text, View, TextInput, TextInputProps } from 'react-native';
import { styled } from 'nativewind';
import clsx from 'clsx';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

interface InputProps extends TextInputProps {
    startDecorator?: ReactNode;
    endDecorator?: ReactNode;
}

const Input: FC<InputProps> = ({ startDecorator, endDecorator, ...props }) => {
    return (
        <StyledView className='relative w-full justify-center'>
            <StyledTextInput
                className={clsx('w-full h-10 my-5 p-5 rounded-sm border', endDecorator ? 'pr-45' : 'pr-5', startDecorator ? 'pl-45' : 'pl-5')}
                style={[props.style]}
                {...props}
            />
            {startDecorator && (<StyledView className='absolute left-5'>
                {startDecorator}
            </StyledView>)}
            {endDecorator && (<StyledView className='absolute right-5'>
                {endDecorator}
            </StyledView>)}
        </StyledView>
    );
};

export default Input;
