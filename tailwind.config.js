module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 전역 CSS 설정
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
          },
        },
      },
      // 기타 전역 스타일...
    },
  },
  plugins: [],
};
