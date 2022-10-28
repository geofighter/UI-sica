import {AuthLayout} from "../layout/AuthLayout";
import {Link as RouterLink} from "react-router-dom";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import { Key, Password} from "@mui/icons-material";

export const LoginPage = () => {

    return(
        <AuthLayout title="Iniciar Sesión">
            <form /*onSubmit={ onSubmit }*/ className="">
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="No. Nómina"
                            type="number"
                            placeholder="Escribe tu número de nómina"
                            fullWidth
                            color="secondary"
                            name="email"

                            // value={ email }
                            // onChange={ onInputChange }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Escribe tu contraseña actual"
                            fullWidth
                            color="secondary"
                            name="password"
                            // value={ password }
                            // onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid container className="animate__animated animate__tada" spacing={2} sx={{ marginBottom: 2, marginTop: 2 }} /*display={ !!errorMessage ? '' : 'none' }*/>
                        <Grid item xs={12} sm={12}>
                            <Alert severity="error">
                                {/*{ errorMessage }*/}
                            </Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>

                        <Grid item xs={12} sm={12} lg={12}>
                            <Button /*disabled={ isAuthenticating }*/ className="button-primary" variant={"contained"} fullWidth type="submit">
                                <Key sx={{ marginRight: 2, color: "#fff" }}/>
                                <Typography color="white">Acceder</Typography>
                            </Button>
                        </Grid>
                        {/*<Grid item xs={12} sm={6}>*/}
                        {/*    <Button /*disabled={ isAuthenticating }*/ /*className="button-primary" variant={"contained"} fullWidth /*onClick={ onGoogleSignIn }>*/}
                        {/*        <Google sx={{ marginRight: 2, color: "#fff" }}/>*/}
                        {/*        <Typography color="white">Google</Typography>*/}
                        {/*    </Button>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={12} lg={12}>
                            <Button /*disabled={ isAuthenticating }*/ className="button-accent" variant={"contained"} fullWidth /*onClick={ onGoogleSignIn }*/>
                                <Password sx={{ marginRight: 2, color: "#fff" }}/>
                                <Typography color="white">Olvidé mi contraseña</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="secondary" to="/auth/register">
                            Crear mi Usuario
                        </Link>
                    </Grid>
                    {/*<Grid marginTop={ -3 } container direction="row" justifyContent="end">*/}
                    {/*    <Link component={ RouterLink } color="secondary" to="/auth/nuevo_password">*/}
                    {/*        Olvidé mi contraseña*/}
                    {/*    </Link>*/}
                    {/*</Grid>*/}


                </Grid>
            </form>
        </AuthLayout>
    );

}