import { Navigations }from "../components/Navigation"
import { Banner } from '../components/Banner';
import { TextWithImage } from '../components/TextWithImage';
import { BrandInformations } from '../components/BrandInformations';

function HomePage() {
  return (
    <div>
      <Navigations></Navigations>
      <Banner></Banner>
      <TextWithImage></TextWithImage>
      <BrandInformations></BrandInformations>
      
  
    </div>
  );
}

export { HomePage };