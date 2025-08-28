import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
        <div>
            <PiShoppingCartSimpleFill fontSize={"2rem"}/>
                  <Badge bg="info">3</Badge>
        </div>
    );
}

export default CartWidget