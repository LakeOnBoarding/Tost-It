module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF2E29",
      },
      fontSize: {
        xsm: "0.7rem", // 작은 크기 폰트
        base: "1rem", // 기본 크기 폰트
        lg: "1.125rem", // 큰 크기 폰트
        xl: "1.25rem", // 매우 큰 크기 폰트
        // 추가적인 폰트 크기를 여기에 정의할 수 있습니다.
      },
    },
  },
  plugins: [],
};
