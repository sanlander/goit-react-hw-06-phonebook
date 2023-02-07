import { FormBox, Label, Input, Button, Error } from './ContactForm.modules';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/contactsReducer';

const schema = yup.object().shape({
  name: yup.string().min(2).required('Required field'),
  number: yup.string().phone('UA', true, `Phone is invalid`),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = (values, actions) => {
    const submitName = values.name.toLowerCase();

    if (contacts.find(({ name }) => submitName === name.toLowerCase())) {
      Notify.warning(`${values.name} is already in contacts.`, {
        position: 'center-top',
      });
      return;
    }

    dispatch(addContacts(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <FormBox autoComplete="off">
        <Label htmlFor="name">
          Enter your name
          <br />
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <br />
          <ErrorMessage component={Error} name="name" />
        </Label>
        <br />
        <Label htmlFor="number">
          Enter your number
          <br />
          <Input
            id="number"
            type="tel"
            name="number"
            placeholder="+38 067 122 22 88"
          />
          <br />
          <ErrorMessage component={Error} name="number" />
        </Label>
        <br />
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
};
