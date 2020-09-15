import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import HunterioContext from '../../context/hunterio/hunterioContext';

const Domains = () => {
  // Initialize Context
  const hunterioContext = useContext(HunterioContext);

  const { loading, domain, organization } = hunterioContext;

  if (loading) {
    return <Spinner />;
  } else {
    return <div></div>;
  }
};

export default Domains;
