import React from 'react';
import SearchForm from './searchForm';

const Home = (props) => {
  const { history } = props;

  return (
    <div className="home">
      <div style={{
        height: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
        <h1 className="title" style={{ fontSize: '3rem', fontWeight: 250 }}>What&apos;s Happenning Near You?</h1>
        <SearchForm history={history} />
      </div>
    </div>
  );
};

export default Home;
