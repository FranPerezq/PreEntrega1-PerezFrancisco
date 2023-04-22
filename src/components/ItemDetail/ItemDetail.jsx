import {ItemCount} from '../ItemCount/ItemCount.jsx'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article classname="CardItem">
            <header classname="Header">
                <h2 classname="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} classname="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>

            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(contador) => console.log('Cantidad agregada')}/>
            </footer>

        </article>
    )

        }

export {ItemDetail};