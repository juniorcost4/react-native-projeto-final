import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export default AuthProvider = ({ children }) => {

    const [login, setLogin] = useState(null);
    const [loginStorage, setLoginStorage] = useState(null);

    useEffect(async () => {
        const loginAuth = await AsyncStorage.getItem('@login_auth');
        console.log(loginAuth);

        if (loginAuth) {
            setLogin(JSON.parse(loginAuth));
        }
    }, [loginStorage]);

    const handleLogin = async ({ loginUsuario, senhaUsuario }) => {
        const data = { login: loginUsuario, senha: senhaUsuario };

        console.log(data);
        const login = JSON.stringify(data);

        setLoginStorage(login);
        await AsyncStorage.setItem('@login_auth', login);
    }

    const removeLogin = async () => {
        await AsyncStorage.removeItem('@login_auth');
    }

    const value = {
        login,
        handleLogin,
        removeLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthValue = () => useContext(AuthContext);
