// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'My Projects',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        }
    }, modules: [
        "@vueuse/nuxt",
        [
            "@pinia/nuxt",
            {
                autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
            },
        ],
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_colors.sass" as *;'
                }
            },

        }
    },
    typescript: {
        shim: false,
        // typeCheck: true,
    },

})
