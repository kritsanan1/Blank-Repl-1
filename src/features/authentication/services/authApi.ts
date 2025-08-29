
import { httpClient } from '@/shared/api/clients/httpClient';
import { LoginCredentials, User, ApiResponse } from '@/shared/types';
import { API_ENDPOINTS } from '@/shared/constants';

interface LoginResponse extends ApiResponse {
  data: {
    user: User;
    token: string;
    refreshToken: string;
  };
}

export const authApi = {
  async login(credentials: LoginCredentials): Promise<LoginResponse['data']> {
    return httpClient.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials)
      .then(response => response.data);
  },

  async logout(): Promise<void> {
    return httpClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  },

  async refreshToken(refreshToken: string): Promise<{ token: string; refreshToken: string }> {
    return httpClient.post(API_ENDPOINTS.AUTH.REFRESH, { refreshToken });
  },

  async register(userData: LoginCredentials & { name: string }): Promise<LoginResponse['data']> {
    return httpClient.post<LoginResponse>(API_ENDPOINTS.AUTH.REGISTER, userData)
      .then(response => response.data);
  },
};
