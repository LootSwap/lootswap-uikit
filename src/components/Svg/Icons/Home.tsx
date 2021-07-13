import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        strokeWidth="17.1271"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={theme.colors.contrast}
        strokeOpacity="1"
        strokeMiterlimit="10"
        d="M 131.833333 10.375 L 49.208333 77.333333 L 49.208333 179.833333 L 131.833333 245.75 "
        transform="matrix(0.09375,0,0,0.09375,0,0)"
      />
      <path
        fill="none"
        strokeWidth="17.1271"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={theme.colors.contrast}
        strokeOpacity="1"
        strokeMiterlimit="10"
        d="M 132.375 245.75 L 215 178.791667 L 215 76.291667 L 132.375 10.375 "
        transform="matrix(0.09375,0,0,0.09375,0,0)"
      />
      <path
        stroke="none"
        fillRule="nonzero"
        fillOpacity="1"
        d="M 15.449219 12.398438 L 9.269531 12.398438 L 7.605469 18.378906 L 12.507812 22.695312 L 17.117188 18.378906 Z M 15.449219 12.398438 "
      />
      <path
        stroke="none"
        fillRule="nonzero"
        fillOpacity="1"
        d="M 8.738281 10.429688 L 8.738281 9.523438 C 8.859375 9.832031 9.164062 10.050781 9.515625 10.050781 L 11.378906 10.050781 C 11.84375 10.050781 12.21875 9.675781 12.21875 9.210938 L 12.21875 8.234375 L 12.5 8.234375 L 12.5 9.210938 C 12.5 9.675781 12.878906 10.050781 13.339844 10.050781 L 15.203125 10.050781 C 15.484375 10.050781 15.730469 9.914062 15.886719 9.699219 L 15.886719 10.429688 Z M 8.738281 10.429688 "
      />
      <path
        stroke="none"
        fillRule="nonzero"
        fillOpacity="1"
        d="M 16.722656 7.398438 L 15.203125 7.398438 L 15.203125 9.210938 L 13.339844 9.210938 L 13.339844 7.398438 L 11.378906 7.398438 L 11.378906 9.210938 L 9.515625 9.210938 L 9.515625 7.398438 L 7.898438 7.398438 L 7.898438 11.269531 L 16.722656 11.269531 Z M 16.722656 7.398438 "
      />
    </Svg>
  );
};

export default Icon;
