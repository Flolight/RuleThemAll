import React from "react";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function NavButton(){

    return (
        <div>
            <button
                type="button"
                className="rounded-3xl w-40 h-12 bg-b-yellow hover:bg-b-black hover:text-b-white"
                >
                <Link to="/login">Get started !</Link>
            </button>
        </div>
    );
};

export default NavButton;