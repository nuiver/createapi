interface Contact {
  firstName: string;
  lastName: string;
  fullName?: string;
  nameInstertion?: string;
  telephoneNumber: string;
  id?: number;
}

interface ContactsAPI {
  postContact(contact: Contact): ContactsAPI;
  getContactById(id:number): Contact
  fullName: string
  getById(v:string, id:number): string;
}

export function phonebook():ContactsAPI {
  let phonebook: Contact[] = []
  let nextId: number = 1

  return { set fullName(contact) {
      contact.fullName = [
        contact.firstName,
        contact.nameInstertion ? contact.nameInstertion : undefined,
        contact.lastName
      ]
        .filter(x => x !== undefined)
        .join(' ');
    },
    postContact(contact): ContactsAPI {
      this.fullName = contact;
      contact.id = nextId;
      nextId++;
      phonebook.push(contact);
      return this;
    },
    getContactById(requestedId): Contact {
      let foundContact: Contact[] = phonebook.filter(contact => contact.id == requestedId);
      return foundContact[0];
    },
    getById(v, requestedId): string {
      let foundContact: Contact[] = phonebook.filter(contact => contact.id == requestedId);
      let keys = Object.keys(foundContact[0])
      if (keys.includes(v)) {
        return foundContact[0][v];
      } else {
        throw new Error('Given key in getById method is not found in the contact object.');
      }
    } };
}