import React from 'react';
import { FilterSection, Card } from '../../components'
import { Container } from '../../globalStyles'
import { ItemSec, Wrapper } from './ItemPage.elements'
import { CarOne } from './Data'

function ItemPage() {
  return (
    <>
      <FilterSection />
      <ItemSec>
            <Container>
                <Wrapper>
                    <Card {...CarOne} />
                    <Card {...CarOne} />
                    <Card {...CarOne} />
                    <Card {...CarOne} />
                </Wrapper>
            </Container>
        </ItemSec>
    </>
  );
}

export default ItemPage;
