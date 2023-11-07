import {Navigations} from '../components/Navigation'
import {Banner} from '../components/Banner'
import { products } from '../Data'
import { Product } from '../components/Product'
export const ProductPage = () => {
    return(
    <div>
        <Navigations></Navigations>
        <Banner></Banner>  
        {/*     metoda map która pozwala każdy element listy wyświetlić osobno     */}
        <div>
      {products.map(product => (
        <>
            <Product name={product.name} brand={product.brand} price={product.price}></Product>  
        </>
      ))}
    </div>
                
    </div>)
}
