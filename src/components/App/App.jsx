import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container, Section, H1, H2 } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section>
        <H1>Phonebook</H1>
        <ContactForm />
        <Filter />
      </Section>

      <Section>
        <H2>Contacts</H2>
        <ContactList />
      </Section>
    </Container>
  );
};