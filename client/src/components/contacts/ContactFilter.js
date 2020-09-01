import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import contactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  // Initialize Context
  const contactContext = useContext(ContactContext);
  // Initialize ref value
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <form>
        <input
          ref={text}
          type='text'
          placeholder='Filter Contacts...'
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default ContactFilter;
