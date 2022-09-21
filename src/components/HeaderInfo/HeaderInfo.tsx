import React from 'react';
import {Link} from "react-router-dom";
import {cn} from "../../utils/bem-config";
import "./HeaderInfo.scss";
import {Location} from "../../assets/svg/Location/Location";

export const HeaderInfo = () => {
    const headerInfo = cn("headerInfo");
    return (
        <>
            <div className={"container"}>
                <div className={headerInfo()}>
                    <div className={headerInfo("left")}>
                        <Location/>
                        <ul className={headerInfo("list")}>
                            <li className={headerInfo("city")}><Link to={"#"}> Город
                                <span
                                    className={headerInfo("allCity")}><Link to={"#"}> </Link>
                        </span>
                            </Link>
                            </li>
                            <li className={headerInfo("promotions")}><Link to={"#"}> Акции </Link></li>
                            <li className={headerInfo("assembly")}><Link to={"#"}> Сборка </Link></li>
                            <li className={headerInfo("payment")}><Link to={"#"}> Оплата </Link></li>
                            <li className={headerInfo("delivery")}><Link to={"#"}> Доставка </Link></li>
                        </ul>
                    </div>
                    <div className={headerInfo("right")}>
                        <Link to={"#"} className={headerInfo("works")}>Наши работы</Link>
                        <Link to={"#"} className={headerInfo("contacts")}>Контакты</Link>
                    </div>
                </div>
            </div>
            <div className={headerInfo("line")}></div>
        </>
    );
}
