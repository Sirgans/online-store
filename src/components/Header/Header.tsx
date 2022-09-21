import React from 'react';
import "./Header.scss";
import {HeaderInfo} from "../HeaderInfo";
import {HeaderContacts} from "../HeaderContacts";
import {NavBar} from "../NavBar";

export const Header = () => {
    return (
        <>
            <HeaderInfo/>
            <HeaderContacts/>
            <NavBar/>
        </>
    );
};

