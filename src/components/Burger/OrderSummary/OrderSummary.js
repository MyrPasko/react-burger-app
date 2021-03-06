import React, {Component} from 'react';
import Aux from '../../../hoc/Auxx';
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

    /** This could be a functional component, doesn't have to be a class */

    componentWillUpdate() {
        // console.log('[OrderSummary] WillUpdate' );
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((igKey) => {
                return <li key={igKey}><span
                    style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
            });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to checkout?</p>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <Button clicked={this.props.purchaseCanceled} btnType={'Danger'}>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType={'Success'}>CONTINUE</Button>
            </Aux>
        );

    }
}

export default OrderSummary;