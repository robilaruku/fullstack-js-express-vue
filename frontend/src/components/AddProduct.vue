<template>
    <div>
        <div class="field">
            <label class="label">Product Name</label>
            <input type="text" class="input" placeholder="Prodcut Name" v-model="productName">
        </div>
        <div class="field">
            <label class="label">Price</label>
            <input type="text" class="input" placeholder="Price" v-model="productPrice">
        </div>
        <div class="control">
            <button class="button is-success" @click="saveProduct">SAVE</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name : "AddProduct",
    data(){
        return{
          productName: '',  
          productPrice: '',  
        };
    },
    methods: {
        async saveProduct(){
            try {
                await axios.post('http://localhost:5000/products', {
                    product_name : this.productName,
                    product_price : this.productPrice,
                });
                this.productName = '';
                this.productPrice = '';
                this.$router.push('/');
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
