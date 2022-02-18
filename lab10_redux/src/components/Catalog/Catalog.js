import React, { useState } from 'react';
import { Button } from '../../globalStyles';
import { SiBmw, SiMercedes, SiAudi } from 'react-icons/si';

import { Container } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  ButtonCatalog,
  ExtraContent
} from './Catalog.elements';

function Pricing() {
  const [readMore, setReadMore] = useState(false);
  const extraContent=<Container>
      <ExtraContent>
        In out catalog you can find any cars you want! You can also filter cars by brands, price or year of the production. 
      </ExtraContent>
  </Container>
  const linkName=readMore?'Read Less':'Read More'
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Catalog</PricingHeading> 
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiBmw />
                </PricingCardIcon>
                <PricingCardPlan>BMW</PricingCardPlan>
                <PricingCardCost>$10 000</PricingCardCost>
                <PricingCardLength>the lowest price</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Innovation</PricingCardFeature>
                  <PricingCardFeature>Reliability</PricingCardFeature>
                  <PricingCardFeature>Low Depreciation</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Brand</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiMercedes />
                </PricingCardIcon>
                <PricingCardPlan>Mercedes</PricingCardPlan>
                <PricingCardCost>$15 000</PricingCardCost>
                <PricingCardLength>the lowest price</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Extensive range of vehicles</PricingCardFeature>
                  <PricingCardFeature>Class leading safety</PricingCardFeature>
                  <PricingCardFeature>Expertise and flexibility</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Brand</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiAudi />
                </PricingCardIcon>
                <PricingCardPlan>AUDI</PricingCardPlan>
                <PricingCardCost>$7 500</PricingCardCost>
                <PricingCardLength>the lowest price</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Exists since 1909</PricingCardFeature>
                  <PricingCardFeature>Fuel Economy</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Brand</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
          <ButtonCatalog onClick={()=>{setReadMore(!readMore)}}>{linkName}</ButtonCatalog>
          {readMore && extraContent}
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;