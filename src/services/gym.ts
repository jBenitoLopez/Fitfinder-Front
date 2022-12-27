import type { GymRecord, GymRecordPostResult } from "../interfaces/gym";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
const EP_GYM = import.meta.env.VITE_ENDPOINT_GYM;

const headers ={
  "Content-Type": "application/json",
  Authorization: "Bearer " + API_TOKEN,
}
const getOptions = {
  method: "GET",
  headers
};

async function getGyms() {
  return await fetch(`${API_DOMAIN}${EP_GYM}`, getOptions)
    .then((data) => data.json())
    .then((data) => data.data)
    .catch((error) => Error(error.message));
}
async function getGymByID(gymID: string) {
  let response =  await fetch(`${API_DOMAIN}${EP_GYM}/${gymID}`, getOptions)
    .then((data) => data.json())
    .then((data) => data.data)
    .catch((error) => Error(error.message));
  delete response.id
  delete response.createdAt
  delete response.updatedAt
  return response
}
async function createGym(body: GymRecord) {
  const options = {
    method: "POST",
   headers,
    body: JSON.stringify(body),
  };
  return await fetch(`${API_DOMAIN}${EP_GYM}`, options)
    .then((data) => data.json())
    .catch((error) => Error(error.message));
}
async function updateGym(gymID:string,body: GymRecord) {
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  };
  return await fetch(`${API_DOMAIN}${EP_GYM}/${gymID}`, options)
    .then((data) => data.json())
    .catch((error) => Error(error.message));
}
async function deleteGym(gymID: string) {
  const options = {
    method: "DELETE",
    headers
  };
  return await fetch(`${API_DOMAIN}${EP_GYM}/${gymID}`, options)
    .then((data) => data.json())
    .catch((error) => Error(error.message));
}
export { getGyms, getGymByID, createGym, deleteGym,updateGym };
