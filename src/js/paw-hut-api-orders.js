// paw-hut-api-orders.js
import axios from 'axios';

const url = 'https://paw-hut.b.goit.study/api/orders';

// const data = {
//   name: 'Петро Іванович',
//   phone: '380961234568',
//   animalId: '667ad1b8e4b01a2b3c4d5e55',
//   comment: 'Текст повідомлення замовлення',
// };

export async function sendOrder(data) {
  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Custom-Header': 'custom value',
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      'Помилка запиту:',
      error.response?.data || error.message
    );
    throw error;
  }
}
