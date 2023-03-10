import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    //Early return pattern
    if (!isMenuOpen) return null;

    return (
        <div className="grid grid p-5 shadow-lg w-48">
            <div className="my-4">
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>Shorts</li>
                    <li>Video</li>
                    <li>Live</li>
                </ul>
            </div>
            <div className="my-4">
                <h1 className="font-bold">Subscription</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>
            <div className="my-4">
                <h1 className="font-bold">Watch Later</h1>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
