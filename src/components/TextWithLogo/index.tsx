import"./style.css"
import { Logo } from "../Logo"
import { Button } from '../Buttons'

export const TextWithLogo = () => {
    return(
    <div className="textWithLogo">
        

        <Logo className = {"logo-text-with-logo"}></Logo>
        <div className = "textWithButton">
        <h4>Lorem ipsum dolor sit amet.</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, voluptate asperiores temporibus dicta perferendis consectetur neque deserunt odit optio quas, laudantium quisquam ut explicabo iusto eum omnis autem expedita, sunt ad! Nesciunt, optio veritatis eveniet ratione explicabo cupiditate adipisci, id dignissimos quas deleniti a. Quibusdam sint tempora architecto officia iure exercitationem atque soluta veniam, quos vitae eius eligendi, consequuntur esse dolor aliquam, perspiciatis quod voluptate ut ab. Consequatur necessitatibus autem totam voluptates ipsum eveniet unde animi provident, quod, exercitationem facere est, fugiat vero dignissimos tempora. Cumque et nemo, quae nihil ipsam hic. Quibusdam corporis explicabo amet veniam laboriosam deserunt laudantium?</p>
        <Button></Button>
        </div>

    </div>)
}