import React from 'react'; //rfce를 쳐!
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Search from '../Search';

function Home() {
    return (
        <div className='home'>           
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                    <AccountCircleIcon/>
                </div>
            </div>

            <div className='home__body'>
               <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt=''/> 
            </div>
            <div className="home__inputContainer">
                <Search/>
            </div>
        </div>
    )
} 

export default Home


// https://github.com/EinsVision/google-clone
// einsvision.github.io/google-clone