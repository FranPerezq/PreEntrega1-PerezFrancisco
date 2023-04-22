import { useState , useEffect  } from  'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../asyncMock.jsx'
import {ItemDetail} from '../ItemDetail/ItemDetail.jsx'

const   ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {ItemId } = useParams()

    useEffect(() => {
        getProductById(ItemId)
            .then(Response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[])

    return(
        <div classname='ItemDetailContainer'>
            <ItemDetail{...product} />
        </div>
    )
}

export {ItemDetailContainer};