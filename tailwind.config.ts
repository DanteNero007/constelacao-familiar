import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#5d4201",
        "surface": "#fcf9f8",
        "tertiary": "#1c1d1b",
        "tertiary-fixed": "#e4e2de",
        "surface-variant": "#e5e2e1",
        "on-secondary-fixed": "#261900",
        "surface-dim": "#dcd9d9",
        "surface-container-low": "#f6f3f2",
        "inverse-surface": "#313030",
        "inverse-on-surface": "#f3f0ef",
        "outline-variant": "#c0c9c2",
        "on-primary-fixed": "#002114",
        "error": "#ba1a1a",
        "tertiary-fixed-dim": "#c8c6c3",
        "primary-fixed-dim": "#a0d1b8",
        "primary-container": "#043927",
        "on-error-container": "#93000a",
        "on-secondary-container": "#785a1a",
        "background": "#fcf9f8",
        "secondary-container": "#fed488",
        "on-tertiary-container": "#9a9a96",
        "surface-bright": "#fcf9f8",
        "surface-container-highest": "#e5e2e1",
        "secondary": "#775a19",
        "outline": "#717973",
        "on-primary-fixed-variant": "#204f3c",
        "secondary-fixed": "#ffdea5",
        "secondary-fixed-dim": "#e9c176",
        "on-primary": "#ffffff",
        "on-surface": "#1c1b1b",
        "on-tertiary-fixed": "#1b1c1a",
        "surface-container-high": "#eae7e7",
        "on-tertiary-fixed-variant": "#474744",
        "error-container": "#ffdad6",
        "primary-fixed": "#bbeed3",
        "on-background": "#1c1b1b",
        "surface-container": "#f0eded",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#73a48c",
        "inverse-primary": "#a0d1b8",
        "tertiary-container": "#31322f",
        "on-secondary": "#ffffff",
        "surface-tint": "#396752",
        "on-error": "#ffffff",
        "on-surface-variant": "#414944",
        "primary": "#002215",
        "surface-container-lowest": "#ffffff"
      },
      spacing: {
        "gutter": "24px",
        "section-gap": "120px",
        "margin-desktop": "64px",
        "container-max": "1200px",
        "margin-mobile": "20px",
        "unit": "8px"
      },
      fontFamily: {
        "body-md": ["var(--font-montserrat)"],
        "display-lg": ["var(--font-playfair)"],
        "headline-lg-mobile": ["var(--font-playfair)"],
        "headline-lg": ["var(--font-playfair)"],
        "label-sm": ["var(--font-montserrat)"],
        "body-lg": ["var(--font-montserrat)"],
        "headline-md": ["var(--font-playfair)"]
      }
    }
  }
};

export default config;
