module.exports = {
  content: ["./index.html"],
  theme: {
      extend: {
        boxShadow: {
          'inner-deep': 'inset 2px 2px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3)',
          'outer': '2px 2px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3)'
        },
        :{
          'h-11/12': 'height: 91.666667%',
        },
      },
    plugins: [],
  }
}
