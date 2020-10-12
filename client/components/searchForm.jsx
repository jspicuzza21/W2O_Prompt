/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = (props) => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [invalidSearch, setInvalid] = useState(false);

  const { history } = props;

  const handleSubmit = () => {
    if (city === '' && state === '' && zipCode === '') {
      setInvalid(true);
    } else {
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${street},+${city},+${state},+${zipCode}&key=AIzaSyDO_xXMKAQTO8NynRDj0nhRYP3wFT6a1TI`)
        .then(async ({ data }) => {
          const { lat, lng } = data.results[0].geometry.location;
          const address = data.results[0].formatted_address;
          axios.put('/geoReport', { lat, lng })
            .then(({ data }) => {
              history.push({
                pathname: '/results',
                state: { data, address },
              });
            });
        });
    }
  };
  const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  return (
    <div className="page-container">
      <form className="box form" onSubmit={handleSubmit}>
        <div>
          <label className="label">
            Street:
            <input className="input" value={street} onChange={(e) => setStreet(e.target.value)} />
          </label>
          <label className="label">
            City:
            <input className="input" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
        </div>
        <div style={{ display: 'flex', marginTop: '5px', marginBottom: '15px' }}>
          <div style={{ flexGrow: 1 }}>
            <label className="label">
              State:
            </label>
            <div className="select">
              <select onChange={(e) => setState(e.target.value)}>
                <option>-- State --</option>
                {states.map((st) => <option key={st}>{st}</option>)}
              </select>
            </div>
          </div>
          <div style={{ flexGrow: 1 }}>
            <label className="label">
              Zip Code:
            </label>
            <input style={{ width: '100%' }} className="input" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          </div>
        </div>
        <button className="button is-info" type="submit">Search</button>
        { invalidSearch
        && <p style={{ textAlign: 'center', color: 'red' }}>Please Enter a City, State, or Zip Code</p>}
      </form>
    </div>
  );
};

export default SearchForm;
