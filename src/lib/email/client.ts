export type TContactMessage = {
  name: string;
  email: string;
  message: string;
  address: string;
  phone: string;
};

export const buildContactEmail = (message: TContactMessage): string => {
  let body = '';
  const keys = Object.keys(message);
  keys.forEach(key => {
    body += `<p> <b>${key}</b>: ${message[key as keyof TContactMessage]}</p>`; // Add 'as keyof TContactMessage' to cast the key to a valid index type
  });

  return `
  <p> Dear Blue Peak </p>
  <p>You received a new message via your website:</p>
  
  ${body}
  `;
}