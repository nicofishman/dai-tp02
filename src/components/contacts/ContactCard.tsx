import type { Contact } from 'expo-contacts';

import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

interface ContactCardProps {
    contact: Contact;
};

const ContactCard: FC<ContactCardProps> = () => {
    return (
        <StyledView>
            <StyledText>ContactCard</StyledText>
        </StyledView>
    );
};

export default ContactCard;
