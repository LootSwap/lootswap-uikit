import React from "react";
import { useTheme } from "styled-components";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke={theme.colors.contrast}
        strokeWidth="17.4807"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M 88.291667 110.5 L 22 110.5 L 22 207.083333 L 234.5 207.083333 L 234.5 110.5 L 169.5 110.5 "
        transform="matrix(0.09375,0,0,0.09375,0,0)"
      />
      <path
        fill="none"
        stroke={theme.colors.contrast}
        strokeWidth="15.2956"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M 92.708333 137.5 L 61.416667 137.5 L 61.416667 181.208333 L 194.083333 181.208333 L 194.083333 137.5 L 164.708333 137.5 "
        transform="matrix(0.09375,0,0,0.09375,0,0)"
      />
      <path
        fill="none"
        stroke={theme.colors.contrast}
        strokeWidth="17.4807"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M 22 110.5 C 22 110.5 31.708333 48.291667 129.291667 48.291667 C 229.083333 48.291667 234.5 110.5 234.5 110.5 "
        transform="matrix(0.09375,0,0,0.09375,0,0)"
      />
      <path
        fill="none"
        stroke={theme.colors.contrast}
        strokeWidth="17.4807"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M 87 92.708333 L 170 92.708333 C 170 92.708333 179.791667 153.916667 128.5 153.916667 C 77.208333 153.916667 87 92.708333 87 92.708333 Z M 87 92.708333 "
        transform="matrix(0.09375,0,0,0.09375,0,0)"
      />
    </Svg>
  );
};

export default Icon;
