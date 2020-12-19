import { 
    getProducts,
    getProductById,
    insertProduct,
    upateProdctById,
    deleteProduct
} from '../models/productModel.js';


// Get all product 
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err) {
            res.send(err);            
        }else{
            res.json(results);
        }
    });
}

// Get single product  
export const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create new Product    
export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
       if (err) {
          res.send(err);
       }else{
           res.json(results);
       }
    });
}

// update Product    
export const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    upateProdctById(data, id, (err, results) => {
       if (err) {
          res.send(err);
       }else{
           res.json(results);
       }
    });
}

// Delete Product    
export const destroyProduct = (req, res) => {
    const id = req.params.id;
    deleteProduct(id, (err, results) => {
       if (err) {
           res.send(err);
       }else{
           res.json(results);
       }
    });
}