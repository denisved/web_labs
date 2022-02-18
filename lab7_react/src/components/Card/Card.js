import React from 'react'
import { Button } from '../../globalStyles'
import { CardCont, PricingCardInfo, PricingCardLength, PricingCardCost, PricingCardPlan, PricingCardFeatures, PricingCardFeature, PricingCardImg } from './Card.elements'

const Card = ({model, price, brand, year, maxSpeed, fuelConsumption, img, alt}) => {
    return (
        <CardCont>
           <PricingCardInfo>
                <PricingCardImg src={img} alt={alt} />
                <PricingCardPlan>{model}</PricingCardPlan>
                <PricingCardCost>{price}</PricingCardCost>
                <PricingCardLength>{brand}</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>{year}</PricingCardFeature>
                  <PricingCardFeature>{maxSpeed}</PricingCardFeature>
                  <PricingCardFeature>{fuelConsumption}</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary big bigFont>View more</Button>
              </PricingCardInfo>
        </CardCont>
    )
}

export default Card
