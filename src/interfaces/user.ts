export interface UserRecord {
  avatar: string,
  firstName: string,
  lastName: string,
  email: string,
  password?: string,
  role: string,
  token: string,
  gymId: string
}