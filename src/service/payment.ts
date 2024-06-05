import axios, { AxiosResponse } from 'axios';
import { DepositAddress } from '../types/dto';

const BASE_URL = 'http://localhost:3000/api/';

export const getDepositAddress = async (token: string, chain: string) => {
  // const response: AxiosResponse<DepositAddress> = await axios.post(`${BASE_URL}deposit`, {
  //   userId: 1,
  //   token,
  //   chain,
  // });

  const response = {
    data: {
      deposit_address: 'TNY5DUVTdt1vwiEK6o9CBdC8s32yMDSpjD',
    }
  };

  await new Promise(resolve => setTimeout(resolve, 1000));

  return response.data;
};
