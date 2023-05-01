import { defineStore } from 'pinia'

interface IProductState {
   products: any,
   details: any,
   filteredProduct: any
}
  
export const useProductStore = defineStore('useProductStore', {
  
    state: (): IProductState => ({ 
        products: [],
        details: [],
        filteredProduct: []
    }),

    getters: {
      listProducts: (state) => state.products,
      listProductDetails: (state) => state.details,
      listFilterProducts: (state) => state.filteredProduct
    },

    actions: {

     async fetchProducts() {
        return new Promise((resolve, reject) => {
            console.log('...fetching user products')
            useFetch('/api/products').then(res => {
                this.products = res.data
                resolve(res.data)
            })
            .catch(err => {
                reject(err);
            })
        })
      },

    async fetchProductDetails( productId: String) {
        // return new Promise(async (resolve, reject) => {
            console.log('...fetching product details')
            await useFetch('/api/products/'+productId)
            .then( res => {
                this.details = res.data.value[0];
                // resolve(res)
            })
    },


    async fetchProduct ( filter: any ) {
        return new Promise( async (resolve, reject) => {
            console.log('Filter products')
        })
    },
    
    /**
     * This function add a single product the user shopping cart
     * @param params Product information
     * @returns Boolean
     */
    async addToShoppingCart( params: any) {
        return new Promise( async (resolve, reject) => {

            console.log('Adding product to shopping cart');
            await useFetch('/api/shopping-cart', params)
            .then( res => {
                resolve(res)
            })
        })
    },

    async filterProducts(formData: any) {
        return new Promise( async (resolve, reject) => {
          
          console.log('This Function filter user product');
           const { data } =  await useFetch('/api/products/filter', {
                query: { search: formData }
            })

            console.log(data)
           this.filteredProduct = data

           resolve(data)
        })
    }


    },
})

interface ProductInfo {
    title: string
}