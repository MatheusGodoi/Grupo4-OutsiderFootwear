import React, { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Customer } from '../../type';
import { api } from '../services/api';

interface SessionProviderProps {
    children: ReactNode;
}

interface SessionContextData {
    session: Customer;
    updateSession: () => void;
}

const SessionContext = createContext<SessionContextData>({} as SessionContextData);

export function SessionProvider({ children }: SessionProviderProps): JSX.Element {
    const [session, setSession] = useState<Customer>(() => {
        const storagedSession = localStorage.getItem('@Group4:customer');

        if (storagedSession) {
            return JSON.parse(storagedSession);
        }

        return;
    });

    const updateSession = () => {
        const data = localStorage.getItem('@Grupo4:customer');

        if (data) {
            setSession(JSON.parse(data));
        }
        // else {
        //     const obj = {
        //         _id: "",
        //         name: "",
        //         admin: false,
        //         email: "",
        //         password: "",
        //         phone: "",
        //         address: "",
        //         status: false,
        //         gender: "",
        //         birthday: 
        //     }
        //     setSession(obj);
        // }
    }

    return (
        <SessionContext.Provider
            value={{
                session,
                updateSession,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}

export function useSession(): SessionContextData {
    const context = useContext(SessionContext);

    return context;
}