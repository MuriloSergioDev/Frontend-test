import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';



function AuthRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AuthRoutes;