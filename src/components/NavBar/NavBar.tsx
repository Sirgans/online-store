import React from 'react';
import {Link} from "react-router-dom";
import {cn} from "../../utils/bem-config";
import "./NavBar.scss";


export const NavBar = () => {
    const navBar = cn("navBar");
    return (
        <div className={navBar()}>
            <div className={"container"}>
                <ul className={navBar("wrapper")}>
                    <li><Link className={navBar("link")} to={"#"}>Кухни</Link></li>
                    <li><Link className={navBar("link")} to={"#"}>Гостиные</Link></li>
                    <li><Link className={navBar("link")} to={"#"}>Спальни</Link></li>
                    <li><Link className={navBar("link")} to={"#"}>Прихожие</Link></li>
                    <li><Link className={navBar("link")} to={"#"}>Шкафы-купе</Link></li>
                    <li><Link className={navBar("link")} to={"#"}>Детские</Link></li>
                    <li><Link className={navBar("link")} to={"#"}>Диваны</Link></li>
                    <li><Link className={navBar("link")} to={"#"}>Где посмотреть</Link></li>
                </ul>
            </div>
        </div>
    );
};

