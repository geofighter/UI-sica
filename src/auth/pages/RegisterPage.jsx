import {AuthLayout} from "../layout/AuthLayout";
import {Alert, Button, Grid, TextField, Typography, Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {Check} from "@mui/icons-material";

export const RegisterPage = () => {
    return(
        <AuthLayout title="Crear mi usuario">
            <form /*onSubmit={ onSubmit }*/>
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Número de Nómina"
                            type="number"
                            placeholder="Escribe tu No. de Nómina"
                            fullWidth
                            color="secondary"
                            name="name"
                            // onChange={ onInputChange }
                            // value={ name }
                            // error={ !!nameValid && formSubmitted }
                            // helperText={ nameValid }
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }} /*display={ !!errorMessage ? '' : 'none' }*/ >

                        <Grid item xs={12} sm={12}>
                            <Alert severity="error">
                                {/*{ errorMessage }*/}
                            </Alert>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>

                        <Grid item xs={12} sm={12}>
                            <Button variant={"contained"} className="button-primary" fullWidth type="submit" /*disabled={ isCheckingAuthentication }*/ >
                                <Check sx={{ marginRight: 2, color: "#fff" }}/>
                                <Typography color="white">Crear mi cuenta</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container sx={{ marginBottom: 4 }} direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="secondary" to="/auth/login">
                            Ya tengo un usuario
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    );
}