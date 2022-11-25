const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundImage:{
        'heroFit': "url('/src/assets/FitFinderBG.jpg')"
      }
    },
  },

  plugins: [],
};

module.exports = config;
