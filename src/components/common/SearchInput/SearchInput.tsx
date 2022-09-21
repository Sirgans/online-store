import React from 'react';
import "./SearchInput.scss";
import {cn} from "../../../utils/bem-config";
import icon from "../../../assets/svg/searchIcon.svg";
import {Link} from "react-router-dom";


export const SearchInput = () => {
    const searchInput = cn("searchInput");
    return (
        <div className={searchInput()}>
            <input className={searchInput("input")}
                   type="text"
                   placeholder="Поиск"
            />
            <Link className={searchInput("icon")} to="#">
                <img src={icon} alt="Поиск"/>
            </Link>
        </div>
    );
};

