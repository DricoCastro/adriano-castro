import { COLORS } from '@/colors/colors';
import styled from "styled-components"


export const HomeHeaderHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: clamp(0.8rem, 10vw, 1.26rem);
    padding-bottom: clamp(0.8rem, 10vw, 1.26rem);
    padding-left: clamp(1rem, 10.42vw, 12.5rem);
    padding-right: clamp(1rem, 10.42vw, 12.5rem);
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color:${COLORS.white};
    background-color:${COLORS.blackPearl};
    @media (max-width: 1100px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:100%;
`;

export const HolderLogoHeader = styled.div`
  width:20%;
  display:flex;
  align-items:flex-start;
  @media (max-width: 1250px) {
    width:25%;
  }
`;

export const HolderTitlesHeader = styled.div`
  width:50%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  @media (max-width: 900px) {
    display:none;
  }
`;

export const TitleContainer = styled.div`
  a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1px;
  left: 50%;
  position: absolute;
  background: ${COLORS.royalBlue};
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}
`;

export const TitlesHeader = styled.a`
  cursor:pointer;
  font-size:16px;
  font-weight:700;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  position: relative;
`;

export const HolderMenuIcon = styled.div`
display:none;
  @media (max-width: 900px) {
    display:flex;
  }
`;

export const MenuItemStyledComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: end;
  padding-left: 15px;
  padding-right: 10px;
  padding-bottom: 12px;
  padding-top: 12px;
  cursor: pointer;
`;

export const TitleMenuDrawer = styled.a`
font-size:16px;
font-weight:600;
margin-left:15px;
color:${COLORS.biscay};
`;
