import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import HunterioContext from '../../context/hunterio/hunterioContext';

const Domain = () => {
  const hunterioContext = useContext(HunterioContext);

  const { getDomain, loading, domain } = hunterioContext;

  useEffect(() => {
    getDomain(match.params.domain);
    // getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const { domain, organization, country, emails } = domain;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>

      <div className='card grid-2'>
        <div className='all-center'>
          <h1>{organization}</h1>
          <p>Location: {country}</p>
        </div>
        <div>
          {organization && (
            <Fragment>
              <h3>Company</h3>
              <p>{organization}</p>
            </Fragment>
          )}
          <a href={domain} className='btn btn-dark my-1'>
            Visit Company Domain
          </a>
          <ul>
            <li>
              {organization && (
                <Fragment>
                  <strong>Company: </strong> {organization}
                </Fragment>
              )}
            </li>
          </ul>
          <ul>
            <li>
              {domain && (
                <Fragment>
                  <strong>Domain: </strong> {domain}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Domain: {domain} </div>
        {/* <div className='badge badge-success'>Following: {following} </div>
        <div className='badge badge-light'>Repos: {public_repos} </div>
        <div className='badge badge-dark'>Public Gists: {public_gists} </div> */}
      </div>
      {/* <Repos repos={repos} /> */}
    </Fragment>
  );
};

export default Domain;
