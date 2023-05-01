// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    runtimeConfig: {
        mongoUrl: process.env.MONGO_URL,
    },
    
  
     // more  
     css: [
        // SCSS file in the project
        // "~/assets/vendor/fontawesome-free/css/all.min.css", // you should add main.scss somewhere in your app
        // "~/assets/vendor/simple-line-icons/css/simple-line-icons.min.css", // you should add main.scss somewhere in your app
    ],

    nitro: {
      plugins: ["~/server/index.ts"],
    },

    
    modules: [
        '@pinia/nuxt',
    ],

})
