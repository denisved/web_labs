import React, {useState, useEffect} from 'react'
import { useParams } from "react-router";
import { Card } from '../../components';
import { ItemSec } from '../ItemPage/ItemPage.elements';
import { getCars } from '../../api';

const CarDetails = () => {
    const [items, setObj] = useState();
    useEffect( () => {
        getCars().then(receivedCars => {setObj(receivedCars)})
      })
    const { id } = useParams();
    const ident = JSON.stringify(id);
    const newObj = items.filter(car => JSON.stringify(car.id) === ident);
    return (
        <>
            <ItemSec>
                <Card cars={newObj} />
            </ItemSec>
        </>
    )
}

export default CarDetails

