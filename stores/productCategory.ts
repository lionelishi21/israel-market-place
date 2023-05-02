import { defineStore } from 'pinia';

interface ICategoryState {
    categories: any
}

export const useProductCategoryStore = defineStore('useProductCategoryStore', {

    state: (): ICategoryState => ({
        categories: {}
    }),

    getters: {
        listProductCategories: (state) => state.categories
    },

    actions: {
        async fetchProductCategories () {
            return new Promise(async (resolve, reject) => {
                console.log('....Fetching production categories');
                await useFetch('/api/categories').then( res => {
                    console.log(res.data);
                    this.categories = res.data
                    resolve(res.data)
                })
                .catch( err => {
                    console.log(err.response);
                })
            })
        }
    }
})

// TODO: Add this later
interface CategoryInfromation {

}