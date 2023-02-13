import * as React from "react";
import { SVGProps } from "react";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#000"
    {...props}
  >
    <path d="m28 40 8-8-8-8" stroke="white" />
    <path d="M8 8h48v48H8z" stroke="white" />
  </svg>
);

export default ArrowRight;
