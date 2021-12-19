module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/_normalize.scss";
          @import "~@/assets/scss/_global.scss";
        `,
      },
    },
  },
};
