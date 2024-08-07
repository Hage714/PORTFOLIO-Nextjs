import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

export async function POST(req, res) {
    const { body } = req.body;
    //const { name, email, message } = body;
    try {
        console.log(body);
        /*
        const { data, error } = await resend.emails.send({
            from: "hagewoche99@gmail.com",
            to: ['hagewoche00@gmail.com', email],
            subject: name,
            react: (
            <>
            <h1>{name}</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
            <p>{message}</p>
            </>
            )
        });
 */
        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(body);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
