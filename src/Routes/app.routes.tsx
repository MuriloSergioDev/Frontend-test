import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import Help from '../pages/Help';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';



function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/forgot-password' element={<ForgotPassword />}></Route>
                <Route path='/help' element={<Help />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;