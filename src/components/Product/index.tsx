import"./style.css"

export const Product= (props: {name:string, brand:string, price:number}) => {
    return(
    <div className="product">
        {props.name} {props.brand} {props.price} zł


    </div>)
}