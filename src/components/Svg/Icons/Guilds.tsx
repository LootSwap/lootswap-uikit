import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import { useTheme } from "styled-components";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg viewBox="0 0 24 25" {...props}>
      <path
        fill="none"
        stroke={theme.colors.contrast}
        stroke-width="16.5393"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-opacity="1"
        stroke-miterlimit="10"
        d="M 129.125 20 L 20.666667 57.791667 C 20.666667 57.791667 -4.541667 196.958333 126.916667 242.416667 C 126.916667 242.416667 255.125 206.833333 235.416667 57.791667 Z M 129.125 20 "
        transform="matrix(0.09375,0,0,0.09375,0,0)"
      />
      <path
        stroke="none"
        fill-rule="nonzero"
        fill-opacity="1"
        d="M 13.0625 8.859375 C 13.546875 9.734375 14.832031 11.679688 17.289062 13.277344 C 17.53125 13.429688 17.84375 13.40625 18.058594 13.214844 L 19.628906 11.785156 C 19.835938 11.59375 19.894531 11.292969 19.769531 11.039062 C 19.335938 10.160156 18.097656 8.15625 15.367188 6.738281 C 15.140625 6.621094 14.859375 6.652344 14.664062 6.820312 L 13.199219 8.074219 C 12.972656 8.269531 12.914062 8.597656 13.0625 8.859375 Z M 13.0625 8.859375 "
      />
      <path
        fill-rule="nonzero"
        fill-opacity="1"
        stroke-width="20.2708"
        stroke-linecap="round"
        stroke-linejoin="miter"
        stroke={theme.colors.contrast}
        stroke-opacity="1"
        stroke-miterlimit="10"
        d="M 97.333333 177.791667 L 163.083333 117.5 "
        transform="matrix(0.09375,0,0,0.09375,0,0)"
      />
      <path
        stroke="none"
        fill-rule="nonzero"
        fill-opacity="1"
        d="M 11.097656 8.695312 C 10.613281 9.566406 9.328125 11.511719 6.871094 13.109375 C 6.628906 13.265625 6.316406 13.238281 6.101562 13.046875 L 4.53125 11.617188 C 4.324219 11.425781 4.265625 11.125 4.390625 10.871094 C 4.824219 9.992188 6.0625 7.988281 8.792969 6.570312 C 9.023438 6.453125 9.300781 6.484375 9.496094 6.652344 L 10.960938 7.90625 C 11.1875 8.101562 11.246094 8.433594 11.097656 8.695312 Z M 11.097656 8.695312 "
      />
      <path
        fill-rule="nonzero"
        fill-opacity="1"
        stroke-width="20.2708"
        stroke-linecap="round"
        stroke-linejoin="miter"
        stroke={theme.colors.contrast}
        stroke-opacity="1"
        stroke-miterlimit="10"
        d="M 160.375 176 L 94.625 115.75 "
        transform="matrix(0.09375,0,0,0.09375,0,0)"
      />
    </Svg>
  );
};

export default Icon;
