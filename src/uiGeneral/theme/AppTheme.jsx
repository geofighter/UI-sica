import {ThemeProvider} from "@emotion/react";
import {CssBaseline} from "@mui/material";
import {CobaehThemeWineGold} from "./CobaehThemeWineGold";

export const AppTheme = ({ children }) => {

    return(
        <ThemeProvider theme={ CobaehThemeWineGold }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    );

}