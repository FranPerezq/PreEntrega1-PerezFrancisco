import { useState } from "react"

export const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const sum = ()  => {if(contador<stock ) {setContador(contador + 1)}}
    
        const res = ()  => {if(contador>1) {setContador(contador - 1)}}

    return (
        <div classname='Counter'>
            <div classname= 'Controls'>
            <button classname= "Button" onClick={()=> res()}>-</button>
            <h4>{contador}</h4>
                {contador}
            <button classname= "Button" onClick={()=> sum()}>+</button>
        </div>
        <div>
            <button classname= "Button" Onclick={() => onAdd(contador)} disabled = {!stock}> </button>
        </div>
        </div>
    );
}

