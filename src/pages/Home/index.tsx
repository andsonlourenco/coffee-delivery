import { Banner } from "./Banner";
import { HomeContent, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <HomeContent>Home</HomeContent>
    </HomeContainer>
  );
}
