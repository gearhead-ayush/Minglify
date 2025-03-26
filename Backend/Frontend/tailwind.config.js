/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"; // ✅ Use ESM import

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui], // ✅ No require()
};
