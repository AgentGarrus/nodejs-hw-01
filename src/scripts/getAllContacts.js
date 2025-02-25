import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        return contacts;
    } catch (error) {
        console.error('Error getting contacts:', error);
    }
};

const contacts = await getAllContacts();
console.log(contacts);