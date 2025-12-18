// paw-hut-api-categories.js
import axios from 'axios';

const url = 'https://paw-hut.b.goit.study/api/categories';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'custom value',
    mode: 'no-cors',
  },
};

export async function getCategories() {
  try {
    const response = await axios(url, options);

    if (!response.data) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
