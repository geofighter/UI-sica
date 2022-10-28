import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth/routes/AuthRoutes";
import {RhRoutes} from "../rh/routes/RhRoutes";

export const AppRouter = () => {

    //llamar al status y verificar si el usuario está autenticado
    //provisional
    const status = 'not-authenticated';
    const rol = 'base';

    //llamar al componente de spinner si está cargando la solicitud
    // if ( status === 'checking' ){
    //     return <CheckingAuth />;
    // }

    return(
        //TODO: cambiar condiciones, de aceurdo a los roles asignados en la db para así mostrar lo que corresponda
        <Routes>
            {
                status === 'authenticated'
                    //reDirect to digitalExpedient
                ? <Route path="/*" element={ <RhRoutes /> }/>
                    //Redirect to Login & Register
                : <Route path="/auth/*" element={ <AuthRoutes /> } /> } />
            }
            {/*Grant the user no logged, can't access in a private routes*/}
            <Route path="/*" element={ <Navigate to="/auth/login" /> }></Route>

        </Routes>
    );
}