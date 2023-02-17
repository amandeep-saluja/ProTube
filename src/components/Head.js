import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../constants';
import { toggleMenu } from '../store/appSlice';
import USER from '../assets/user.jpg';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        // make an api call after every key press
        // but difference between 2 API calls is < 200ms
        // decline the API call
        const timer = setTimeout(() => getSearchSuggestions(), 200);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    useEffect(() => {
        const handleEvent = (e) => {
            setShowAnimation(false);
            setTimeout(() => setShowAnimation(true), 200);
        };
        window.addEventListener('visibilitychange', handleEvent);

        return () => window.removeEventListener('visibilitychange', handleEvent);
    }, []);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSearchResult(json[1]);
    };

    return (
        <div className="grid grid-flow-col p-1 m-2">
            <div className="flex col-span-1 pr-20 content-center">
                <img
                    className={
                        'h-7 curser-pointer mr-2 self-center ' +
                        (showAnimation ? 'animate-[ping_1s_ease-in-out_1s]' : '')
                    }
                    onClick={() => toggleMenuHandler()}
                    alt="logo"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                />
                <Link to="/" className="self-center">
                    <img
                        className="h-6 mx-2"
                        alt="youtube logo"
                        src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
                    />
                </Link>
            </div>
            <div className="col-span-10 px-10 flex content-center">
                <input
                    className="px-5 w-7/12 border border-gray-400 p-2 rounded-l-full self-center"
                    type="text"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    // onBlur={() => setShowSuggestions(false)}
                    value={searchQuery}
                    placeholder="Search"
                />
                <button className="border border-gray-400 px-5 py-2 my-2 rounded-r-full bg-gray-100">
                    <Link to={'/results?search_query=' + searchQuery}><FiSearch className="text-2xl" /></Link>
                </button>
                {showSuggestions && (
                    <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
                        <ul className="">
                            {searchResult.map((result, index) => {
                                return (
                                    <li
                                        className="py-2 px-3 shadow-sm hover:bg-gray-100 flex content-center"
                                        key={index}
                                    >
                                        <Link to={'/results?search_query=' + result} className="flex">
                                            <FiSearch className={'self-center mr-6'} />
                                            <span className="self-center">{result}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-1 flex justify-center">
                <img className="h-8 self-center" alt="user icon" src={USER} />
            </div>
        </div>
    );
};

export default Head;
