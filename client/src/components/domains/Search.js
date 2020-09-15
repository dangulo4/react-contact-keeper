import React, { useState, useContext } from 'react';
import HunterioContext from '../../context/hunterio/hunterioContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  // Intialize HunterioContext
  const hunterioContext = useContext(HunterioContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter a value', 'light');
    } else {
      hunterioContext.getDomain(text);
      setText('');
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Domains...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {/* {hunterioContext.domain.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={hunterioContext.clearDomains}
        >
          Clear
        </button>
      )} */}
    </div>
  );
};

export default Search;
