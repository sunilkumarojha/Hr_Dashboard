import React from "react";

const sizes = {
  xs: "text-[10px] font-medium leading-3",
  lg: "text-base font-normal leading-6",
  s: "text-xs font-normal leading-[15px]",
  "2xl": "text-2xl font-medium leading-[27px]",
  "3xl": "text-4xl font-medium leading-[54px]",
  "4xl": "text-5xl font-medium leading-[54px]",
  xl: "text-lg font-medium leading-6",
  md: "text-sm font-normal leading-[17px]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
