import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styled } from 'nativewind';
import * as Contacts from 'expo-contacts';
import { useEffect } from 'react';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function App() {
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [
                    Contacts.PHONE_NUMBERS,
                    Contacts.EMAILS,
                ],
            });
            
    
            if (data.length > 0) {
              const contact = data[0];
              console.log(contact);
            }
          }
        })();
      }, []);

  return (
    <StyledView className="flex-1 items-center justify-center bg-amber-400">
      <StyledText>Open up App.tsx to start working on your app!</StyledText>
      <StatusBar style="auto" />
    </StyledView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
