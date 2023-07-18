import { POSTGRES_URL } from '$env/static/private'
process.env.POSTGRES_URL = POSTGRES_URL;

export async function handle({ event, resolve }) {

 console.log("this is the hooks file")
    return await resolve(event);
}