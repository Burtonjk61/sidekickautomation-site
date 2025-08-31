module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { brand:{teal:"#00C6AE", blue:"#1E90FF", yellow:"#FFD54F", charcoal:"#1A1A1A"} },
      boxShadow: { glow: "0 0 40px rgba(30,144,255,0.3)" },
      borderRadius: { '2xl':'1rem' }
    }
  },
  plugins: []
};
