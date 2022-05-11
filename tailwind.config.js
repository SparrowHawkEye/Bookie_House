module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
     /*  keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
      }, */
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
