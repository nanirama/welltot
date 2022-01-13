import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"


import theme from "./src/theme"


export const wrapRootElement = ({ element }) => {

  console.info(`theme`, theme)

  return <ThemeProvider theme={theme}>{element}</ThemeProvider>

}