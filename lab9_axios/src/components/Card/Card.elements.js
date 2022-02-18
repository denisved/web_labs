import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const CardCont = styled.div`
    background: #242424;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
    width: 300px;
    height: 550px;
    text-decoration: none;
    border-radius: 4px;
    &:nth-child(n) {
        margin: 24px;
    }
    &:hover {
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
    }
    @media screen and (max-width: 960px) {
        width: 90%;
        &:hover {
        transform: none;
        }
    }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  margin-top: 40px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const PricingCardImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 250px;
  vertical-align: middle;
  display: inline-block;
  max-height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;