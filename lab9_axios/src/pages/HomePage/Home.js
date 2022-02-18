import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { InfoSection, Catalog } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Catalog />
    </>
  );
}

export default Home;
