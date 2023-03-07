/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'mb-white' : "#FFFFFF",
        'mb-black' : "#000000",
        'mb-gray' : "#6A6A6A",
        'mb-liberty-700' : "#4755A8",
        'mb-liberty-500' : "#7281D3",
        'mb-liberty-100' : "#D1D8F7",
        'mb-highlight-500' : '#E0E0E0',
        'mb-highlight-100' : '#F5F5F5',

      },
      // fontFamily : {
      //   havleticNeue : 'Havletic Neue, sans sarif'
      // }
    },
    screens: {
			xl: { max: "1279px" },
			lg: { max: "1023px" },
			md: { max: "767px" },
			sm: { max: "639px" },
		},
  },
  plugins: [],
}
