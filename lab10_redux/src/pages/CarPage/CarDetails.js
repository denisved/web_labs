import React, {useState} from 'react'
import { Button } from '../../globalStyles';
import { useParams } from "react-router";
import { ItemSec } from '../ItemPage/ItemPage.elements';
import { getCar } from '../../api';
import { CardCont, PricingCardInfo, PricingCardLength, PricingCardCost, PricingCardPlan, PricingCardFeatures, PricingCardFeature, PricingCardImg, BtnLink } from '../../components/Card/Card.elements'


const CarDetails = () => {
    const [items, setObj] = useState(Array);
    const {id} =  useParams();
    getCar(id).then(receivedCars => {setObj(receivedCars)})
      

    return (
        <>
            <ItemSec>
            <CardCont>
                <PricingCardInfo>
                    <PricingCardImg src={require('../../images/bmw-m4.jpg')} />
                    <PricingCardPlan>{items.model}</PricingCardPlan>
                    <PricingCardCost>{items.price}</PricingCardCost>
                    <PricingCardLength>{items.brand}</PricingCardLength>
                    <PricingCardFeatures>
                    <PricingCardFeature>{items.year}</PricingCardFeature>
                    <PricingCardFeature>{items.maxSpeed}</PricingCardFeature>
                    <PricingCardFeature>{items.fuelConsumption}</PricingCardFeature>
                    </PricingCardFeatures>
                    <BtnLink to={`/cars/${items.id}`}>
                    <Button primary big bigFont>View more</Button>
                    </BtnLink>
                    <Button primary big bigFont>Add to cart</Button>
                </PricingCardInfo>;
            </CardCont>
            </ItemSec>
        </>
    )
}

export default CarDetails

