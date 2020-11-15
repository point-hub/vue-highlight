module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./demo/*.vue"]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
