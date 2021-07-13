import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import { useTheme } from "styled-components";
const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg viewBox="0 0 255 255" {...props}>
      <path
        d="M131.16,131.46h15.73c2.07,0,3.82-1.55,4.07-3.61l14.23-117.14c0.3-2.44-1.61-4.59-4.07-4.59H112
            c-2.53,0-4.45,2.27-4.05,4.76l19.16,117.14C127.44,130,129.15,131.46,131.16,131.46z"
      />
      <circle cx="136.46" cy="165.43" r="25.19" />
      <path
        fill="none"
        stroke={theme.colors.contrast}
        stroke-width="18.1574"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        d="M117.81,226.65c6.16,1.52,12.61,2.33,19.24,2.33c44.16,0,79.95-35.8,79.95-79.95s-35.8-79.95-79.95-79.95
		    s-79.95,35.8-79.95,79.95c0,15.77,4.57,30.48,12.45,42.87L57.1,242.45L117.81,226.65z"
      />
    </Svg>
  );
};

export default Icon;
