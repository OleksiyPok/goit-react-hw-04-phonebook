import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterForm from './FilterForm';

const LS_KEY = 'phonebook';

const App = () => {
  const [contacts, setContacts] = useState([
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fromLs = localStorage.getItem(LS_KEY);
    if (fromLs) {
      try {
        setContacts(JSON.parse(fromLs));
      } catch (error) {
        console.error('Init from local storage error: ', error.message);
      }
    }
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
      localStorage.removeItem(LS_KEY);
    } else {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const createPerson = person => {
    const newContact = {
      id: nanoid(),
      name: person.name,
      number: person.number,
    };

    if (
      contacts.some(
        person => person.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const deletePerson = delPersonId => {
    const newContactsList = contacts.filter(({ id }) => id !== delPersonId);
    setContacts(newContactsList);
  };

  const getFilteredPersons = () => {
    if (!contacts) return;
    const filteredPersons = contacts.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredPersons;
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Section>
        <ContactForm createPerson={createPerson}></ContactForm>
      </Section>
      <Section title="Contacts">
        <FilterForm setFilter={e => setFilter(e.target.value)}></FilterForm>
        <ContactList
          contacts={getFilteredPersons()}
          deletePerson={deletePerson}
        ></ContactList>
      </Section>
    </div>
  );
};

export default App;
