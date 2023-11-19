import axios from 'axios';
import qs from 'qs';
import { encode } from 'base-64';
import Config from 'react-native-config';
import { CardTokenRequest, CardTokenResponse } from '@/types/modules/Card';

export type ApiErrorResponse = {
  code?: string;
  location?: string;
  message?: string;
  object?: string;
};

const baseUrl = Config.API_URL;
const baseOmiseVaultURL = Config.TOKEN_API_URL;
const secretKey = Config.SECRET_KEY;
const publicKey = Config.PUBLIC_KEY;
const testUserId = 'cust_test_5wk16v1dfui9wddjdb2';

const generateRandomAmount = () =>
  Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;

const getUserCards = async () => {
  try {
    const credentials = encode(`${secretKey}:`);
    const response = await axios.get(
      `${baseUrl}customers/${testUserId}/cards`,
      {
        headers: { Authorization: `Basic ${credentials}` },
      },
    );

    return response.data;
  } catch (error: ApiErrorResponse | any) {
    return error?.response?.data || error?.message;
  }
};

const createCardToken = async (
  data: CardTokenRequest,
): Promise<CardTokenResponse | any> => {
  try {
    const credentials = encode(`${publicKey}:`);
    const formData = qs.stringify({
      'card[name]': data.card.name,
      'card[number]': data.card.number,
      'card[expiration_month]': data.card.expiration_month,
      'card[expiration_year]': data.card.expiration_year,
      'card[security_code]': data.card.security_code,
    });

    const response = await axios.post(`${baseOmiseVaultURL}tokens`, formData, {
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data;
  } catch (error: ApiErrorResponse | any) {
    return { error: error?.response?.data || error?.message };
  }
};

const addCardForUserByToken = async (cardToken: string) => {
  try {
    const credentials = encode(`${secretKey}:`);
    const response = await axios.patch(
      `${baseUrl}customers/${testUserId}`,
      qs.stringify({ card: cardToken }),
      {
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response.data.cards;
  } catch (error: ApiErrorResponse | any) {
    return error?.response?.data || error?.message;
  }
};

const chargeByCard = async (cardToken: string) => {
  try {
    const credentials = encode(`${secretKey}:`);
    const response = await axios.post(
      `${baseUrl}charges`,
      qs.stringify({
        amount: generateRandomAmount(),
        currency: 'thb',
        customer: testUserId,
        card: cardToken,
      }),
      {
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    return response.data;
  } catch (error: ApiErrorResponse | any) {
    return error?.response?.data || error?.message;
  }
};

export { getUserCards, createCardToken, addCardForUserByToken, chargeByCard };
