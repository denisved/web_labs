import React from 'react';
import { FilterSection, Card } from '../../components'
import { ItemSec} from './ItemPage.elements'
import { objects } from './Data'

function ItemPage() {
  return (
    <>
      <FilterSection />
      <ItemSec>
          <Card cars={objects} /> 
      </ItemSec>
    </>
  );
}

export default ItemPage;
