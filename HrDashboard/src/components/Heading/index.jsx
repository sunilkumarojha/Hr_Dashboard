import React from "react";

const sizes = {
  s: "text-base font-semibold leading-5",
  md: "text-lg font-semibold leading-[22px]",
  xs: "text-sm font-semibold leading-[17px]",
  lg: "text-4xl font-semibold leading-[54px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
