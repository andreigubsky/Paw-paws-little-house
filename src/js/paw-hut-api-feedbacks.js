//paw-hut-api-feedbacks.js
import axios from 'axios';

const url = 'https://paw-hut.b.goit.study/api/feedbacks';

export async function fetchReviews() {
  try {
    const response = await axios.get(url);
    return response.data.feedbacks || response.data || [];
  } catch (error) {
    return [];
  }
}
