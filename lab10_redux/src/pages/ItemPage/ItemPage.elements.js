import styled from 'styled-components';

export const ItemSec = styled.div`
    padding: 100px 0 160px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background: #4b59f7;
`

export const FilterSec = styled.div`
    background: #4b59f7;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FilterContainer = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    outline: 2px solid #000;
    border-radius: 10px;
    background: #101522;
`;

export const SelectContainer = styled.div`
    width: 600px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 60px;  
`;

export const ButtonContainer = styled.div`
    margin-right: 76px;
`;

export const OneCont = styled.div`
    width: 210px;
    
`

export const Input = styled.input`
    border-radius: 10px;
    margin-left: 60px;
    margin-top: 25px;
    margin-bottom: 25px;
    height: 37px;
    width: 200px;
`

export const ShowButton = styled.button`
    margin-top: 35px;
    border-radius: 4px;
    background: #101522;
    white-space: nowrap;
    padding: 12px 64px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        color: #101522;
        background-color: #fff;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`
