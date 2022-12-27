import type { GymRecord, GymRecordPostResult } from '../interfaces/gym';



const API_TOKEN = import.meta.env.VITE_API_TOKEN;


const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
const ENDPOINT_GYM = import.meta.env.VITE_ENDPOINT_GYM;

async function getGym3(gymId: string) {

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_TOKEN,
    }
  };
  return await fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(data => data.json());
}

async function getGym(gymId: string): Promise<GymRecordPostResult> {

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_TOKEN,
    }
  };
  const response = await fetch(`${API_DOMAIN}${ENDPOINT_GYM}/${gymId}`, options);
  return response.json();
}

async function getGymsByAdmin(adminId: string): Promise<GymRecordPostResult[]> {
  //{{baseUrl}}/user/{{adminId}}/gym
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_TOKEN,
    }
  };
  const response = await fetch(`${API_DOMAIN}/user/${adminId}/gym`, options);
  return response.json();
}

async function saveGym(gym: GymRecord): Promise<GymRecordPostResult> {

  if (gym['id'] || gym['gymId']) {
    return update(gym);
  } else {
    return create(gym);
  }
}

async function create(gym: GymRecord): Promise<GymRecordPostResult> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_TOKEN,
    },
    body: JSON.stringify(gym)
  };
  const response = await fetch(`${API_DOMAIN}${ENDPOINT_GYM}`, options);
  return response.json();
}

async function update(gym: GymRecord): Promise<GymRecordPostResult> {
  const gymId = gym["gymId"] || gym["id"];
  delete gym["gymId"];
  delete gym["id"];
  delete gym["updatedAt"];
  delete gym["createdAt"];

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_TOKEN,
    },
    body: JSON.stringify(gym)
  };
  const response = await fetch(`${API_DOMAIN}${ENDPOINT_GYM}/${gymId}`, options);
  const json = response.json();
  return json;
}

async function deleteGym(gymId: string): Promise<{ status: boolean, message: string; }> {

  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_TOKEN,
    }
  };
  const response = await fetch(`${API_DOMAIN}${ENDPOINT_GYM}/${gymId}`, options);
  return response.json();
}

export {
  getGym,
  getGymsByAdmin,
  saveGym,
  deleteGym,
};