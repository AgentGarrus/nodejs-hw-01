import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const removeAllContacts = async () => {
    try {
        const emptyContacts = [];

        await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2));
        console.log('All contacts removed.');
    } catch (error) {
        console.error('Error removing all contacts:', error);
    }
};

removeAllContacts();