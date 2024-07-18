import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch (error) {
        console.error('Error counting contacts:', error);
    }
};

const numberOfContacts = await countContacts();
console.log('Number of contacts:', numberOfContacts);