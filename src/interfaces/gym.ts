
export interface GymRecordPostResult {
  status?: boolean,
  data?: GymRecord,
  message?: string;
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
  location: number[],
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
  name: string,
  email: string,
  phone: string,
  openHours: string,
  description: string,
  province: string,
  address: string,
}


export const InitGymValidForm = (): GymValidForm => {
  return {
    name: '',
    email: '',
    phone: '',
    openHours: '',
    description: '',
    province: '',
    address: ''
  };
};

export interface GymTableData {
  headers: {
    id: string,
    name: string,
    email: string,
    phone: string,
    province: string,
    address: string,
    active: string,
    edit: string,
    delete: string,
  },
  data: TableData[];
}

export interface TableData {
  id: string,
  name: string,
  email: string,
  phone: string,
  province: string,
  address: string,
  active: boolean,
}


export const InitGymTableData = (): GymTableData => ({
  headers: {
    id: null,
    name: null,
    email: null,
    phone: null,
    province: null,
    address: null,
    active: null,
    edit: null,
    delete: null,
  },
  data: [
    {
      id: null,
      name: null,
      email: null,
      phone: null,
      province: null,
      address: null,
      active: null,
    }
  ]
});
