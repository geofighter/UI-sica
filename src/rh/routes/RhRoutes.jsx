import {Navigate, Route} from "react-router-dom";
import {DigitalExpedient} from "../pages/DigitalExpedient";

export const RhRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <DigitalExpedient /> }/>
            <Route path="/*" element={ <Navigate to="/" /> }/>
        </Routes>
    );
}