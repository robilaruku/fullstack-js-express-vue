<template>
  <div>
      <router-link :to="{ name : 'Create' }" class="mt-5 button is-success">
        Add New
      </router-link>

      <table class="table mt-2 is-striped is-bordered is-fullwidth">
          <thead>
              <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th class="has-text-centered">Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="item in items" :key="item.product_id">
                  <td>{{ item.product_name }}</td>
                  <td>{{ item.product_price }}</td>
                  <td class="has-text-centered">
                     <router-link
                        :to="{ name: 'Edit', params: { id: item.product_id } }"
                        class="button is-info is-small"
                        >Edit</router-link
                        >
                        <a
                        class="button is-danger is-small"
                        @click="deleteProduct(item.product_id)"
                        >Delete</a
                        >
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name : "ProductList",
    data(){
        return {
            items : [],
        };
    },
    
    created(){
        this.getProdcuts();
    },
    
    methods : {
      // Get All ProductList 
      async getProdcuts(){
          try {
            const response = await axios.get("http://localhost:5000/products");
            this.items = response.data;
          } catch (error) {
            console.log(error);
          }
      },

      async destroyProduct(id){
          try {
            await axios.delete(`http://localhost:5000/products/${id}`);
            this.getProdcuts();
          } catch (error) {
            console.log(error);
          }
      },
    },
};

</script>
