import React from 'react'
import { CardCont, PricingCardInfo, PricingCardLength, PricingCardCost, PricingCardPlan, PricingCardFeatures, PricingCardFeature, PricingCardImg, Wrapper, BtnLink } from './CartItem.elements'
import { Button } from '../../globalStyles'
import { connect } from 'react-redux'
import { removeFromCart } from '../../redux/Shopping/shopping-actions'

const CartItem = ({product, removeFromCart}) => {
    return (
        <Wrapper>
          <CardCont>
        <PricingCardInfo>
            <PricingCardFeature>You have added this car {product.qty} times</PricingCardFeature>
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
            <Button onClick={() => {removeFromCart(product.id)}}primary big bigFont>Delete from cart</Button>
          </PricingCardInfo>;
    </CardCont>
        </Wrapper>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);
