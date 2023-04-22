import Item from '../Item/Item.jsx'

const ItemList = (products) => {
    return(
        <div classname= 'ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}

        </div>
    )
}
export {ItemList};