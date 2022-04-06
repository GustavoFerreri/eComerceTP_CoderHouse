// retiramos los datos del js, para colocarlosa en un JSON

export const ItemList = (category) => 
    new Promise((resolve, reject)=> 
        setTimeout(()=>{
            category ? resolve(require('./ItemList.json').filter(prod=>prod.category===category)):
            resolve(require('./ItemList.json'))
        }, 1000))

export const SimpleItem = (cod) => 
        new Promise((resolve, reject)=> 
            setTimeout(()=> resolve(require('./ItemList.json').find(prod=>prod.cod===parseInt(cod))), 1000))