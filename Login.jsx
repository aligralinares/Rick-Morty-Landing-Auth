import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button type="button" className='btn btn-light btn-lg px-4' onClick={() => loginWithRedirect()}>INICIA SESION</button>
    )
};

export default LoginButton;