import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';
interface InfoContextType {
    toggleNumeroEmergencia: (numero: string) => void;
    isEmergencyNumber: (numero: string) => boolean;

}

export const InfoContext = createContext<InfoContextType | null >(null);

const InfoContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const value = useMemo(() => {
        return {
            toggleNumeroEmergencia,
            isEmergencyNumber
        };
    }, []);

    const [numeroEmergencia, setNumeroEmergencia] = useState<string[]>([]);

    const toggleNumeroEmergencia = (numero: string) => {
        if (!numeroEmergencia?.includes(numero)) {
            setNumeroEmergencia([...numeroEmergencia, numero]);
        } else {
            setNumeroEmergencia(numeroEmergencia.filter((n) => n !== numero));
        }
    };

    const isEmergencyNumber = (numero: string) => {
        return numeroEmergencia?.includes(numero);
    };

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
