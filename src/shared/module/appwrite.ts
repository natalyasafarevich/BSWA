import { Client, Account } from 'appwrite';

export const client = new Client();

const APPWRITE_ID = process.env.APPWRITE_ID ?? '';
const APPWRITE_URL = process.env.APPWRITE_URL ?? '';

client.setEndpoint(APPWRITE_URL).setProject(APPWRITE_ID);

export const account = new Account(client);

export { ID } from 'appwrite';
