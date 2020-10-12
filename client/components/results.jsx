import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
  const { history } = props;

  if (props.location.state && props.location.state.data.length > 1) {
    const { data, address } = props.location.state;
    return (
      <div className="page-container">
        <div className="results-container">
          <div className="results-header">
            <h1 className="title">Displaying {data.length} results for {address}</h1>
            <button className="button is-info" type="button" onClick={() => history.push('/')}>Back to Search</button>
          </div>
          {data.map((report) => (
            <div key={report.service_request_id} className="box result-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 className="title">Post ID: {report.service_request_id}</h1>
                <h3 style={{ marginBottom: '24px' }}>{new Date(report.requested_datetime).toDateString()}</h3>
              </div>
              <h3><span className="subtitle">Address: </span>{report.address}</h3>
              <h3><span className="subtitle">Category: </span>{report.service_name}</h3>
              <h3><span className="subtitle">Status: </span>{report.status}</h3>
              <h3><span className="subtitle">Description: </span>{report.description}</h3>
            </div>
          ))}
        </div>
        <Link to="/" style={{ fontSize: '1.2rem' }}>Return to Home</Link>
      </div>
    );
  }
  return (
    <div className="page-container" style={{ alignItems: 'center' }}>
      <div
        className="box"
        style={{
          marginTop: '25vh', height: '10rem', width: '60vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
      >
        <h1 className="title">No Results</h1>
        <Link to="/" style={{ fontSize: '1.2rem' }}>Return to Home</Link>
      </div>
    </div>
  );
};

export default Results;
