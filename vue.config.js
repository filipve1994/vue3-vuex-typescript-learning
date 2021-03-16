// https://stackoverflow.com/questions/53589853/vue-cli-3-hot-reload-suddenly-not-working-in-browsers
module.exports = {
  devServer: {
    host: "localhost",
    overlay: {
      warnings: false,
      errors: false
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
};
