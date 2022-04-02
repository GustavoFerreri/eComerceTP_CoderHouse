// retiramos los datos del js, para colocarlosa en un JSON
export const ItemList = () => 
    new Promise((resolve, reject)=> 
        setTimeout(()=> resolve(require('./ItemList.json')), 1000))

export const SimpleItem = (cod) => 
        new Promise((resolve, reject)=> 
            setTimeout(()=> resolve(require('./ItemList.json').find(prod=>prod.cod===parseInt(cod))), 1000))