import type { Contact } from 'expo-contacts';

import clsx from 'clsx';
import { styled } from 'nativewind';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useInfoContext } from '../../context/InfoContext';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

interface ContactCardProps {
    contact: Contact;
    onPress: (contact: Contact) => void;
};

const ContactCard: FC<ContactCardProps> = ({ contact, onPress }) => {
    const { isEmergencyNumber } = useInfoContext();

    if (!contact || !contact.firstName) {
        return null;
    }

    const isEmergency = isEmergencyNumber(contact.phoneNumbers?.[0].number ?? '');

    return (
        <StyledTouchableOpacity className='w-1/3 p-2' onPress={() => onPress(contact)}>
            <StyledView className={clsx('bg-white p-2 rounded-md', isEmergency && 'bg-red-200')} style={{ elevation: 2 }}>
                <StyledText className='' numberOfLines={1}>{contact.firstName + ' ' + (contact.lastName ?? '')}</StyledText>
            </StyledView>
        </StyledTouchableOpacity>

    );
};

export default ContactCard;
