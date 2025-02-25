export function dateFormatter(dateString: string): string {
  const [year, month, day] = dateString.split('-');

  return `${day.slice(0, 2)}/${month}/${year}`;
}

export function phoneFormatter(phone: string): string {
  const phoneNumber = phone.replace(/\D/g, '');

  const ddd = phoneNumber.slice(0, 2);
  const firstPart = phoneNumber.slice(2, 7);
  const secondPart = phoneNumber.slice(7, 11);

  return `+55 (${ddd}) ${firstPart}-${secondPart}`;
}
