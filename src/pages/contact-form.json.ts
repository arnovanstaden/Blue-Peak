import type { APIRoute } from 'astro';
import { buildContactEmail, type TContactMessage } from 'src/lib/email/client';
import { sendEmail } from 'src/lib/email/server';

export const prerender = false;

export const POST: APIRoute = async ({  request }) => {
  const data: TContactMessage = await request.json();

  try {
    await sendEmail({
      subject: 'Website Contact Message',
      body: buildContactEmail(data),
    });
  
    return new Response(
      JSON.stringify({success: true}), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch  {
    return new Response(
      JSON.stringify({success: false}), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
 
}