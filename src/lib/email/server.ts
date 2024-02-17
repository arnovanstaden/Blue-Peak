/* eslint-disable no-console */
import nodemailer from 'nodemailer';

const getTransporter = async () => {
  let transporter: nodemailer.Transporter | undefined;

  if (!transporter) {
    transporter = await nodemailer.createTransport({
      auth: {
        user: 'info@blue-peak.co.za',
        pass: import.meta.env.NODEMAILER_PW
      },
      host: 'mail.blue-peak.co.za',    
      port: 465,
      secure: true,
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    await transporter.verify((error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Server is ready to take our messages (info@blue-peak.co.za)');
      }
    });
  }

  return transporter;
}

interface SendEmail {
  subject: string;
  body: string;
}

export const sendEmail = async ({ subject, body, }: SendEmail): Promise<void> => {
  const transporter = await getTransporter();
  const to = process.env.NODEMAILER_CONTACT_EMAIL;
  const message = {
    from: 'Blue Peak Website <info@blue-peak.co.za>',
    to: import.meta.env.NODEMAILER_CONTACT_EMAIL,
    subject,
    html: body,
  };

  try {
    // Await the promise returned by the sendMail method
    await new Promise((resolve, reject) => {
      transporter.sendMail(message, (error: unknown, info: unknown) => {
        if (error) {
          console.error(error)
          reject(new Error('Error sending email'));
        } else {
          console.log(`Email Sent to ${to}`);
          resolve(info);
        }
      });
    });
  } catch (error) {
    // Handle any errors that occur during the sending process
    console.error(error);
    throw error; // Rethrowing the error after logging it
  }
}
