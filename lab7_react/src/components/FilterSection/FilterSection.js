import React, { Component } from 'react'
import Select from 'react-select'
import { FilterSec, FilterContainer, SelectContainer, ButtonContainer } from './FilterSection.elements'
import { Button } from '../../globalStyles'

const BrandOptions = [
    { value: 'bmw', label: 'BMW' },
    { value: 'mercedes', label: 'Mercedes' },
    { value: 'audi', label: 'Audi' }
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
const FilterSection = () => {
    return (
        <FilterSec>
            <FilterContainer>
                <SelectContainer>
                <Select options={BrandOptions} placeholder = "Select Car Brand" />
                <Select options={YearOptions} placeholder = "Select Year Production" />
                <Select options={PriceOptions} placeholder = "Select Min Price" />
                </SelectContainer>
                <ButtonContainer>
                <Button primary big fontBig>Apply</Button>
                </ButtonContainer>
            </FilterContainer>
        </FilterSec>
    )
}

export default FilterSection
