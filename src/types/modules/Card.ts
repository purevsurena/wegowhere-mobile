export type CardProps = {
  cardHolderName: string;
  expirationDate: string;
  last4Digits: string | number;
  testID?: string;
  onPress: () => void;
};

export type CardTokenRequest = {
  card: {
    name: string;
    number: string;
    expiration_month: number;
    expiration_year: number;
    security_code: string;
  };
};

export type CardTokenResponse = {
  object: string;
  id: string;
  livemode: boolean;
  location: string;
  used: boolean;
  charge_status: string;
  card: {
    name: string;
    number: string;
    expiration_month: number;
    expiration_year: number;
    city: string;
    postal_code: string;
    security_code: string;
  };
  created_at: string;
};

export type EmptyCardProps = {
  onPress: () => void;
};
