import React from 'react';
import {Link} from "react-router-dom";
import {cn} from "../../utils/bem-config";
import "./HeaderContacts.scss";
import {MainLogo} from "../../assets/svg/MainLogo/MainLogo";
import {SearchInput} from "../common/SearchInput";
import {PhoneIcon} from "../../assets/svg/PhoneIcon/PhoneIcon";
import {LoginIcon} from "../../assets/svg/LoginIcon/LoginIcon";
import {FavoritesIcon} from "../../assets/svg/CartIcon/FavoritesIcon";
import {CartIcon} from "../../assets/svg/FavoritesIcon/CartIcon";

export const HeaderContacts = () => {
    const headerContacts = cn("headerContacts");
    return (
        <div className={"container"}>
            <div className={headerContacts()}>
                <div className={headerContacts("left")}>
                    <MainLogo/>
                    <div className={headerContacts("address")}>
                        ул. Московская, 144 корп. - 1
                        <Link to={"#"}>Схема проезда</Link>
                    </div>
                </div>
                <SearchInput/>
                <div className={headerContacts("right")}>
                    <div className={headerContacts("phone")}>
                        <PhoneIcon/> <span>8 (961) 525 91 91</span>
                        <button>Заказать звонок</button>
                    </div>
                    <div className={headerContacts("login")}>
                        <LoginIcon/> <Link to={"#"}>Войти</Link>
                    </div>
                    <div className={headerContacts("favorites")}>
                        <div className={headerContacts("favoritesWrapper")}>
                            <FavoritesIcon/> <span>0</span>
                        </div>
                        <Link to={"#"}>Избранное</Link>
                    </div>
                    <div className={headerContacts("cart")}>
                        <CartIcon/> <Link to={"#"}>Корзина</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
