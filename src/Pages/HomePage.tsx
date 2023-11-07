import { Navigations }from "../components/Navigation"
import { Banner } from '../components/Banner';
import { TextWithImage } from '../components/TextWithImage';
import { BrandInformations } from '../components/BrandInformations';
import { TextWithLogo } from '../components/TextWithLogo';
import { SocialSection } from "../components/SocialSection";

function HomePage() {
  return (
    <div>
      <Navigations></Navigations>
      <Banner></Banner>
      <TextWithImage></TextWithImage>
      <BrandInformations></BrandInformations>
      <TextWithLogo></TextWithLogo>
      <SocialSection></SocialSection>
  
    </div>
  );
}

export { HomePage };