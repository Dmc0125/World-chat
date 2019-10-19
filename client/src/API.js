import axios from 'axios';

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://api-world-chat.now.sh';

export const get = async () => {
  try {
    const {
      data: { comments },
    } = await axios.get(`${API_URL}/comments`);

    return comments;
  } catch (err) {
    console.log(err);
  }
};

export const post = comment => {
  return fetch(`${API_URL}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .catch(err => console.error(err));
};
