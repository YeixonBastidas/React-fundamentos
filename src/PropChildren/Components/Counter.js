import React, { useState } from 'react';


export const Counter = ({children}) => {
const [ clicks, setClicks] = useState(0);

    const increment = () => setClicks(clicks + 1);
    const decrement = () => setClicks(clicks - 1);

    if(!children) {
        const styles = {
            background : '#CC6040',
            borderRadius: '0.2em',
            padding: '0.3em 1em',
            color: '#FFF'
        }
        return(
            <div style={styles}>
                Wops!! Debes de pasar componentes como {'<Button />'}
            </div>
        )
    }

    const _componetChildren = React.Children.map(children, (child) => {

        const porps = {};
        if(child.type === Title) {
            porps.clicks = clicks
        }

        if(child.type === Button) {
            porps.onIncrement = increment
            porps.onDecrement = decrement
        }

        return React.cloneElement(child, porps)
    })

    return _componetChildren
}

export const Title = ({ clicks, children }) => {
     return typeof children === 'function'
          ? children(clicks)
          :  <span>{ clicks }</span>
}

export const Button = ({ type, onIncrement, onDecrement }) => {
    const action = () => {
        type === 'increment' ? onIncrement() : onDecrement();
    }

    return (
        <button onClick={action}>
            { type === 'increment' ? 'Agregar' : 'Quitar'}
        </button>
    )
}