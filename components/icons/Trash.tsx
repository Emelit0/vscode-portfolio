import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Uploaded to svgrepo.com"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <style>{".st0{fill:#0b1719}"}</style>
    <path
      d="M20 26.5v-16a.5.5 0 0 1 1 0v16a.5.5 0 0 1-1 0zM28 5v1a1 1 0 0 1-1 1l-1.847 22.166A2 2 0 0 1 23.16 31H8.84a2 2 0 0 1-1.993-1.834L5 7a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h7V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h7a2 2 0 0 1 2 2zM14 3h4V2h-4v1zm11.997 4H6.003l1.84 22.083c.044.518.477.917.997.917h14.32c.52 0 .953-.399.997-.917L25.997 7zM27 5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1h22V5zm-9.5 22a.5.5 0 0 0 .5-.5v-16a.5.5 0 0 0-1 0v16a.5.5 0 0 0 .5.5zm-3 0a.5.5 0 0 0 .5-.5v-16a.5.5 0 0 0-1 0v16a.5.5 0 0 0 .5.5zm-3 0a.5.5 0 0 0 .5-.5v-16a.5.5 0 0 0-1 0v16a.5.5 0 0 0 .5.5z"
      style={{
        fill: "gray",
      }}
    />
  </svg>
);

export default SvgComponent;
