const userDataKey = 'userData';

interface UserRole {
  role_type: number;
  account_id?: string;
}

interface UserData {
  username: string;
  password: string;
  userRole: UserRole[];
  id: string;
}

export const checkLogin = (): boolean => {
  const userData = getUserData();
  return checkData(userData);
};

export const getUserData = (): UserData | null => {
  const userData = localStorage.getItem(userDataKey);
  if (userData !== null && checkData(userData)) {
    return JSON.parse(userData) as UserData;
  } else {
    return null;
  }
};

const checkData = (data: any): boolean => {
  let haveData = false;
  const type = typeof data;

  switch (type) {
    case 'object':
      if (data === null) {
        haveData = false;
      } else if (Array.isArray(data)) {
        haveData = data.length !== 0;
      } else {
        haveData = Object.keys(data).length > 0;
      }
      break;
    case 'string':
      haveData = data.length > 0;
      break;
    case 'number':
      break;
    default:
      haveData = false;
      break;
  }
  return haveData;
};
