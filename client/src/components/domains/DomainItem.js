import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DomainItem = ({ domain: { organiztion, country } }) => {
  return (
    <div className='card text-center'>
      {/* <img
        src={organiztion}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      /> */}
      <h3>Organization</h3>

      <div>
        <Link
          to={`/search/${organiztion}`}
          className='btn btn-dark btn-sm my-1'
        >
          More
        </Link>
      </div>
      <div id='contacts'></div>
    </div>
  );
};

DomainItem.propTypes = {
  domain: PropTypes.object.isRequired,
};

export default DomainItem;
