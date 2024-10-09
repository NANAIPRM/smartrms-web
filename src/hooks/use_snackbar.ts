import { SnackbarContext, SnackbarContextType } from '@renderer/context/snakbar/snakbar-context';
import { useContext } from 'react';

export const useSnackbar = <T = SnackbarContextType>() => useContext(SnackbarContext) as T;
