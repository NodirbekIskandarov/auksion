import React from 'react'
import { getText } from '../../locales'
import CloseIcon from '../../img/svgs/mobile-close.svg'

export default function MobileMenu({
    location,
    language,
    languageHandler,
    burgerToggle,
    setBurgerToggle,
    toggle,
    setToggle,
    token,
    onLogout,
    navigate,
    inn,
}) {
    return (
        <div className={'mobile-menu-main-container'}>
            <div
                className={
                    'd-flex flex-row justify-content-between align-items-center'
                }
            >
                <div className={'ms-2'}>
                    <div className="nav_lang d-flex flex-row align-items-center">
                        <img
                            src={
                                language === 'en'
                                    ? '/img/flag-um-svgrepo-com.svg'
                                    : language === 'ru'
                                    ? '/img/twemoji_flag-russia.svg'
                                    : '/img/twemoji_flag-uzbekistan.svg'
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

                <div
                    onClick={() => setBurgerToggle(!burgerToggle)}
                    className={'pe-3'}
                >
                    <img
                        src={CloseIcon}
                        alt={'close'}
                        style={{ transform: 'scale(0.85)' }}
                    />
                </div>
            </div>

            <div className="col-12 d-flex flex-column align-items-start justify-content-between ps-3">
                <div
                    onClick={() => {
                        navigate('/')
                        setBurgerToggle(!burgerToggle)
                    }}
                    className={`nav_a mt-3 ${
                        location.pathname === '/' ? 'active' : ''
                    }`}
                >
                    {getText('nav_1')}
                </div>

                <div
                    onClick={() => {
                        navigate('/about')
                        setBurgerToggle(!burgerToggle)
                    }}
                    className={`nav_a mt-3 ${
                        location.pathname === '/about' ? 'active' : ''
                    }`}
                >
                    {getText('nav_2')}
                </div>

                <div
                    onClick={() => {
                        navigate('/Interactive')
                        setBurgerToggle(!burgerToggle)
                    }}
                    className={`nav_a mt-3 ${
                        location.pathname === '/Interactive' ? 'active' : ''
                    }`}
                >
                    {getText('nav_3')}
                </div>

                <div
                    onClick={() => {
                        navigate('/news')
                        setBurgerToggle(!burgerToggle)
                    }}
                    className={`nav_a mt-3 ${
                        location.pathname === '/news' ? 'active' : ''
                    }`}
                >
                    {getText('nav_4')}
                </div>

                <div
                    onClick={() => {
                        navigate('/contact')
                        setBurgerToggle(!burgerToggle)
                    }}
                    className={`nav_a mt-3 ${
                        location.pathname === '/contact' ? 'active' : ''
                    }`}
                >
                    {getText('nav_5')}
                </div>

                <div
                    className={
                        'd-flex flex-row justify-content-between align-items-center w-100 mt-4'
                    }
                >
                    <div
                        className={
                            'd-flex flex-row justify-content-around align-items-center'
                        }
                    >
                        <a href="" className="nav_soc_a">
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
                </div>
            </div>

            <div className={'mobile-profile-container'}>
                {!token ? (
                    <div className="col-12 gap-3 px-4">
                        <div
                            onClick={() => {
                                navigate('/registration')
                                setBurgerToggle(!burgerToggle)
                            }}
                            className="nav_btn_1"
                        >
                            {getText('nav_6')}
                        </div>

                        <div
                            onClick={() => {
                                navigate('/login')
                                setBurgerToggle(!burgerToggle)
                            }}
                            className="nav_btn_2 mt-2"
                        >
                            {getText('nav_7')}
                        </div>
                    </div>
                ) : (
                    <>
                        {!toggle && token ? (
                            <div
                                className={
                                    'col-12 d-flex flex-row align-items-center justify-content-center gap-3'
                                }
                            >
                                <img
                                    src={'img/avatar-navbar.png'}
                                    alt={'avatar'}
                                    className={'navbar-avatar pointer'}
                                    onClick={() => {
                                        navigate('/cabinet')
                                        setBurgerToggle(!burgerToggle)
                                    }}
                                />

                                <p
                                    className={'user-name pt-3 pointer'}
                                    onClick={() => navigate('/cabinet')}
                                >
                                    {inn}
                                </p>

                                <div
                                    className={'pointer'}
                                    onClick={() => setToggle(!toggle)}
                                >
                                    <img
                                        src={'img/polygon-navbar.svg'}
                                        alt="polygon"
                                        style={{
                                            transform: toggle
                                                ? 'rotate(180deg)'
                                                : '',
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div
                                className={
                                    'col-12 d-flex flex-row align-items-center justify-content-center gap-3'
                                }
                            >
                                <button
                                    onClick={onLogout}
                                    className="nav_btn_1 col-6"
                                >
                                    {getText('nav_9')}
                                </button>

                                <div
                                    className={'pointer'}
                                    onClick={() => setToggle(!toggle)}
                                >
                                    <img
                                        src={'img/polygon-navbar.svg'}
                                        alt="polygon"
                                        style={{
                                            transform: toggle
                                                ? 'rotate(180deg)'
                                                : '',
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
