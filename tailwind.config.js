module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        warn_red: "#FF2E29",
        main_skyblue: "#BDE3FF",
        main_bg_cloud: "#F5FBFF",
        point_blue: "#80CAFF",
        post_red: "#FF9B99",
        post_yellow: "#FFFF66",
        post_blue: "#4786B3",
      },
      fontSize: {
        xsm: "0.7rem", // 작은 크기 폰트
        base: "1rem", // 기본 크기 폰트
        lg: "1.125rem", // 큰 크기 폰트
        xl: "1.25rem", // 매우 큰 크기 폰트
        // 추가적인 폰트 크기를 여기에 정의할 수 있습니다.
      },
      spacing: {
        98: "24.375rem",
        450: "448px",
        600: "600px",
      },
    },
  },
  plugins: [],
};
