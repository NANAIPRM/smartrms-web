import env from '../../public/env.json';
import envDev from '../../public/env.dev.json';
import envSit from '../../public/env.sit.json';
import envUat from '../../public/env.uat.json';
import envProd from '../../public/env.prod.json';
import { Configuration } from 'src/config';

export const useConfig = (): Configuration => {
  let config: Configuration | null = null;
  const envName = import.meta.env.MODE?.toLowerCase();
  switch (envName) {
    case 'dev':
      config = envDev;
      break;
    case 'prod':
      config = envProd;
      break;
    case 'sit':
      config = envSit;
      break;
    case 'uat':
      config = envUat;
      break;
    default:
      config = env;
      break;
  }
  return config;
};
