import styled from "styled-components";

import backgroundBannerHome from "../../../assets/background_banner_home.svg";

export const BannerContainer = styled.div`
  display: flex;

  background-image: url(${backgroundBannerHome});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerContent = styled.div`
  display: flex;
  margin: auto;
  padding: 7rem 0;
  max-width: 74rem;
`;

export const BannerInfor = styled.div`
  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme["gray-800"]};
    line-height: 130%;

    margin-bottom: 1rem;
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};

    display: block;
    margin-bottom: 4rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.4rem;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 50%;

      color: ${(props) => props.theme["gray-600"]};
    }

    .icon {
      padding: 8px;

      width: 32px;
      height: 32px;
      border-radius: 100%;

      color: ${(props) => props.theme["white"]};
    }

    .iconTimer {
      background: ${(props) => props.theme["yellow-500"]};
    }
    .iconShoppingCart {
      background: ${(props) => props.theme["yellow-700"]};
    }
    .iconPackage {
      background: ${(props) => props.theme["gray-600"]};
    }
    .iconCoffee {
      background: ${(props) => props.theme["purple-500"]};
    }
  }
`;
