import { AuthSelectors } from "../store/selectors/auth.selectors"
import {useSelector} from "react-redux" 
import { useEffect, useState } from "react";

export function useIsAuthenticated() {
    const [isAuthenticated, setIAuthenticated] = useState(false)
    const accessToken = useSelector(AuthSelectors.selectAccessToken)
    const expiration = useSelector(AuthSelectors.selectTokenExpiration)
    
    useEffect(()=>{ 
        const isTokanValid =  validateToken(accessToken,expiration)
        setIAuthenticated(isTokanValid)
    } ,[accessToken, expiration])

    return isAuthenticated;
}

function validateToken(token, expiresIn) {
    if (!token || token=="" || !expiresIn) {
        return false;
    } 
    const now = new Date().valueOf();
    const expirationTime = new Date(expiresIn).valueOf()
    return expirationTime >= now;
}