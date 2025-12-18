//paw-hut-api-feedbacks.js
import axios from 'axios';

const url = 'https://paw-hut.b.goit.study/api/feedbacks';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'custom value',
    mode: 'no-cors',
  },
};

export async function getFeedbacks(page, limit) {
  try {
    const requestURL = `${url}/?page=${page}&limit=${limit}`;
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
