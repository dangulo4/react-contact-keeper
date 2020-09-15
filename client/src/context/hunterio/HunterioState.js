import React, { useReducer } from 'react';

import HunterioContext from './hunterioContext';
import HunterioReducer from './hunterioReducer';
import { SET_LOADING, CLEAR_DOMAINS, GET_DOMAIN } from '../types';

let hunterioClientId;
// // let hunterioClientSecret;

if (process.env.NODE_ENV !== 'production') {
  hunterioClientId = process.env.REACT_APP_HUNTERIO_CLIENT_ID;
  // hunterioClientSecret = process.env.REACT_APP_HUNTERIO_CLIENT_SECRET;
} else {
  hunterioClientId = process.env.HUNTERIO_CLIENT_ID;
  // hunterioClientSecret = process.env.HUNTERIO_CLIENT_SECRET;
}

// Initial State
const HunterioState = (props) => {
  const initialState = {
    domain: {},
    loading: false,
  };

  // Reducer
  const [state, dispatch] = useReducer(HunterioReducer, initialState);

  // Get User
  const getDomain = async (text) => {
    setLoading();

    const res = await fetch(
      `https://api.hunter.io/v2/domain-search?domain=${text}&api_key=${hunterioClientId}`
    );
    const data = await res
      .json()
      .then((data) => {
        console.log(data.data.domain);
        state({
          domain: data.emails.map((e, i) => ({
            // firstName: e.first_name,
            // lastName: e.last_name,
            // email: e.value,
            // position: e.position,
            // phone: e.phone_number,
            // department: e.department,
            // company: data.organization,
            domain: data.domain,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));

    // console.log('Orgainization: ' + data.organization);
    // createContactList(data);
    dispatch({
      type: GET_DOMAIN,
      payload: data,
    });
  };

  // function createContactList(data) {
  //   getDomain(data)
  //     .then((data) => {
  //       console.log(data);
  //       state({
  //         contacts: data.data.data.emails.map((e, i) => ({
  //           firstName: e.first_name,
  //           lastName: e.last_name,
  //           email: e.value,
  //           position: e.position,
  //           phone: e.phone_number,
  //           department: e.department,
  //           company: data.data.data.organization,
  //           domain: data.data.data.state,
  //           key: i,
  //         })),
  //       });
  //     })
  //     .catch((err) => console.log(err));
  //   // document.getElementById('contacts').innerHTML = `
  //   //   <table className='table'>
  //   //   <thead>
  //   //     <tr>
  //   //       <th>Company</th>
  //   //       <th>Department</th>
  //   //       <th>Position</th>
  //   //       <th>First Name</th>
  //   //       <th>Last Name</th>
  //   //       <th>Email</th>
  //   //       <th>Phone</th>
  //   //       <th>State</th>
  //   //     </tr>
  //   //   </thead>
  //   //   ${Object.keys(data)
  //   //     .map(function (contact) {
  //   //       return `{contact}`;
  //   //     })
  //   //     .join('')}
  //   // </table>
  //   // `;
  // }

  // Clear Users
  const clearDomains = () => dispatch({ type: CLEAR_DOMAINS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <HunterioContext.Provider
      // Prop of value
      value={{
        domain: state.domain,
        loading: state.loading,
        clearDomains,
        getDomain,
        // createContactList,
      }}
    >
      {props.children}
    </HunterioContext.Provider>
  );
};

export default HunterioState;
