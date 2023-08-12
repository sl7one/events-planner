import styled from "styled-components";
import bgImage from './BG.png'

export const MainBg = styled.div`
  width: 100%;
  height: calc(100vh - 92px);
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0px auto;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 80px;
  }
`;

export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BarTitle = styled.h2`
  color: var(--main-black);
  font-size: 32px;
  font-weight: 600;
`;

export const SelectItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const CardsWrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 24px;
  row-gap: 24px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 40px;
  }
`;
