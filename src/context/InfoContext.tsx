import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface InfoContextType {
    toggleNumeroEmergencia: (numero: string) => void;
    isEmergencyNumber: (numero: string) => boolean;
    numeroEmergencia: string[]
}

export const InfoContext = createContext<InfoContextType | null >(null);

const InfoContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [numeroEmergencia, setNumeroEmergencia] = useState<string[]>([]);

    const toggleNumeroEmergencia = (numero: string) => {
        if (!numeroEmergencia?.includes(numero)) {
            setNumeroEmergencia([...numeroEmergencia, numero]);
        } else {
            setNumeroEmergencia(numeroEmergencia.filter((n) => n !== numero));
        }
    };

    useEffect(() => {
        if (numeroEmergencia.length) {
            AsyncStorage.setItem('numeroEmergencia', JSON.stringify(numeroEmergencia));
        }
    }, [numeroEmergencia]);

    useEffect(() => {
        AsyncStorage.getItem('numeroEmergencia').then((value) => {
            if (value && JSON.parse(value).length > 0) {
                setNumeroEmergencia(JSON.parse(value));
            }
        });
    }, []);

    const isEmergencyNumber = (numero: string) => {
        return numeroEmergencia?.includes(numero);
    };

    const value = useMemo(() => {
        return {
            toggleNumeroEmergencia,
            isEmergencyNumber,
            numeroEmergencia
        };
    }, [numeroEmergencia]);

    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    );
};

export default InfoContextProvider;

export const useInfoContext = () => {
    const context = useContext<InfoContextType>(InfoContext as any);

    if (context === undefined) {
        throw new Error('useInfoContext must be used within a InfoContextProvider');
    }

    return context;
};
