import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Customer } from '../../type';

interface SessionContextData {
    customerActive?: Customer;
    customerSession: () => void;
}

const SessionContext = createContext<SessionContextData>({} as SessionContextData);

export function SessionProvider(): JSX.Element {
    const [customerActive, setCustomerActive] = useState<Customer>()

    function customerSession() {
        const customer = localStorage.getItem('@Grupo4:customer');

        if (customer) {
            console.log("JAZONADO " + JSON.parse(customer));
            setCustomerActive(JSON.parse(customer));
        } else {
            console.log('sem customer')
            return;
        }
    }

    return (
        <SessionContext.Provider
            value={{
                customerActive,
                customerSession,
            }}
        >
        </SessionContext.Provider>
    );
}

export function useSession(): SessionContextData {
    const context = useContext(SessionContext);

    return context;
}