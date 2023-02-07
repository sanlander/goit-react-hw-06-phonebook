import { ContactsList, ContactForm } from '../components';
import { Layout } from './Layout/Layout';

export function App() {
  return (
    <Layout>
      <ContactForm />
      <ContactsList />
    </Layout>
  );
}
