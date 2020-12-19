// import connection
import db from  '../config/database.js';

// get all product
export const getProducts = (result) => {
    db.query("SELECT * FROM product", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}

// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM product WHERE product_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert product to database 
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {
        if (err) {
            console.log(err, null);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}

// update product to database 
export const upateProdctById = (data, id, result) => {
    qb.query("UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        }else{
            result(null, results);
        }
    });
}

// Delete product from dadtabase
export const deleteProduct = (id, result) => {
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}