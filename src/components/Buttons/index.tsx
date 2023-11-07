import"./style.css"
export const Button = (props: {className?:string}) => {
    return(
    <button className={ props.className?props.className:"button" }>Zobacz nasze rakiety</button>
       
    )}