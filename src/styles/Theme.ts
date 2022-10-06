import { css } from "styled-components";

export const Theme = {
  font: {
    family: css`
      font-family: Arial, Helvetica, sans-serif;
    `,
    size: {
      s: "12px",
      m: "16px",
      l: "20px",
    }
  },
  colors: {
    primary: "#566246",
    secondary: "#a4c2a5",
    main: {
      dark: "#4a4a48",
      light: "#f1f2eb"
    },
    grade: {
      2: "#e5e6df",
      3: "#d8dad3",
      4: "#91928e",
    },
    diff: {
      warn: "#FF5F5F",
      warnLight: "#FFD4D4",
      successLight: "#B2EDC6"
    }
  },
  radius: {
    button: "8px",
    plate: "5px",
  },
  icons: {
    del: 'url("./assets/remove.svg") center no-repeat',
    shown: 'url("./assets/eye-opened.svg") center no-repeat',
    hidden: 'url("./assets/eye-closed.svg") center 25px no-repeat',
  },
  lineHeight: '50px'
}
