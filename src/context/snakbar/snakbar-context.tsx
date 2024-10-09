import { createContext } from 'react';

export interface SnackbarContextType {
  showSnackbar: (message: string, severity: 'success' | 'error') => void;
}

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);
