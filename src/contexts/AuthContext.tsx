import { createContext, ReactNode, useEffect, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import UsuarioServices  from "../services/UsuarioServices"
import { ToastAlerta } from "../utils/ToastAlerta"


interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
        const usuarioSalvo = localStorage.getItem("usuario");
        
        return usuarioSalvo
          ? JSON.parse(usuarioSalvo)
          : {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
            };
        });

    const usuarioServices = new UsuarioServices();

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(usuario.token){
            localStorage.setItem("usuario", JSON.stringify(usuario));
        }
    })

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await usuarioServices.logarUsuario(`/usuarios/logar`, usuarioLogin, setUsuario)
            ToastAlerta("Usuário foi autenticado com sucesso!", 'sucesso')
        } catch (error) {
            ToastAlerta("Os dados do Usuário estão inconsistentes!", 'erro')
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
        localStorage.removeItem("usuario")
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}