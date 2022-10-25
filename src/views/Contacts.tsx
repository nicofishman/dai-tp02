import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { Contact } from 'expo-contacts';
import type { RootStackParamList, TabParamList } from '../navigators/types';

import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import * as ExpoContacts from 'expo-contacts';
import { styled } from 'nativewind';
import { FC, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import ContactCard from '../components/contacts/ContactCard';

const StyledView = styled(View);

interface ContactsProps extends CompositeScreenProps<
BottomTabScreenProps<TabParamList, 'Contacts'>,
StackScreenProps<RootStackParamList>
> {
};

const Contacts: FC<ContactsProps> = ({ navigation }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    const pressContact = (contact: Contact) => {
        navigation.navigate('SingleContact', {
            contact
        });
    };

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
        <StyledView className='items-center justify-center w-full bg-lime-200'>
            <FlatList

                data={contacts}
                keyExtractor={(item) => item.id}
                numColumns={3}

                renderItem={({ item }) => (
                    <ContactCard contact={item} onPress={pressContact} />
                )}

            />
        </StyledView>
    );
};

export default Contacts;
