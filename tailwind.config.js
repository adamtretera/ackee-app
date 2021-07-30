module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			transformOrigin: {
				0: "0%",
			},
			zIndex: {
				"-1": "-1",
			},
		},
		colors: {
			transparent: "transparent",
			blue: "#0000FF",
			purple: "#FF00FF",
			black: "#000",
			text: "#554D44",
			shadow: "#F6F6F6",
			light: "#9E9E9E",
			line: "#E0E0E0",
			white: "#ffffff",
		},
		variants: {
			borderColor: ["responsive", "hover", "focus", "focus-within"],
		},

		plugins: [],
	},
};
