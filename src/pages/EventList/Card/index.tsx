import React from "react"
import EventImage from '../../../assets/img/event.jpg';
import { ReactComponent as CalendarIcon } from '../../../assets/img/calendar.svg';
import { ReactComponent as LocatizationIcon } from '../../../assets/img/map.svg';
import { ReactComponent as WalletIcon } from '../../../assets/img/wallet.svg';
import { ReactComponent as EditIcon } from '../../../assets/img/edit.svg';
import { ReactComponent as RemoveIcon } from '../../../assets/img/trash.svg';

import './styles.css';

export const Card = () => {
    return (
        <div className="bg-white-w2 rounded-3xl shadow-md">
            <div className="flex">
                <div className="relative w-2/5">
                    <img src={EventImage} alt="" className="rounded-l-3xl w-full h-full" />
                </div>
                <div className="p-4 pr-6">
                    <h2 className="font-gilroy-bold text-3xl text-black-b1 text-opacity-70">Título do Card</h2>
                    <p className="font-gilroy-medium text-gray-g5 text-sm leading-4">Música popular brasileira ao vivo, ambiente adaptado e segurança nas entradas.</p>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1 mt-4">
                            <p className="flex items-center gap-1 font-gilroy-medium text-gray-g5 text-sm leading-4">
                                <CalendarIcon />
                                01/01/2022 - 20:00
                            </p>
                            <p className="flex items-center gap-1 font-gilroy-medium text-gray-g5 text-sm leading-4">
                                <LocatizationIcon />
                                Rua aleatória, 2020 - Natal/RN
                            </p>
                            <p className="flex items-center gap-1 font-gilroy-medium text-gray-g5 text-sm leading-4">
                                <WalletIcon />
                                R$50,00
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-3">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            </div>
                            <div className="flex justify-between">
                                <button className="flex items-center gap-2 text-sm font-gilroy-regular" onClick={() => {}}>
                                    <EditIcon className="w-4 h-4" />
                                </button>
                                <button className="flex items-center gap-2 text-sm font-gilroy-regular"  onClick={() => {}}>
                                    <RemoveIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};