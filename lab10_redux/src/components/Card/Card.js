import React from 'react'
import { Button } from '../../globalStyles'

import { CardCont, PricingCardInfo, PricingCardLength, PricingCardCost, PricingCardPlan, PricingCardFeatures, PricingCardFeature, PricingCardImg, Wrapper, BtnLink } from './Card.elements'

import { connect } from 'react-redux'
import { addToCart } from '../../redux/Shopping/shopping-actions'

const Card = ({ product, addToCart }) => {
    return (
        <Wrapper>
          <CardCont>
        <PricingCardInfo>
            <PricingCardImg src={require('../../images/bmw-m4.jpg')} />
            <PricingCardPlan>{product.model}</PricingCardPlan>
            <PricingCardCost>{product.price}</PricingCardCost>
            <PricingCardLength>{product.brand}</PricingCardLength>
            <PricingCardFeatures>
              <PricingCardFeature>{product.year}</PricingCardFeature>
              <PricingCardFeature>{product.maxSpeed}</PricingCardFeature>
              <PricingCardFeature>{product.fuelConsumption}</PricingCardFeature>
            </PricingCardFeatures>
            <BtnLink to={`/cars/${product.id}`}>
            <Button primary big bigFont>View more</Button>
            </BtnLink>
            <Button onClick={() => {addToCart(product.id)}}primary big bigFont>Add to cart</Button>
          </PricingCardInfo>;
    </CardCont>
        </Wrapper>
    )
}

const mapDispatchToProps =  dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(null, mapDispatchToProps)(Card);
