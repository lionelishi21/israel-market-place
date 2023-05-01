import { defineStore } from 'pinia';


export const useUserStore = defineStore('useUserStore', {

    state: () => ({
        user: {}
    }),

    getters: {
        listUserInformation: (state) => state.user
    },

    actions: {
       
        async loginUser (params: any) {

            return new Promise(async (resolve, reject) => {
                
                console.log('....logging user in');
                console.log(params)
                const { data } = await useFetch('/api/user', {
                    method: 'POST',
                    body:  params
                })

                console.log( data)
                resolve(data)
            })
        },

        async registerUser(params: any) {

            return new Promise ( async(resolve, reject) => {
                
                console.log('... registering user')

                const { data } = await useFetch('/api/users/signup', {
                    method: 'POST',
                    body:  params
                })

                console.log(data)

                resolve(data)
            })
        },

        async fetchUser () {
            console.log('... fetch unorthorize user')
            const { data } = await useFetch('/api/user')
            console.log(data)
            this.user = data
        }
    }
})
