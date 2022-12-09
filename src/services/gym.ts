import type { GymRecord, GymRecordPostResult } from '../interfaces/gym';

const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
const ENDPOINT_GYM = import.meta.env.VITE_ENDPOINT_GYM;

export async function saveGym(gym: GymRecord): Promise<GymRecordPostResult> {
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
