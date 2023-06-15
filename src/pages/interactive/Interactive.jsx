import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import { getReduxText } from '../../locales'
import CheckDocument from './CheckDocument'
import CheckLease from './CheckLease'
import Properties from './Properties'
import Certificates from './Certificates'
import DefineDishonest from './DefineDishonest'
import ChangeLogin from './ChangeLogin'
import DefineLogin from './DefineLogin'

const Interactive = () => {
    const [activeTab, setActiveTab] = useState('1')
    const language = useSelector((state) => state.language)

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab)
    }

    return (
        <>
            <div className="Interactive">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Nav tabs className={'row mx-1'}>
                                <NavItem className="d-flex justify-content-between">
                                    <NavLink
                                        id="1"
                                        className={classnames({
                                            active: activeTab === '1',
                                        })}
                                        onClick={() => {
                                            toggle('1')
                                        }}
                                    >
                                        <div className="inter_nav_name text-center">
                                            {getReduxText(
                                                'services_check_document',
                                                language
                                            )}
                                        </div>
                                    </NavLink>

                                    <NavLink
                                        id="2"
                                        className={classnames({
                                            active: activeTab === '2',
                                        })}
                                        onClick={() => {
                                            toggle('2')
                                        }}
                                    >
                                        <div className="inter_nav_name text-center">
                                            {getReduxText(
                                                'services_check_rent',
                                                language
                                            )}
                                        </div>
                                    </NavLink>

                                    <NavLink
                                        id="3"
                                        className={classnames({
                                            active: activeTab === '3',
                                        })}
                                        onClick={() => {
                                            toggle('3')
                                        }}
                                    >
                                        <div className="inter_nav_name text-center">
                                            {getReduxText(
                                                'services_define_login',
                                                language
                                            )}
                                        </div>
                                    </NavLink>

                                    <NavLink
                                        id="4"
                                        className={classnames({
                                            active: activeTab === '4',
                                        })}
                                        onClick={() => {
                                            toggle('4')
                                        }}
                                    >
                                        <div className="inter_nav_name text-center">
                                            {getReduxText(
                                                'services_change_login',
                                                language
                                            )}
                                        </div>
                                    </NavLink>

                                    <NavLink
                                        id="5"
                                        className={classnames({
                                            active: activeTab === '5',
                                        })}
                                        onClick={() => {
                                            toggle('5')
                                        }}
                                    >
                                        <div className="inter_nav_name text-center">
                                            {getReduxText(
                                                'services_define_evil',
                                                language
                                            )}
                                        </div>
                                    </NavLink>

                                    <NavLink
                                        id="6"
                                        className={classnames({
                                            active: activeTab === '6',
                                        })}
                                        onClick={() => {
                                            toggle('6')
                                        }}
                                    >
                                        <div className="inter_nav_name text-center">
                                            {getReduxText(
                                                'services_certificates',
                                                language
                                            )}
                                        </div>
                                    </NavLink>

                                    <NavLink
                                        id="7"
                                        className={classnames({
                                            active: activeTab === '7',
                                        })}
                                        onClick={() => {
                                            toggle('7')
                                        }}
                                    >
                                        <div className="inter_nav_name text-center">
                                            {getReduxText(
                                                'services_properties',
                                                language
                                            )}
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>

                        <div className="col-12">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className="">
                                    <CheckDocument />
                                </TabPane>

                                <TabPane tabId="2" className="">
                                    <CheckLease />
                                </TabPane>

                                <TabPane tabId="3" className="">
                                    <DefineLogin />
                                </TabPane>
                                <TabPane tabId="4" className="">
                                    <ChangeLogin />
                                </TabPane>

                                <TabPane tabId="5" className="">
                                    <DefineDishonest />
                                </TabPane>

                                <TabPane tabId="6" className="">
                                    <Certificates />
                                </TabPane>

                                <TabPane tabId="7" className="">
                                    <Properties />
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interactive
