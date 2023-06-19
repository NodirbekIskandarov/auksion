import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../../locales'

export default function MobileMenu({ location, language, languageHandler }) {
    return (
        <div className={'mobile-menu-main-container'}>
            <div className="col-12 d-flex flex-column align-items-end justify-content-between">
                <Link
                    to="/"
                    className={`nav_a ${
                        location.pathname === '/' ? 'active' : ''
                    }`}
                >
                    {getText('nav_1')}
                </Link>

                <Link
                    to="/about"
                    className={`nav_a ${
                        location.pathname === '/about' ? 'active' : ''
                    }`}
                >
                    {getText('nav_2')}
                </Link>

                <Link
                    to="/Interactive"
                    className={`nav_a ${
                        location.pathname === '/Interactive' ? 'active' : ''
                    }`}
                >
                    {getText('nav_3')}
                </Link>

                <Link
                    to="/news"
                    className={`nav_a ${
                        location.pathname === '/news' ? 'active' : ''
                    }`}
                >
                    {getText('nav_4')}
                </Link>

                <Link
                    to="/contact"
                    className={`nav_a ${
                        location.pathname === '/contact' ? 'active' : ''
                    }`}
                >
                    {getText('nav_5')}
                </Link>

                <div
                    className={
                        'd-flex flex-row justify-content-between align-items-center w-100'
                    }
                >
                    <div
                        className={
                            'd-flex flex-row justify-content-around align-items-center'
                        }
                    >
                        <a href="" className="nav_soc_a ms-2">
                            <img
                                src="/img/icon_instagram.png"
                                alt=""
                                className={'social-icon'}
                            />
                        </a>

                        <a href="" className="nav_soc_a ms-2">
                            <img
                                src="/img/icon_telegram.png"
                                alt=""
                                className={'social-icon'}
                            />
                        </a>

                        <a href="" className="nav_soc_a ms-2">
                            <img
                                src="/img/icon_facebook.png"
                                alt=""
                                className={'social-icon'}
                            />
                        </a>
                    </div>

                    <div className={''}>
                        <div className="nav_lang d-flex flex-row align-items-center">
                            <img
                                src={
                                    language === 'uz'
                                        ? '/img/icon_flag_1.png'
                                        : language === 'ru'
                                        ? '/img/twemoji_flag-russia.svg'
                                        : '/img/flag-um-svgrepo-com.svg'
                                }
                                alt=""
                                className={'flag-icon'}
                            />

                            <select
                                onChange={languageHandler}
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
    )
}
