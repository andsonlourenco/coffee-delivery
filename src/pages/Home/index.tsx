import { BannerHome } from "../BannerHome";
import { HomeContent, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <BannerHome />
      <HomeContent>Home</HomeContent>
    </HomeContainer>
  );
}
