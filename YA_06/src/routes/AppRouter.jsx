import {Routes, Route, Link, useNavigate} from 'react-router-dom';

//페이지 import
import Home from '../pages/Home';
import Login from '../pages/Login';

function AppRouter(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    )
}

export default AppRouter;