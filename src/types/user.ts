export interface UserRole {
  role_type: number;
  account_id?: string;
}

export interface UserData {
  username: string;
  password: string;
  userRole: UserRole[];
  id: string;
}
