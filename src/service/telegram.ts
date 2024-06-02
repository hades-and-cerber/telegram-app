import axios from "axios";

export const sendMessage = async (chatId: number, message: string) => {
    const TOKEN = process.env.TELEGRAM_API_TOKEN;

    const text = encodeURIComponent(message);

    const response = await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chatId}&text=${text}`
    );

    return response.data;
}
