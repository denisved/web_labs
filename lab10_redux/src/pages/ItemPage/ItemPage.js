import React, {useState} from 'react';
import { Card } from '../../components'
import { ItemSec } from './ItemPage.elements'
import Select from 'react-select'
import { FilterSec, FilterContainer, SelectContainer, ButtonContainer, Input, ShowButton } from './ItemPage.elements'
import { Button } from '../../globalStyles'
import { getCars, getFilteredCar } from '../../api';
import { Spinner } from '../../components/Spinner/Spinner.elements';
import { connect } from 'react-redux';

function ItemPage( {products} ) {
    const BrandOptions = [
      { value: 'BMW', label: 'BMW' },
      { value: 'Mercedes', label: 'Mercedes' },
      { value: 'Audi', label: 'Audi' }
    ]
    
    const YearOptions = [
        { value: '2019', label: '2019' },
        { value: '2020', label: '2020' },
        { value: '2021', label: '2021' }
      ]
    
    const PriceOptions = [
        { value: '10000', label: '$10000 ' },
        { value: '15000', label: '$15000' },
        { value: '20000', label: '$20000' }
      ] 
    
    const [items, setObj] = useState(products);
    const [searchedBrand, setSearchedBrand] = useState();
    const [selectedBrand, setSelectedBrand] = useState();
    const [selectedYear, setSelectedYear] = useState();
    const [selectedPrice, setSelectedPrice] = useState();

    const selectedPriceString = "$" + selectedPrice 

    const handleChangeBrand = e => {
      setSelectedBrand(e.value);
    }

    const handleChangeYear = e => {
      setSelectedYear(e.value);
    }

    const handleChangePrice = e => {
      setSelectedPrice(e.value);
    }

    const filterCards = () => {
      getFilteredCar(selectedBrand, selectedYear, selectedPriceString).then(receivedCars => {setObj(receivedCars)})
      console.log(selectedBrand);
    }    
    

    const filterInput = () => {  
      const newObj = items.filter(car => car.brand === searchedBrand);
      setObj(newObj);
    }
    
  return (  
    <>
       <FilterSec>
            <FilterContainer>
              <Input type="text" placeholder="Search brand..." onChange={event => { setSearchedBrand(event.target.value) }} />
              <ButtonContainer>
              <Button onClick={filterInput} primary big fontBig>Apply</Button>
              </ButtonContainer>
            </FilterContainer>
            <FilterContainer>
                <SelectContainer>
                <Select options={BrandOptions} placeholder = "Select Car Brand" value={BrandOptions.filter(obj => obj.value === selectedBrand)} onChange={handleChangeBrand} />
                <Select options={YearOptions} placeholder = "Select Year Production" value={YearOptions.filter(obj => obj.value === selectedYear)} onChange={handleChangeYear} />
                <Select options={PriceOptions} placeholder = "Select Min Price" value={PriceOptions.filter(obj => obj.value === selectedPrice)} onChange={handleChangePrice} />
                </SelectContainer>
                <ButtonContainer>
                <Button onClick={filterCards} primary big fontBig>Apply</Button>
                </ButtonContainer>
            </FilterContainer>
        </FilterSec>
      <ItemSec>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
      </ItemSec>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products
  }
}

export default connect(mapStateToProps)(ItemPage);