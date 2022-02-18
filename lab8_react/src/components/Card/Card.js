import React from 'react'
import { Button } from '../../globalStyles'
import { CardCont, PricingCardInfo, PricingCardLength, PricingCardCost, PricingCardPlan, PricingCardFeatures, PricingCardFeature, PricingCardImg, Wrapper } from './Card.elements'

const Card = ({ cars }) => {
    const cardsArray = cars.map(car => (
    <CardCont>
      <PricingCardInfo>
           <PricingCardImg src={car.img} alt={car.alt} />
           <PricingCardPlan>{car.model}</PricingCardPlan>
           <PricingCardCost>{car.price}</PricingCardCost>
           <PricingCardLength>{car.brand}</PricingCardLength>
           <PricingCardFeatures>
             <PricingCardFeature>{car.year}</PricingCardFeature>
             <PricingCardFeature>{car.maxSpeed}</PricingCardFeature>
             <PricingCardFeature>{car.fuelConsumption}</PricingCardFeature>
           </PricingCardFeatures>
           <Button primary big bigFont>View more</Button>
         </PricingCardInfo>;
   </CardCont>));
    return (
        <Wrapper>
          {cardsArray}
        </Wrapper>
    )
}

export default Card
