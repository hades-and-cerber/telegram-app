import axios from 'axios';

const TOKEN = process.env.REACT_APP_TELEGRAM_API_TOKEN;
const BASE_URL = `https://api.telegram.org/bot${TOKEN}/`;

export const sendMessage = async (chatId: number, message: string) => {
  const text = encodeURIComponent(message);

  const response = await axios.post(
    `${BASE_URL}sendMessage?chat_id=${chatId}&text=${text}`
  );

  return response.data;
};
