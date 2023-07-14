import React, { useState } from 'react'
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    UncontrolledAccordion,
} from 'reactstrap'
import { getReduxText } from '../locales'
import { useSelector } from 'react-redux'
import useDownloader from 'react-use-downloader'
import Fuqarolik from '../img/Fuqarolik-kodeksi.pdf'

const About = () => {
    const [open, setOpen] = useState('')
    const language = useSelector((state) => state.language)
    const { download } = useDownloader()
    const toggle = (id) => {
        if (open === id) {
            setOpen()
        } else {
            setOpen(id)
        }
    }
    return (
        <>
            <div className="About">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <UncontrolledAccordion
                                defaultOpen={['1', '2']}
                                stayOpen
                            >
                                <AccordionItem>
                                    <AccordionHeader targetId="1">
                                        <div className="a_acor_name">
                                            {getReduxText(
                                                'about_auction_title',
                                                language
                                            )}
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <div className="a_acor_p">
                                            {getReduxText(
                                                'about_auction_description',
                                                language
                                            )}
                                        </div>
                                    </AccordionBody>
                                    <AccordionHeader targetId="2">
                                        <div className="a_acor_name">
                                            {getReduxText(
                                                'about_auction_title',
                                                language
                                            )}
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <div className="d-flex flex-row flex-wrap align-items-center">
                                            <div
                                                onClick={() =>
                                                    download(
                                                        Fuqarolik,
                                                        'Fuqarolik.pdf'
                                                    )
                                                }
                                                className="a_acor_box mt-2 pointer"
                                            >
                                                <img
                                                    src="/img/icon_pdf.png"
                                                    alt=""
                                                />
                                                {getReduxText(
                                                    'about_auction_file',
                                                    language
                                                )}
                                            </div>

                                            <div
                                                onClick={() =>
                                                    download(
                                                        Fuqarolik,
                                                        'Fuqarolik.pdf'
                                                    )
                                                }
                                                className="a_acor_box mt-2 pointer"
                                            >
                                                <img
                                                    src="/img/icon_pdf.png"
                                                    alt=""
                                                />
                                                {getReduxText(
                                                    'about_auction_file',
                                                    language
                                                )}
                                            </div>

                                            <div
                                                onClick={() =>
                                                    download(
                                                        Fuqarolik,
                                                        'Fuqarolik.pdf'
                                                    )
                                                }
                                                className="a_acor_box mt-2 pointer"
                                            >
                                                <img
                                                    src="/img/icon_pdf.png"
                                                    alt=""
                                                />
                                                {getReduxText(
                                                    'about_auction_file',
                                                    language
                                                )}
                                            </div>

                                            <div
                                                onClick={() =>
                                                    download(
                                                        Fuqarolik,
                                                        'Fuqarolik.pdf'
                                                    )
                                                }
                                                className="a_acor_box mt-2 pointer"
                                            >
                                                <img
                                                    src="/img/icon_pdf.png"
                                                    alt=""
                                                />
                                                {getReduxText(
                                                    'about_auction_file',
                                                    language
                                                )}
                                            </div>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
