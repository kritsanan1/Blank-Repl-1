
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { LoginCredentials } from '@/shared/types';
import { loginUser, logoutUser, clearError } from '../store/authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { data: user, status, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const result = await dispatch(loginUser(credentials));
      return result;
    },
    [dispatch]
  );

  const logout = useCallback(async () => {
    const result = await dispatch(logoutUser());
    return result;
  }, [dispatch]);

  const clearAuthError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    user,
    isLoading: status === 'pending',
    error,
    isAuthenticated,
    login,
    logout,
    clearError: clearAuthError,
  };
};
