// retiramos los datos del js, para colocarlosa en un JSON
export const ItemList = () => 
    new Promise((resolve, reject)=> 
        setTimeout(()=> resolve(require('./ItemList.json')), 1000))