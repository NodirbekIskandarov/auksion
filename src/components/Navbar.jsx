import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LANGUAGE } from '../tools/constant'
import { getText } from '../locales'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../store/features/languageSlice'
import Filter from './Filter'
import FilterActiveIcon from '../img/svgs/filter-icon.svg'
import HamburgerIcon from '../img/svgs/burger-menu.svg'
import MobileMenu from './mobile/MobileMenu'

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const language = useSelector((state) => state.language)
    const inn = useSelector((state) => state.setUsername)
    const [toggle, setToggle] = useState(false)
    const [filterToggle, setFilterToggle] = useState(false)
    const [token, setToken] = useState()
    const [burgerToggle, setBurgerToggle] = useState(false)
    const languageHandler = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        dispatch(changeLanguage(e.target.value))
    }

    const onLogout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setToken(null)
    }

    useEffect(() => {
        const userToken = localStorage.getItem('token')
        if (userToken && userToken !== token) {
            setToken(userToken)
            // window.location.reload(true)
        }
    }, [])

    return (
        <>
            <div className="Navbar">
                <div className="container">
                    <div className="nav_1">
                        <div className="row justify-content-between w-100 pt-2">
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

                            <div
                                className={'col-1 pointer hamburger'}
                                onClick={() => setBurgerToggle(!burgerToggle)}
                            >
                                <img src={HamburgerIcon} alt={'hamburger'} />
                            </div>

                            <div className="col-5 gap-3 desktop-search-container">
                                <div className="nav_inp_box">
                                    <img
                                        className="nav_inp_icon_1 pointer"
                                        src="/img/nav_inp_1.png"
                                        alt=""
                                    />
                                    <img
                                        onClick={() =>
                                            setFilterToggle(!filterToggle)
                                        }
                                        className="nav_inp_icon_2 pointer"
                                        src={
                                            filterToggle
                                                ? FilterActiveIcon
                                                : '/img/nav_inp_2.png'
                                        }
                                        alt="filter"
                                    />
                                    <input
                                        placeholder={getText('nav_8')}
                                        type="text"
                                        name=""
                                        id=""
                                    />
                                </div>
                                <button className="nav_inp_btn">
                                    {getText('nav_8')}
                                </button>
                            </div>

                            {filterToggle ? <Filter /> : ''}

                            {!token ? (
                                <div className="col-3 gap-3 desktop-nav-buttons-container">
                                    <Link
                                        to="/registration"
                                        className="nav_btn_1"
                                    >
                                        {getText('nav_6')}
                                    </Link>
                                    <Link to="/login" className="nav_btn_2">
                                        {getText('nav_7')}
                                    </Link>
                                </div>
                            ) : (
                                <div
                                    className={
                                        'col-3 gap-3' +
                                        ' desktop-profile-toggle-container'
                                    }
                                >
                                    {!toggle && token ? (
                                        <div
                                            className={
                                                'col-3 d-flex flex-row align-items-center justify-content-end gap-3'
                                            }
                                        >
                                            <img
                                                src={'img/avatar-navbar.png'}
                                                alt={'avatar'}
                                                className={
                                                    'navbar-avatar pointer'
                                                }
                                                onClick={() =>
                                                    navigate('/cabinet')
                                                }
                                            />

                                            <p
                                                className={
                                                    'user-name pt-3 pointer'
                                                }
                                                onClick={() =>
                                                    navigate('/cabinet')
                                                }
                                            >
                                                {inn}
                                            </p>

                                            <div
                                                className={'pointer'}
                                                onClick={() =>
                                                    setToggle(!toggle)
                                                }
                                            >
                                                <img
                                                    src={
                                                        'img/polygon-navbar.svg'
                                                    }
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
                                                'col-3 d-flex flex-row align-items-center justify-content-end gap-3'
                                            }
                                        >
                                            <button
                                                onClick={onLogout}
                                                className="nav_btn_1"
                                            >
                                                {getText('nav_9')}
                                            </button>

                                            <div
                                                className={'pointer'}
                                                onClick={() =>
                                                    setToggle(!toggle)
                                                }
                                            >
                                                <img
                                                    src={
                                                        'img/polygon-navbar.svg'
                                                    }
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
                                </div>
                            )}

                            {burgerToggle ? (
                                <MobileMenu
                                    location={location}
                                    language={language}
                                    languageHandler={languageHandler}
                                />
                            ) : (
                                ''
                            )}

                            <div className={'mobile-search-container'}>
                                <div className="col-12 d-flex align-items-center gap-2 mb-3">
                                    <div className="nav_inp_box">
                                        <img
                                            className="nav_inp_icon_1 pointer"
                                            src="/img/nav_inp_1.png"
                                            alt=""
                                        />
                                        <img
                                            onClick={() =>
                                                setFilterToggle(!filterToggle)
                                            }
                                            className="nav_inp_icon_2 pointer"
                                            src={
                                                filterToggle
                                                    ? FilterActiveIcon
                                                    : '/img/nav_inp_2.png'
                                            }
                                            alt="filter"
                                        />
                                        <input
                                            placeholder={getText('nav_8')}
                                            type="text"
                                            name=""
                                            id=""
                                        />
                                    </div>
                                    <button className="nav_inp_btn">
                                        {getText('nav_8')}
                                    </button>
                                </div>
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
                                            ? 'nav-active'
                                            : ''
                                    }`}
                                >
                                    {getText('nav_1')}
                                </Link>
                                <Link
                                    to="/about"
                                    className={`nav_a ${
                                        location.pathname === '/about'
                                            ? 'nav-active'
                                            : ''
                                    }`}
                                >
                                    {getText('nav_2')}
                                </Link>
                                <Link
                                    to="/Interactive"
                                    className={`nav_a ${
                                        location.pathname === '/Interactive'
                                            ? 'nav-active'
                                            : ''
                                    }`}
                                >
                                    {getText('nav_3')}
                                </Link>
                                <Link
                                    to="/news"
                                    className={`nav_a ${
                                        location.pathname === '/news'
                                            ? 'nav-active'
                                            : ''
                                    }`}
                                >
                                    {getText('nav_4')}
                                </Link>
                                <Link
                                    to="/contact"
                                    className={`nav_a ${
                                        location.pathname === '/contact'
                                            ? 'nav-active'
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
            </div>
        </>
    )
}

export default Navbar
