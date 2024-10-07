import { useContext } from 'react';
import { AuthContext, AuthContextType } from 'src/context/auth';

export const useAuth = <T = AuthContextType>() => useContext(AuthContext) as T;
