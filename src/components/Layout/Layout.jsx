import { Main } from './Layout.modules';

export const Layout = ({ children }) => (
  <Main>
    <h1>Phonebook</h1>
    {children}
  </Main>
);
