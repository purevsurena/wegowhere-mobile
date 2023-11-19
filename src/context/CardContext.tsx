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
  cards?: Card[];
  setCards?: React.Dispatch<React.SetStateAction<Card[]>>;
};

type Card = {
  id: number;
  cardHolderName: string;
  last4Digits: string;
  expirationDate: string;
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
  };

  return <CardContext.Provider value={state} {...props} />;
}
