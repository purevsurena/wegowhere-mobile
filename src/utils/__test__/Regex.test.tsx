import { formatCreditCardNumber, formatExpiryDate } from '@/utils/Regex';

describe('formatCreditCardNumber', () => {
  it('should format credit card number correctly', () => {
    const input = '1234-5678 9012 3456';

    const result = formatCreditCardNumber(input);

    expect(result.formattedDisplay).toBe('1234 5678 9012 3456');
    expect(result.numericInput).toBe('1234567890123456');
  });

  it('should handle empty input', () => {
    const input = '';

    const result = formatCreditCardNumber(input);

    expect(result.formattedDisplay).toBe('');
    expect(result.numericInput).toBe('');
  });
});

describe('formatExpiryDate', () => {
  it('should format expiry date correctly', () => {
    const input = '1225';

    const result = formatExpiryDate(input);

    expect(result.formattedDisplay).toBe('12/25');
    expect(result.numericInput).toBe('1225');
  });

  it('should handle empty input', () => {
    const input = '';

    const result = formatExpiryDate(input);

    expect(result.formattedDisplay).toBe('/');
    expect(result.numericInput).toBe('');
  });
});
