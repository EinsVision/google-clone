import React from 'react';
import { useStateValue } from './StateProvider';
import './SearchPage.css';
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import Search from './Search';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);

    console.log(data);

    return (
        <div className='SearchPage'>
            <div className='searchPage__header'>
                <Link>
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="" 
                    />
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons/>
                </div>
            </div>
            
            <div className='searchPage__results'>
                
            </div>
        </div>
    )
} // 2:35:59
// https://developers.google.com/custom-search/v1/using_rest
export default SearchPage
