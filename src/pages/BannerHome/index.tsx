import { BannerContainer, BannerContent, BannerInfor } from "./styles";

import cupOfCoffeeBannerHome from "../../assets/cup_of_coffee_banner_home.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function BannerHome() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerInfor>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <ul>
            <li>
              <ShoppingCart
                size={16}
                weight="fill"
                className="icon iconShoppingCart"
              />
              Compra simples e segura
            </li>
            <li>
              <Package size={16} weight="fill" className="icon iconPackage" />
              Embalagem mantém o café intacto
            </li>
            <li>
              <Timer size={12} weight="fill" className="icon iconTimer" />
              Entrega rápida e rastreada
            </li>
            <li>
              <Coffee size={12} weight="fill" className="icon iconCoffee" /> O
              café chega fresquinho até você
            </li>
          </ul>
        </BannerInfor>

        <img src={cupOfCoffeeBannerHome} alt="" />
      </BannerContent>
    </BannerContainer>
  );
}
