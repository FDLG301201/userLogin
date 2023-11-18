import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut
        } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext<any>(undefined);

interface UserContext {
    login: ()=>void;
    logout: ()=>void;
}

type User = {
    uid: string;
    email: string;
    // ... otras propiedades que puedas necesitar
  };

export const useAuth = () => {
    const contexto = useContext(AuthContext);
    return contexto;
}

export function AuthProvider ({children}:any) {

    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);
        // Función registrar un usuario
    const signUp = (email: string , password: string) =>
        createUserWithEmailAndPassword(auth, email, password);
    
        // Función para iniciar sesión
    const login = (email: string, password: string) => 
        signInWithEmailAndPassword(auth,email, password);
        
        // Función para cerrar sesión
    const logout = () => {
        signOut(auth);
        setUser(null);
    };

    useEffect(() => {
      onAuthStateChanged(auth, currentUser => {
        setUser(currentUser as User | null);
        setLoading(false);
      })
    }, [])
    
    return(
        <AuthContext.Provider value={{signUp ,login, logout, user, loading}}>
            {children}
        </AuthContext.Provider>
    )
}