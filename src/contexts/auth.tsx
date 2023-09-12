import React, { createContext, useEffect, useState } from 'react';
import { UserInterface } from '../interface/UserInterface';

interface AuthContextData {
    signed: boolean;
    user: UserInterface | null;
    signIn(user: UserInterface): Promise<void>;
    signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<UserInterface | null>(null);

    useEffect(() => {
        const storagedUser = sessionStorage.getItem('@App:user');
        const storagedToken = sessionStorage.getItem('@App:token');

        if (storagedToken && storagedUser) {
            setUser(JSON.parse(storagedUser));
        }
    }, []);

    async function signIn(user: UserInterface) {

        await new Promise((resolve, reject) => {
            setTimeout(() => {

                const savedUser = {
                    email: 'example@email.com',
                    password: '123456',
                }

                if (user.email == savedUser.email && user.password == savedUser.password) {
                    const response = {
                        user: {
                            ...savedUser
                        },
                        token: 'asdasdasdasdasd'
                    };

                    sessionStorage.setItem('@App:user', JSON.stringify(response.user));
                    sessionStorage.setItem('@App:token', response.token);

                    setUser(savedUser);

                    console.log(response);
                    resolve('Success');
                }
                reject('Error')
            }, 2000);
        });
    }

    async function signOut() {
        setUser(null);

        sessionStorage.removeItem('@App:user');
        sessionStorage.removeItem('@App:token');
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;