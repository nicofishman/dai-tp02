import type { Contact } from 'expo-contacts';
import type { RouteProp } from '@react-navigation/native';
import type { TabParamList } from '../navigators/types';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import * as ExpoContacts from 'expo-contacts';
import { FlatList, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { styled } from 'nativewind';

import ContactCard from '../components/contacts/ContactCard';

const StyledView = styled(View);

interface ContactsProps extends BottomTabScreenProps<TabParamList, 'Contacts'> {
};

const Contacts: FC<ContactsProps> = ({}) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        (async () => {
            const { status } = await ExpoContacts.requestPermissionsAsync();

            if (status === 'granted') {
                const { data } = await ExpoContacts.getContactsAsync({
                    fields: [
                        ExpoContacts.PHONE_NUMBERS,
                        ExpoContacts.EMAILS
                    ]
                });

                if (data.length > 0) {
                    setContacts(data);
                }
            }
        })();
    }, []);

    return (
        <StyledView>
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ContactCard contact={item} />
                )}
            />
        </StyledView>
    );
};

export default Contacts;
