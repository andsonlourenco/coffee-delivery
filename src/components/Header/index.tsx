import { HeaderContainer, Location, MiniCart, HeaderActions } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";

import CoffeDeliveryLgo from "../../assets/coffee_delivery_logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeDeliveryLgo} alt="" />
      <HeaderActions>
        <Location>
          {" "}
          <MapPin size={25} weight="fill" /> São Paulo, SP
        </Location>
        <MiniCart>
          <ShoppingCart size={25} weight="fill" />
        </MiniCart>
      </HeaderActions>
    </HeaderContainer>
  );
}
