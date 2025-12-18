// paw-hut-api-orders.js
import axios from 'axios';
import iziToast from 'izitoast';

const url = 'https://paw-hut.b.goit.study/api/orders';

export async function sendOrder(data) {
  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Custom-Header': 'custom value',
      },
    });
    iziToast.show("Success send");
    return response.data;
  } catch (error) {
    iziToast.show("Error send");
    console.error('Помилка запиту:', error.response?.data || error.message);
    throw error;
  }
}
