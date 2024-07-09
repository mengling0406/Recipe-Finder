/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


//content: [ "./src/**/*.{js,jsx,ts,tsx}" ],:
//content: Specifies the paths to the files that Tailwind CSS should scan for classes. 
//In this case, it's looking for JavaScript (js, jsx), and TypeScript (ts, tsx) files 
//within the src directory and all its subdirectories.
//These files are scanned to generate the final CSS file with only the styles used in 
//your project, optimizing the build and reducing the file size.