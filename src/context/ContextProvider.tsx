import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface StateContextType {
    user: null;
    token: number | null;
    setUser: (user: null) => void;
    setToken: (token: number | null) => void;
}

const StateContext = createContext<StateContextType>({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { },
});

interface StateProviderProps {
    children: ReactNode;
}

export const ContextProvider = ({ children }: StateProviderProps) => {
    const [user, setUser] = useState<null>(null);
    const [token, _setToken] = useState<number | null>(123);

    const setToken = (token: number | null) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("AccessToken", token.toString());
        } else {
            localStorage.removeItem("AccessToken");
        }
    };

    return (
        <StateContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </StateContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext);
