import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home'
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';
import Button from '../components/Button';

const RoutesApp = () =>{
    const {theme} = useContext(ThemeContext)
    return(
        <Router>
            <section className={`App ${theme}`}>
                <div className ='container'>
            <header>
                <nav>
                    <Link to='/'>HOME </Link>
                    <Link to='/profile'>PROFILE </Link>
                    <Link to='/myjob'>MYJOB </Link>
                </nav>
                <Button/>
            </header>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/myjob' element={<MyJob/>} />
                <Route path='/profile' element={<Profile/>} />
            </Routes>
        
            </div>
            </section>
        </Router>
    )
}

export default RoutesApp
