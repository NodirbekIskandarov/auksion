import React from 'react'
import ArrowIcon from '../../img/svgs/arrow.svg'
import { getReduxText } from '../../locales'
import { useSelector } from 'react-redux'
import DeleteIcon from '../../img/svgs/delete.svg'

export default function Filter() {
    const language = useSelector((state) => state.language)
    return (
        <div className={'filter-main'}>
            <div className={'filter-container pt-4 px-4'}>
                <img src={ArrowIcon} alt={'arrow'} className={'arrow-icon'} />

                <div className={'text-center filter-title'}>
                    {getReduxText('filter_modal_title', language)}
                </div>

                <div className={'row pt-4'}>
                    <div
                        className={
                            'd-flex flex-column col-12 col-lg-6 col-md-6'
                        }
                    >
                        <label className={'filter-label'}>
                            {getReduxText('filter_modal_lot_number', language)}
                        </label>
                        <input
                            className={'filter-input'}
                            placeholder={getReduxText(
                                'enter_placeholder',
                                language
                            )}
                        />
                    </div>

                    <div
                        className={
                            'd-flex flex-column col-12 col-lg-6 col-md-6'
                        }
                    >
                        <label className={'filter-label'}>
                            {getReduxText('filter_modal_region', language)}
                        </label>
                        <select
                            className={'filter-select'}
                            placeholder={'Tanlang'}
                        >
                            <option>Toshkent</option>
                            <option>Buxoro</option>
                        </select>
                    </div>

                    <div
                        className={
                            'd-flex flex-column mt-4 col-12 col-lg-6 col-md-6'
                        }
                    >
                        <label className={'filter-label'}>
                            {getReduxText('filter_modal_district', language)}
                        </label>
                        <select
                            className={'filter-select'}
                            placeholder={'Tanlang'}
                        >
                            <option>Toshkent</option>
                            <option>Buxoro</option>
                        </select>
                    </div>

                    <div
                        className={
                            'd-flex flex-column mt-4 col-12 col-lg-6 col-md-6'
                        }
                    >
                        <label className={'filter-label'}>
                            {getReduxText('filter_modal_sale_date', language)}
                        </label>
                        <input
                            type={'date'}
                            className={'filter-input'}
                            placeholder={'29.03.2023'}
                        />
                    </div>

                    <div
                        className={
                            'd-flex flex-column mt-4 col-12 col-lg-6 col-md-6'
                        }
                    >
                        <label className={'filter-label'}>
                            {getReduxText('filter_modal_type_buy', language)}
                        </label>
                        <select
                            className={'filter-select'}
                            placeholder={'Tanlang'}
                        >
                            <option>Barchasi</option>
                            <option>Buxoro</option>
                        </select>
                    </div>

                    <div
                        className={
                            'd-flex flex-column mt-4 col-12 col-lg-6 col-md-6'
                        }
                    >
                        <label className={'filter-label'}>
                            {getReduxText('filter_modal_object_type', language)}
                        </label>
                        <select
                            className={'filter-select'}
                            placeholder={'Tanlang'}
                        >
                            <option>Barchasi</option>
                            <option>Buxoro</option>
                        </select>
                    </div>

                    <div
                        className={
                            'd-flex flex-column mt-4 col-12 col-lg-6 col-md-6'
                        }
                    >
                        <label className={'filter-label'}>
                            {getReduxText('filter_modal_sale_type', language)}
                        </label>
                        <select
                            className={'filter-select'}
                            placeholder={'Tanlang'}
                        >
                            <option>Barchasi</option>
                            <option>Buxoro</option>
                        </select>
                    </div>

                    <div
                        className={
                            'd-flex flex-column mt-4 col-12 col-lg-6 col-md-6'
                        }
                    >
                        <label className={'filter-label'}>
                            Savdoni o’tkazish uslubi
                        </label>
                        <select
                            className={'filter-select'}
                            placeholder={'Tanlang'}
                        >
                            <option>Barchasi</option>
                            <option>Buxoro</option>
                        </select>
                    </div>
                </div>

                <div
                    className={
                        'd-flex flex-row align-items-center justify-content-end pe-2 pb-3'
                    }
                >
                    <button className="filter-search-button">
                        <img
                            src="/img/icon_search.png"
                            alt="search"
                            className={'filter-search-icon'}
                        />
                        {getReduxText('nav_8', language)}
                    </button>

                    <button className="filter-delete-button">
                        <img
                            src={DeleteIcon}
                            alt="delete"
                            className={'filter-search-icon'}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
