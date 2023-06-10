import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LANGUAGE } from '../tools/constant'
import { getText } from '../locales'

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [language, setLanguage] = useState(localStorage.getItem(LANGUAGE))

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        // document.location.reload(true)
        setLanguage(e.target.value)
    }

    return (
        <>
            <div className="Navbar">
                <div className="container">
                    <div className="nav_1">
                        <div className="row justify-content-between w-100">
                            <div
                                onClick={() => navigate('/')}
                                className="col-3 d-flex align-items-center pointer"
                            >
                                <img
                                    src="/img/logo.png"
                                    alt=""
                                    className="logo"
                                />
                            </div>
                            <div className="col-5 d-flex align-items-center gap-3">
                                <div className="nav_inp_box">
                                    <img
                                        className="nav_inp_icon_1 pointer"
                                        src="/img/nav_inp_1.png"
                                        alt=""
                                    />
                                    <img
                                        className="nav_inp_icon_2 pointer"
                                        src="/img/nav_inp_2.png"
                                        alt=""
                                    />
                                    <input
                                        placeholder="Izlash"
                                        type="text"
                                        name=""
                                        id=""
                                    />
                                </div>
                                <button className="nav_inp_btn">
                                    {getText('nav_8')}
                                </button>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-end gap-3">
                                <Link to="/registration" className="nav_btn_1">
                                    {getText('nav_6')}
                                </Link>
                                <Link to="/login" className="nav_btn_2">
                                    {getText('nav_7')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav_2">
                    <div className="container">
                        <div className="row justify-content-between w-100">
                            <div className="col-7 d-flex align-items-center">
                                <Link
                                    to="/"
                                    className={`nav_a ${
                                        location.pathname === '/'
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    {getText('nav_1')}
                                </Link>
                                <Link
                                    to="/about"
                                    className={`nav_a ${
                                        location.pathname === '/about'
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    {getText('nav_2')}
                                </Link>
                                <Link
                                    to="/Interactive"
                                    className={`nav_a ${
                                        location.pathname === '/Interactive'
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    {getText('nav_3')}
                                </Link>
                                <Link
                                    to="/news"
                                    className={`nav_a ${
                                        location.pathname === '/news'
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    {getText('nav_4')}
                                </Link>
                                <Link
                                    to="/contact"
                                    className={`nav_a ${
                                        location.pathname === '/contact'
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    {getText('nav_5')}
                                </Link>
                            </div>
                            <div className="col-5 d-flex align-items-center justify-content-end">
                                <div className="nav_2_social d-flex gap-3">
                                    <a href="" className="nav_soc_a">
                                        <img
                                            src="/img/icon_instagram.png"
                                            alt=""
                                            className={'social-icon'}
                                        />
                                    </a>
                                    <a href="" className="nav_soc_a">
                                        <img
                                            src="/img/icon_telegram.png"
                                            alt=""
                                            className={'social-icon'}
                                        />
                                    </a>
                                    <a href="" className="nav_soc_a">
                                        <img
                                            src="/img/icon_facebook.png"
                                            alt=""
                                            className={'social-icon'}
                                        />
                                    </a>
                                </div>
                                <a href="" className="nav_save">
                                    <img
                                        src="/img/icon_saved.png"
                                        alt=""
                                        className={'saved-icon'}
                                    />
                                </a>
                                <div className="nav_lang">
                                    <img
                                        src="/img/icon_flag_1.png"
                                        alt=""
                                        className={'flag-icon'}
                                    />

                                    <select
                                        onChange={changeLanguage}
                                        name=""
                                        id=""
                                        defaultValue={language}
                                    >
                                        <option
                                            // selected={getLanguage() === 'uz'}
                                            value="uz"
                                        >
                                            Uz
                                        </option>
                                        <option
                                            // selected={getLanguage() === 'ru'}
                                            value="ru"
                                        >
                                            Ru
                                        </option>
                                        <option
                                            // selected={getLanguage() === 'en'}
                                            value="en"
                                        >
                                            En
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
