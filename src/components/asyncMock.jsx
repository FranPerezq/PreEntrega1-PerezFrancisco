const products = [
    {
        id: '1',
        name: 'Dorada pampeana',
        price: '500',
        category: 'cerveza',
        img: 'https:imagen',
        stock: 20,
        description : 'Descripcion de cerveza'
    },
    {id: '2',
        name: 'Irish red',
        price: '600',
        category: 'cerveza',
        img: 'https:imagen',
        stock: 20,
        description : 'Descripcion de cerveza'},
    {id: '3',
        name: 'Stout',
        price: '700',
        category: 'cerveza',
        img: 'https:imagen',
        stock: 20,
        description : 'Descripcion de cerveza'},]

        export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 500)
        }
        )}

        export const getProductById = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(products.find(prod => prod.id === productId))
                }, 500)
            }
            )}