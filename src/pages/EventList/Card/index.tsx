import React, { useState } from "react"
import ImageNotFound from '../../../assets/img/image-not-found.png';
import { ReactComponent as CalendarIcon } from '../../../assets/img/calendar.svg';
import { ReactComponent as LocatizationIcon } from '../../../assets/img/map.svg';
import { ReactComponent as WalletIcon } from '../../../assets/img/wallet.svg';
import { ReactComponent as EditIcon } from '../../../assets/img/edit.svg';
import { ReactComponent as RemoveIcon } from '../../../assets/img/trash.svg';

import './styles.css';
import { Event } from "../../../models/Event";
import API from "../../../services/Api";
import SwalMixin from "../../../ds/components/SwalMixin";

interface CardProps {
    event: Event;
    reloadTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Card = ({ event, reloadTrigger }: CardProps) => {
    const [isEventPublic, setIsEventPublic] = useState(!!event.isPublic);

    const isImageURLValid = () => {
        if (
            event.urlImage?.endsWith('.png') ||
            event.urlImage?.endsWith('.jpg')
        ) {
            return true;
        }

        return false;
    };

    const getFormattedDate = () => {
        const formattedDate = event.dateStart!.replace(' ', ' - ');

        return formattedDate;
    };

    const updateEvent = async (isPublic: boolean) => {
        setIsEventPublic(isPublic);

        try {
            await API.patch(`events/${event.id}`, {
                id: event.id,
                isPublic,
            });

            reloadTrigger((prevState) => !prevState);
        } catch(err) {
            SwalMixin.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocorreu um problema ao publicar evento, tente novamente.',
            });
    
            setIsEventPublic(false);
        }
    };

    return (
        <div className="bg-white-w2 rounded-3xl shadow-md">
            <div className="flex">
                <div className="relative w-2/6">
                    <img 
                        src={isImageURLValid() ? event.urlImage : ImageNotFound}
                        alt="Imagem do evento"
                        className="rounded-l-3xl w-full h-full" 
                    />
                </div>
                <div className="w-4/6 p-4 pr-6">
                    <h2 className="font-gilroy-bold text-3xl text-black-b1 text-opacity-70">{event.title}</h2>
                    <p className="font-gilroy-medium text-gray-g5 text-sm leading-4">{event.description}</p>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1 mt-4">
                            <p className="flex items-center gap-1 font-gilroy-medium text-gray-g5 text-sm leading-4">
                                <CalendarIcon />
                                {getFormattedDate()}
                            </p>
                            <p className="flex items-center gap-1 font-gilroy-medium text-gray-g5 text-sm leading-4">
                                <LocatizationIcon />
                                {event.location!.address!}{', '}
                                {event.location!.number} -
                                {event.location!.city}/{event.location!.state}
                            </p>
                            <p className="flex items-center gap-1 font-gilroy-medium text-gray-g5 text-sm leading-4">
                                <WalletIcon />
                                {event.ticket?.price ? `R$ ${event.ticket?.price}` : '-'}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-3">
                            <label className="switch">
                                <input type="checkbox" checked={isEventPublic} onChange={(e) => updateEvent(e.currentTarget.checked)} />
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