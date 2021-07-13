import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import { useTheme } from "styled-components";
const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg viewBox="0 0 24 25" {...props}>
      <g>
        <path
          fill="none"
          stroke-width="17.763"
          stroke-linecap="round"
          stroke-linejoin="miter"
          stroke={theme.colors.contrast}
          stroke-opacity="1"
          stroke-miterlimit="10"
          d="M 226.458333 162.208333 C 212.458333 200 176.125 226.916667 133.5 226.916667 C 91.458333 226.916667 55.583333 200.791667 41.166667 163.875 "
          transform="matrix(0.09375,0,0,0.09375,0,0)"
        />
        <path
          fill="none"
          stroke-width="17.763"
          stroke-linecap="round"
          stroke-linejoin="miter"
          stroke={theme.colors.contrast}
          stroke-opacity="1"
          stroke-miterlimit="10"
          d="M 47.75 78.083333 C 64.916667 48.583333 96.875 28.75 133.5 28.75 C 172.708333 28.75 206.625 51.541667 222.666667 84.583333 "
          transform="matrix(0.09375,0,0,0.09375,0,0)"
        />
        <path
          stroke="none"
          fill-rule="nonzero"
          fill-opacity="1"
          d="M 3.402344 10.375 L 0.351562 15.65625 L 6.453125 15.65625 Z M 3.402344 10.375 "
        />
        <path
          stroke="none"
          fill-rule="nonzero"
          fill-opacity="1"
          d="M 20.5625 12.882812 L 23.613281 7.601562 L 17.511719 7.601562 Z M 20.5625 12.882812 "
        />
        <path
          stroke="none"
          fill-rule="nonzero"
          fill-opacity="1"
          d="M 12.386719 5.996094 L 8.125 9.742188 L 7.726562 15.0625 L 12.46875 18.558594 L 17.042969 15.0625 L 16.785156 9.742188 Z M 12.386719 5.996094 "
        />
      </g>
    </Svg>
  );
};

export default Icon;
