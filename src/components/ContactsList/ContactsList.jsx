import { Filter } from 'components';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getContacts, getTextOfFilter } from 'redux/selectors';
import { Li, Ul } from './ContactsList.modules';

const getVisibleContacts = (contacts, textSearch) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(textSearch.toLowerCase())
  );
};

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const textSearch = useSelector(getTextOfFilter);

  if (contacts.length > 0) {
    const visibleContacts = getVisibleContacts(contacts, textSearch);

    let numberItems = 0;
    return (
      <div>
        <Filter />

        <Ul>
          {visibleContacts.map(contact => {
            numberItems += 1;

            return (
              <Li key={contact.id}>
                <ContactsItem contact={contact} numberItems={numberItems} />
              </Li>
            );
          })}
        </Ul>
      </div>
    );
  }
};
