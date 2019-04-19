module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/scss/_reset.scss";`,
                data: `@import "@/assets/scss/_variables.scss";`,
                data: `@import "@/assets/scss/_mixins.scss";`
            }
        }
    }
};