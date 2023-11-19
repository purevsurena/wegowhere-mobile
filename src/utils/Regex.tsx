export const formatCreditCardNumber = (input: string) => {
  // Remove non-numeric characters
  const numericInput = input.replace(/\D/g, '');

  // Insert space every 4 digits for display
  const formattedDisplay = numericInput.replace(/(\d{4})/g, '$1 ').trim();

  return { formattedDisplay, numericInput };
};

export const formatExpiryDate = (input: string) => {
  // Remove non-numeric characters
  const numericInput = input.replace(/\D/g, '');

  // Insert slash after the first two digits
  const formattedDisplay = numericInput
    .replace(/(\d{0,2})(\d{0,2})/, '$1/$2')
    .trim();

  return { formattedDisplay, numericInput };
};

export const formatExpirationDate = (month: string, year: string) => {
  const formattedMonth: string = String(month).padStart(2, '0');
  const formattedYear: string = String(year).slice(-2);

  return `${formattedMonth}/${formattedYear}`;
};
