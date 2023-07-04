import { MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: string;
  size?: "small" | "medium" | "large";
}

function Button({ onClick, children, size }: ButtonProps) {
  let buttonClassName =
    "bg-point_blue text-white shadow shadow-black font-semibold";
  if (size === "small") {
    buttonClassName += " rounded-3xl w-12 px-1.5 py-3 mx-2 "; // 작은 사이즈 스타일
  } else if (size === "medium") {
    buttonClassName += " rounded-full w-44 px-1.5 py-3 mx-2 "; // 큰 사이즈 스타일
  } else if (size === "large") {
    buttonClassName += " rounded-full w-96 px-1.5 py-3 mx-2"; // 기본 사이즈 스타일
  }

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
