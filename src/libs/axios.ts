import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { useConfig } from 'src/hooks/use-config';
// import { getWebToken } from '@utils/web-token';

const { publicApiUrl } = useConfig();

type CreateAxiosInstanceOptions = {
  timeout: number;
};

export function createAxiosInstance({ timeout }: CreateAxiosInstanceOptions): AxiosInstance {
  const instance = axios.create({
    timeout,
  });

  instance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    // const accessToken =  await getWebToken();

    config.baseURL = publicApiUrl;
    // if(accessToken){
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }

    if (config?.params?.sortBy && Array.isArray(config?.params?.sortBy)) {
      config.params.sortBy = config.params.sortBy.join('|');
    }

    return config;
  });

  return instance;
}

export const axiosInstance = createAxiosInstance({ timeout: 50000 });
