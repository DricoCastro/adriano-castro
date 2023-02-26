import { COLORS } from "@/colors/colors";
import styled from "styled-components"

export const MeSectionHolder = styled.div`
    width:100%;
    background-color:${COLORS.blackPearl};
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
     padding-top: clamp(0.8rem, 1vw, 1.26rem); 
    padding-left: clamp(1rem, 10.42vw, 12.5rem);
    padding-right: clamp(1rem, 10.42vw, 12.5rem);
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media (max-width: 1100px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const InfosHolder = styled.div`
    width:50%;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:column;
    @media (max-width: 1100px) {
  }
`;

export const SaudationText = styled.a`
    font-size:30px;
    font-weight:500;
    color:${COLORS.white};
    @media (max-width: 1100px) {
  }
`;

export const ProfileNameText = styled.a`
    font-size:70px;
    font-weight:700;
    color:${COLORS.white};
    margin-top:10px;
    @media (max-width: 1100px) {
  }
`;

export const ProfessionText = styled.a`
    font-size:30px;
    font-weight:700;
    color:${COLORS.white};
    margin-top:10px;
    @media (max-width: 1100px) {
  }
`;

export const DescriptionProfile = styled.a`
    font-size:16px;
    font-weight:500;
    color:${COLORS.white};
    margin-top:40px;
    text-align:justify;
    @media (max-width: 1100px) {
  }
`;

export const HolderImageProfile  = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width: 1100px) {
  }
`;