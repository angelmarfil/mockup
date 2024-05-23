/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Press Start 2P"', 'sans-serif']
			}
		},
	},
  daisyui: {
    themes: [{
      light: {
        // eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
        ...require("daisyui/src/theming/themes")["light"],
        "primary": "#9415CF"
      }
    },
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",]
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

