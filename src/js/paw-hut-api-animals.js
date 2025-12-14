import axios from 'axios';

const url = 'https://paw-hut.b.goit.study/api/animals';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'custom value',
    mode: 'no-cors',
  },
};
  
export async function getAnimalsByQuery(categoryId, page, limit) {
  try {
    const requestURL = `${url}/?categoryId=${categoryId}&page=${page}&limit=${limit}`;
    const response = await axios(`${requestURL}`, options);

    if (!response.data) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
//!================================================

export async function getAnimals(page = 1, limit = 8) {
  const baseURL = 'https://paw-hut.b.goit.study/';
  const endPoint = 'api/animals';
  const url = `${baseURL}${endPoint}?page=${page}&limit=${limit}`;

  const res = await axios.get(url);
  return res.data;
}
