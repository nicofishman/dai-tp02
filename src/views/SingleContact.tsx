import type { StackScreenProps } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigators/types';

import { Contact } from 'expo-contacts';
import { styled } from 'nativewind';
import { FC, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import clsx from 'clsx';

import GoBack from '../components/common/GoBack';
import { useInfoContext } from '../context/InfoContext';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);

interface SingleContactProps extends StackScreenProps<RootStackParamList, 'SingleContact'> {
};

const SingleContact: FC<SingleContactProps> = ({ route, navigation }) => {
    const { contact } = route.params as {contact: Contact};

    const { isEmergencyNumber, toggleNumeroEmergencia, numeroEmergencia } = useInfoContext();

    const isEmergency = useMemo(() => isEmergencyNumber(contact.phoneNumbers?.[0].number ?? ''), [numeroEmergencia]);

    return (
        <>
            <GoBack navigation={navigation}/>
            <StyledView className={clsx('flex-1 justify-center items-center', isEmergency && 'bg-amber-300')}>
                <StyledText>{contact.firstName} {contact.lastName}</StyledText>
                <StyledText>{contact.phoneNumbers ? contact.phoneNumbers[0].number : 'El numero no esta disponible'} </StyledText>

                <StyledTouchable className={clsx('bg-white p-2 rounded-md mt-5', isEmergency && 'bg-red-200')} style={{ elevation: 2 }} onPress={() => toggleNumeroEmergencia(contact.phoneNumbers?.[0].number ?? '')}>
                    <Text>Marcar como numero de emergencia</Text>
                </StyledTouchable>

            </StyledView>
        </>
    );
};

export default SingleContact;
