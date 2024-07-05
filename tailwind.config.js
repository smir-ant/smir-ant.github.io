/*  // после установки tailwind, у меня standalone если что (https://tailwindcss.com/blog/standalone-cli)
./tailwindcss -i css/input.css -o css/output.css --watch
./tailwindcss -i css/input.css -o css/output.css --minify 
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["*.html", "html/*.html", "*.js"],
  },
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#F1F1F1',
          800: '#202020'
        },
        blue: {
          500: '#498efe'
        }
      }
    },
  },
  plugins: [],
  safelist: [],  // чтобы PurgeCSS не сносил селектор как неиспользуемый (например, если элементы будут построены через js извне)
}