
export interface GymRecordPostResult {
  status: boolean,
  data?: GymRecord,
  message: string;
}


export interface GymRecord {
  gymId?: string,
  name: string,
  email: string,
  logoUrl: string,
  phone: string,
  openHours: string,
  description: string,
  active: boolean,
  location: [number, number],
  province: string,
  address: string,
  adminId: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export const InitGymRecord = (): GymRecord => {
  return {
    name: null,
    email: null,
    logoUrl: null,
    phone: null,
    openHours: null,
    description: null,
    active: null,
    location: [null, null],
    province: "",
    address: null,
    adminId: null,
  };
};





export interface GymTouchedForm {
  name: boolean,
  email: boolean,
  phone: boolean,
  openHours: boolean,
  description: boolean,
  province: boolean,
  address: boolean,
}

export const InitGymTouchedForm = (): GymTouchedForm => {
  return {
    name: false,
    email: false,
    phone: false,
    openHours: false,
    description: false,
    province: false,
    address: false
  };
};

export interface GymValidForm {
  name: string | null,
  email: string | null,
  phone: string | null,
  openHours: string | null,
  description: string | null,
  province: string | null,
  address: string | null,
}


export const InitGymValidForm = (): GymValidForm => {
  return {
    name: null,
    email: null,
    phone: null,
    openHours: null,
    description: null,
    province: null,
    address: null
  };
};