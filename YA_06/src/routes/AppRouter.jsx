import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import { createContext } from 'react';

//페이지 import
import Home from '../pages/Home';
import Login from '../pages/Login';
import Header from '../pages/Header';
import Signup from '../pages/Signup';
import FindId from '../pages/FindId';
import FindPassword from '../pages/FindPassword';
import MainPage from '../pages/MainPage';
import SettingForm from '../components/SettingForm';
import NoteView from '../pages/NoteView';

function AppRouter(){
    return(
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}/>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='FindId' element={<FindId/>}/>
                <Route path='FindPassword' element={<FindPassword/>}/>
                <Route path='MainPage' element={<MainPage/>}/>
                <Route path='NoteView' element={<NoteView/>}/>
                <Route path='SettingForm' element={<SettingForm/>}/>
            </Routes>
        </div>
    )
}

export default AppRouter;