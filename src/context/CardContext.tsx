import React, { createContext, useState } from 'react';

type CardContextProps = {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  CVVCode: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setCardHolderName: React.Dispatch<React.SetStateAction<string>>;
  setExpiryDate: React.Dispatch<React.SetStateAction<string>>;
  setCVVCode: React.Dispatch<React.SetStateAction<string>>;
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  cleanAddCard: () => void;
};

type Card = {
  id: string;
  name: string;
  expiration_month: string;
  expiration_year: string;
  last_digits: string;
  bank?: string;
  brand?: string;
  city?: string;
  country?: string;
  created_at?: string;
  deleted?: boolean;
  financing?: string;
  fingerprint?: string;
  first_digits?: string | null;
  livemode?: boolean;
  location?: string;
  phone_number?: string | null;
  postal_code?: string;
  security_code_check?: boolean;
  state?: string | null;
  street1?: string | null;
  street2?: string | null;
  tokenization_method?: string | null;
};

export const CardContext = createContext<CardContextProps>(
  {} as CardContextProps,
);

export function CardProvider(props: any) {
  const [cards, setCards] = useState<Card[]>([]);

  const [cardNumber, setCardNumber] = useState<string | ''>('');
  const [cardHolderName, setCardHolderName] = useState<string | ''>('');
  const [expiryDate, setExpiryDate] = useState<string | ''>('');
  const [CVVCode, setCVVCode] = useState<string | ''>('');

  const cleanAddCard = () => {
    setCardNumber('');
    setCardHolderName('');
    setExpiryDate('');
    setCVVCode('');
  };

  const state: CardContextProps = {
    cards,
    setCards,
    cardNumber,
    setCardNumber,
    cardHolderName,
    setCardHolderName,
    expiryDate,
    setExpiryDate,
    CVVCode,
    setCVVCode,
    cleanAddCard,
  };

  return <CardContext.Provider value={state} {...props} />;
}
