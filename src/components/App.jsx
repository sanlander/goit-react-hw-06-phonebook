import { ContactsList, ContactForm } from '../components';
import { ContactsHeader } from './ContactsHeader/ContactsHeader';
import { Layout } from './Layout/Layout';

export function App() {
  return (
    <Layout>
      <ContactForm />
      <ContactsHeader />
      <ContactsList />
    </Layout>
  );
}
