const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      backgroundImage:{
        'heroFit': "url('/src/assets/gym-victor-freitas.jpg')"
      }
    },
  },

  plugins: [],
};

module.exports = config;
