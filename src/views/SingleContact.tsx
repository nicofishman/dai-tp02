import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigators/types';

import { Contact } from 'expo-contacts';
import { styled } from 'nativewind';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import GoBack from '../components/common/GoBack';
import { useInfoContext } from '../context/InfoContext';
import clsx from 'clsx';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);

interface SingleContactProps extends StackScreenProps<RootStackParamList, 'SingleContact'> {
};

const SingleContact: FC<SingleContactProps> = ({ route, navigation }) => {
    const { contact } = route.params as {contact: Contact};

    const { isEmergencyNumber, toggleNumeroEmergencia } = useInfoContext();

    const isEmergency = isEmergencyNumber(contact.phoneNumbers?.[0].number ?? '');

    return (
        <>
            <GoBack navigation={navigation}/>
            <StyledView className='flex-1 justify-center items-center'>
                <StyledText>{contact.firstName} {contact.lastName}</StyledText>
                <StyledText>{contact.phoneNumbers ? contact.phoneNumbers[0].number : 'El numero no esta disponible'} </StyledText>

                <StyledTouchable className={clsx('bg-white p-2 rounded-md mt-5', isEmergency && 'bg-red-200')} style={{ elevation: 2 }} onPress={() => toggleNumeroEmergencia(contact.phoneNumbers?.[0].number ?? '')}>
                    <StyledText>Marcar como numero de emergencia</StyledText>
                </StyledTouchable>

            </StyledView>
        </>
    );
};

export default SingleContact;
