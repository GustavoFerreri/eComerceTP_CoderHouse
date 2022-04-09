// Trasladamos las consultas a los datos fuera de itemListConteiner

export const ItemList = (category) => 
        new Promise((resolve, reject)=> 
        setTimeout(()=>{
                // Se realiza una segunda condicion para categoria todos, colateral se elimina una linea en app
                category && category !== 'all' ? resolve(require('./ItemList.json').filter(prod=>prod.category===category)):
                resolve(require('./ItemList.json'))
        }, 500))

export const SimpleItem = (cod) => 
        new Promise((resolve, reject)=> 
                setTimeout(()=> resolve(require('./ItemList.json').find(prod=>prod.cod===parseInt(cod))), 500))